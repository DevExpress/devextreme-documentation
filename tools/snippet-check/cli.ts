import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { parseArgs } from 'node:util';
import { checkSnippets, DOCS_ROOT, PLAYGROUND } from './src/check.ts';
import type { Framework, SnippetResult } from './src/types.ts';

const ALL: Framework[] = ['react', 'jquery', 'vue', 'angular'];

const USAGE = `Usage: npm run check-snippets -- <path...> [options]

  <path>                 Markdown article or folder (checked recursively).
  --changed              Check articles changed against a git base and in the working tree.
  --base <ref>           Git base for --changed (default: origin/main).
  --framework <list>     Comma-separated: ${ALL.join(', ')} (default: all).
  --widget <Name>        Widget for {WidgetName} placeholders, for example DataGrid.
  --check-js             Type-check JavaScript tabs instead of only their syntax.
  --json                 Print results as JSON.
  --quiet                Print only failures and the summary.
`;

function changedArticles(base: string): string[] {
    const git = (...args: string[]) => execFileSync('git', args, { cwd: DOCS_ROOT, encoding: 'utf8' })
        .split(/\r?\n/).filter(Boolean);
    const names = new Set([
        ...git('diff', '--name-only', '--diff-filter=d', `${base}...HEAD`),
        ...git('diff', '--name-only', '--diff-filter=d', 'HEAD'),
        ...git('ls-files', '--others', '--exclude-standard'),
    ]);
    return [...names].filter((n) => n.endsWith('.md') && !n.startsWith('tools/')).map((n) => resolve(DOCS_ROOT, n)).filter(existsSync);
}

function print(results: SnippetResult[], quiet: boolean) {
    const label = { pass: 'PASS', fail: 'FAIL', skip: 'SKIP' } as const;
    for (const { snippet, status, reason, diagnostics } of results) {
        if (quiet && status !== 'fail') continue;
        const variant = snippet.variant ? ` [${snippet.variant}]` : '';
        const widget = snippet.widget ? ` (${snippet.widget})` : '';
        console.log(`${label[status]}  ${snippet.framework.padEnd(7)} ${snippet.file}:${snippet.line}${variant}${widget}${reason ? `  - ${reason}` : ''}`);
        if (status === 'skip' && quiet) continue;
        for (const d of diagnostics) {
            console.log(`        ${d.severity === 'error' ? 'error' : 'warn '} ${d.code} ${d.file}:${d.line} (${d.tab}): ${d.message}`);
        }
    }
    const count = (s: SnippetResult['status']) => results.filter((r) => r.status === s).length;
    console.log(`\n${results.length} snippets: ${count('pass')} passed, ${count('fail')} failed, ${count('skip')} skipped`);
}

function main() {
    const { values, positionals } = parseArgs({
        allowPositionals: true,
        options: {
            changed: { type: 'boolean' },
            base: { type: 'string' },
            framework: { type: 'string' },
            widget: { type: 'string' },
            'check-js': { type: 'boolean' },
            json: { type: 'boolean' },
            quiet: { type: 'boolean' },
            help: { type: 'boolean' },
        },
    });
    if (values.help) { console.log(USAGE); return 0; }

    if (!existsSync(join(PLAYGROUND, 'node_modules'))) {
        console.error('The playground is not installed. Run: npm run snippet-check:setup');
        return 2;
    }

    const frameworks = (values.framework?.split(',').map((f) => f.trim().toLowerCase()) ?? ALL) as Framework[];
    const unknown = frameworks.filter((f) => !ALL.includes(f));
    if (unknown.length) { console.error(`Unknown framework: ${unknown.join(', ')}`); return 2; }

    const paths = [...positionals];
    if (values.changed) paths.push(...changedArticles(values.base ?? 'origin/main'));
    if (!paths.length) { console.error(USAGE); return 2; }

    const results = checkSnippets({
        paths,
        frameworks,
        widget: values.widget,
        checkJs: values['check-js'],
    });
    if (values.json) console.log(JSON.stringify(results, null, 2));
    else print(results, values.quiet ?? false);
    return results.some((r) => r.status === 'fail') ? 1 : 0;
}

process.exitCode = main();
