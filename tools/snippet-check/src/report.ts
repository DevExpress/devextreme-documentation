import { readFileSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { DOCS_ROOT } from './check.ts';
import type { Diagnostic, SnippetResult } from './types.ts';

interface Category {
    id: string;
    title: string;
    /** What the failure means and what to do about it. */
    advice: string;
    /** Failures in this category might not be snippet bugs. */
    suspect?: boolean;
}

const CATEGORIES: Category[] = [
    {
        id: 'lookalike',
        title: 'Non-ASCII lookalike character in code',
        advice: 'A letter from another alphabet (for example Cyrillic `с` in `сonst`) sits in the code. Retype the line.',
    },
    {
        id: 'vue-return',
        title: 'Vue: `return() {` instead of `return {`',
        advice: 'In `data()`, the parentheses after `return` make the object literal invalid. Change `return() {` to `return {`.',
    },
    {
        id: 'class-syntax',
        title: 'Class-component or Angular syntax in a React snippet',
        advice: 'Leftovers such as `(onOptionChanged)=` or `this.state`. Migrate the snippet to a function component.',
    },
    {
        id: 'vue-in-react',
        title: 'Vue syntax in a React snippet',
        advice: 'Attributes such as `:ref="..."` or `v-model` belong to Vue. Use the React form (`ref={gridRef}`).',
    },
    {
        id: 'html-comment',
        title: 'HTML comment inside JSX',
        advice: 'JSX does not allow `<!-- -->`. Use `{/* ... */}` between elements, or a `/* ... */` comment between attributes.',
    },
    {
        id: 'double-parens',
        title: 'Doubled parentheses in a method declaration',
        advice: 'A method is declared as `name() () {`. Remove the second pair of parentheses.',
    },
    {
        id: 'missing-arrow',
        title: 'Function without `=>` or `function`',
        advice: 'A parameter list is followed directly by `{`. Add `=>` (or the `function` keyword).',
    },
    {
        id: 'unbalanced-quote',
        title: 'Unbalanced quote',
        advice: 'An attribute value is missing its closing quote.',
    },
    {
        id: 'fragment',
        title: 'Fragment that starts mid-expression',
        advice: 'The snippet begins with a chained call such as `.catch(...)`, so it is not valid on its own. Show the whole expression, or accept this form and tell me to add a rule to the tool.',
    },
    {
        id: 'missing-comma',
        title: 'Missing comma',
        advice: 'The previous property, element, or argument is not followed by a comma. The reported line is where the compiler noticed. Check the line before it.',
    },
    {
        id: 'jsx-style',
        title: 'Invalid property name in a JSX `style`',
        advice: 'JSX `style` takes camelCase names: `fontSize`, not `font-size`.',
    },
    {
        id: 'jsx-structure',
        title: 'Invalid JSX structure',
        advice: 'Sibling elements need one parent (wrap them in `<>...</>`), and every tag must be closed. Check the lines around the error.',
    },
    {
        id: 'jsx-text',
        title: 'Stray `>` or `}` in JSX',
        advice: 'A `>` or `}` appears where JSX expects an attribute or text. Look for a comment placed between attributes or a misplaced closing bracket.',
    },
    {
        id: 'ts-in-js',
        title: 'TypeScript syntax in a JavaScript tab',
        advice: 'Type annotations in a `.js` tab. Rename the tab to `.ts`/`.tsx` (and use TypeScript) or remove the annotations.',
    },
    {
        id: 'import',
        title: 'Import problem',
        advice: 'The export does not exist in the pinned DevExtreme version. If the API is new in the version you are documenting, this is not a snippet bug: update the pin in `playground/package.json` once the packages are published. Otherwise, fix the import.',
        suspect: true,
    },
    {
        id: 'angular-template',
        title: 'Angular template: unknown property or element',
        advice: 'The template binds to a property or element that the component or module does not provide. Check the name and the module imports.',
    },
    {
        id: 'unknown-member',
        title: 'Unknown member or name',
        advice: 'The snippet uses a property or variable that is not declared. Declare it, import it, or (for a name that many snippets share) add it to `playground/globals.d.ts`.',
    },
    {
        id: 'type',
        title: 'Type mismatch or unknown option',
        advice: 'The value or option does not match the DevExtreme typings. Check the option name and the type of the value.',
    },
    {
        id: 'syntax',
        title: 'Other syntax error',
        advice: 'The code does not parse. Read the quoted line and the lines just before it: a missing comma, bracket, or arrow is the usual cause.',
    },
    {
        id: 'unused-import',
        title: 'Unused import (warning)',
        advice: 'The import is not used by the snippet. Remove it, or use it in the visible code.',
    },
    { id: 'other', title: 'Other', advice: 'Not classified. Read the compiler message.' },
];

const BY_ID = new Map(CATEGORIES.map((c) => [c.id, c]));

const NON_ASCII_LETTER = /[Ѐ-ӿͰ-Ͽ]/;

function categorize(d: Diagnostic, sourceLine: string, fileLabel: string, framework: string): string {
    const react = framework === 'react';
    if (d.severity === 'warning') return 'unused-import';
    if (NON_ASCII_LETTER.test(sourceLine)) return 'lookalike';
    if (/\.vue$/.test(fileLabel) && /\breturn\s*\(\s*\)\s*\{/.test(sourceLine)) return 'vue-return';
    if (/\(\s*\)\s*\(\s*\)\s*\{/.test(sourceLine)) return 'double-parens';
    if (react && /<!--/.test(sourceLine) && d.code.startsWith('TS1')) return 'html-comment';
    if (react && /(^|\s)(:[\w.-]+=|v-[\w:-]+=|@[\w.-]+=)/.test(sourceLine)) return 'vue-in-react';
    if ((sourceLine.match(/"/g) ?? []).length % 2 === 1 && /=\s*"/.test(sourceLine) && d.code.startsWith('TS1')) return 'unbalanced-quote';
    if (d.message.includes("'=>' expected")) return 'missing-arrow';
    if (/^\s*\.\w+\(/.test(sourceLine) && d.code === 'TS1128') return 'fragment';
    if (/style=\{\{[^}]*\b[a-z]+-[a-z]+\s*:/.test(sourceLine)) return 'jsx-style';
    if (/^\s*\(\w+\)=|\bthis\.(state|props|setState)\b/.test(sourceLine)) return 'class-syntax';
    if (['TS2657', 'TS17008', 'TS17002', 'TS17014', 'TS17015'].includes(d.code)) return 'jsx-structure';
    if (d.code === 'TS1382' || d.code === 'TS1381') return 'jsx-text';
    if (['TS8010', 'TS8011', 'TS8016'].includes(d.code)) return 'ts-in-js';
    if (['TS2614', 'TS2305', 'TS2724', 'TS2307', 'TS2792', 'TS1192'].includes(d.code)) return 'import';
    if (d.code === 'NG8002' || d.code === 'NG8001' || d.code === 'NG8003') return 'angular-template';
    if (['TS2339', 'TS2304', 'TS2551', 'TS2552', 'TS2693'].includes(d.code)) return 'unknown-member';
    if (/^TS(2322|2345|2769|2353|2559|2740|2741|2554|2555)$/.test(d.code)) return 'type';
    if (d.message.includes("',' expected")) return 'missing-comma';
    if (/^TS1\d{3}$/.test(d.code)) return 'syntax';
    return 'other';
}

interface Entry {
    category: Category;
    result: SnippetResult;
    root: Diagnostic;
    followUps: number;
    sourceLine: string;
}

const articleCache = new Map<string, string[]>();
function articleLines(file: string): string[] {
    if (!articleCache.has(file)) {
        articleCache.set(file, readFileSync(resolve(DOCS_ROOT, file), 'utf8').split(/\r?\n/));
    }
    return articleCache.get(file)!;
}

function tabFileName(result: SnippetResult, label: string) {
    return result.snippet.tabs.find((t) => t.label === label)?.fileName ?? label;
}

function toEntries(results: SnippetResult[]): Entry[] {
    const entries: Entry[] = [];
    for (const result of results) {
        if (result.status !== 'fail') continue;
        // One broken line usually causes several follow-up errors. The first one is the root cause.
        const errors = result.diagnostics.filter((d) => d.severity === 'error');
        const root = errors[0];
        const sourceLine = articleLines(root.file)[root.line - 1] ?? '';
        const id = categorize(root, sourceLine, tabFileName(result, root.tab), result.snippet.framework);
        entries.push({ category: BY_ID.get(id)!, result, root, followUps: errors.length - 1, sourceLine });
    }
    return entries;
}

const link = (from: string, file: string, line: number) =>
    `[${file.split('/').slice(-1)[0]}:${line}](${encodeURI(relative(from, resolve(DOCS_ROOT, file)).replace(/\\/g, '/'))}#L${line})`;

const oneLine = (text: string, max = 220) => {
    const clean = text.replace(/\s+/g, ' ').trim();
    return clean.length > max ? `${clean.slice(0, max)}...` : clean;
};

export function buildReport(results: SnippetResult[], reportPath: string, command: string): string {
    const from = dirname(resolve(reportPath));
    const entries = toEntries(results);
    const warnings = results.flatMap((r) => r.diagnostics
        .filter((d) => d.severity === 'warning')
        .map((d) => ({ result: r, root: d, followUps: 0, sourceLine: articleLines(d.file)[d.line - 1] ?? '', category: BY_ID.get('unused-import')! })));

    const count = (status: SnippetResult['status']) => results.filter((r) => r.status === status).length;
    const out: string[] = [
        '# Snippet check report',
        '',
        `Command: \`${command}\``,
        '',
        `${results.length} snippets: **${count('pass')} passed, ${count('fail')} failed**, ${count('skip')} skipped.`,
        '',
        'Each failing snippet is listed once, with its first error (later errors are usually follow-ups of it). Tick the boxes as you fix them, and rerun the command to confirm.',
        '',
    ];

    const groups = CATEGORIES.map((category) => ({
        category,
        items: (category.id === 'unused-import' ? warnings : entries).filter((e) => e.category.id === category.id),
    })).filter((g) => g.items.length);

    out.push('## Summary', '', '| Category | Snippets | Articles | Frameworks |', '|---|---:|---:|---|');
    for (const { category, items } of groups) {
        const articles = new Set(items.map((i) => i.result.snippet.file)).size;
        const frameworks = [...new Set(items.map((i) => i.result.snippet.framework))].join(', ');
        out.push(`| [${category.title}](#${category.id}) | ${items.length} | ${articles} | ${frameworks} |`);
    }
    out.push('');

    for (const { category, items } of groups) {
        out.push(`<a id="${category.id}"></a>`, '', `## ${category.title}`, '', category.advice, '');
        if (category.suspect) out.push('> **Check before fixing:** these may come from the pinned DevExtreme version, not from the snippet.', '');
        const byArticle = new Map<string, typeof items>();
        for (const item of items) {
            byArticle.set(item.result.snippet.file, [...(byArticle.get(item.result.snippet.file) ?? []), item]);
        }
        for (const [file, list] of [...byArticle].sort(([a], [b]) => a.localeCompare(b))) {
            out.push(`### ${file}`, '');
            for (const { result, root, followUps, sourceLine } of list.sort((a, b) => a.root.line - b.root.line)) {
                const { snippet } = result;
                const label = [snippet.framework, tabFileName(result, root.tab), snippet.variant, snippet.widget].filter(Boolean).join(' / ');
                out.push(`- [ ] ${link(from, root.file, root.line)} - ${label}`);
                out.push(`  - ${root.code}: ${oneLine(root.message)}${followUps ? ` (+${followUps} follow-up errors)` : ''}`);
                if (sourceLine.trim()) out.push(`  - \`${oneLine(sourceLine.trim(), 160).replace(/`/g, "'")}\``);
            }
            out.push('');
        }
    }

    const skipped = results.filter((r) => r.status === 'skip');
    if (skipped.length) {
        const reasons = new Map<string, number>();
        for (const r of skipped) reasons.set(r.reason ?? '', (reasons.get(r.reason ?? '') ?? 0) + 1);
        out.push('## Skipped', '', '| Reason | Snippets |', '|---|---:|');
        for (const [reason, n] of [...reasons].sort((a, b) => b[1] - a[1])) out.push(`| ${reason.replace(/\|/g, '/')} | ${n} |`);
        out.push('');
    }
    return out.join('\n');
}
