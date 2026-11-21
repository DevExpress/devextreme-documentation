import { readFileSync } from 'node:fs';
import type { Framework, Snippet, Tab } from './types.ts';

const FRAMEWORK_HEADING = /^#{1,6}\s*(jQuery|Angular|Vue|React|ASP\.NET[\w .]*|Blazor)\s*$/i;

// `<!-- tab: App.vue -->`, or a bare language label such as `<!--JavaScript-->`.
const TAB_MARKER = /^(\s{4,})<!--\s*(tab:\s*)?(.+?)\s*-->(.*)$/;
const BARE_LABELS = /^(JavaScript|TypeScript|HTML|CSS|Razor C#|C#|VB|[\w.-]+\.\w+)$/;

const LANGUAGE_FILE: Record<string, string> = {
    javascript: 'index.js',
    typescript: 'index.ts',
    html: 'index.html',
    css: 'index.css',
};

const FILE_NAME = /^([\w.-]+\.(?:tsx|ts|jsx|js|vue|html|css|json|cs|cshtml|vb))\b/i;

function toFramework(heading: string): Framework | 'other' {
    const name = heading.toLowerCase();
    if (name === 'jquery') return 'jquery';
    if (name === 'angular') return 'angular';
    if (name === 'vue') return 'vue';
    if (name === 'react') return 'react';
    return 'other';
}

function toFileName(label: string, framework: Framework | 'other'): string {
    const byName = FILE_NAME.exec(label);
    if (byName) return byName[1];
    const byLanguage = LANGUAGE_FILE[label.toLowerCase()];
    if (byLanguage) return byLanguage;
    if (/component$/i.test(label) && framework === 'react') return 'App.tsx';
    return label.replace(/[^\w.-]+/g, '_');
}

/** Some articles indent code with tabs. */
const expandLeadingTabs = (line: string) => line.replace(/^[ \t]+/, (lead) => lead.replace(/\t/g, '    '));

const indentOf = (line: string) => /^ */.exec(line)![0].length;

interface RawTab extends Tab {
    framework: Framework | 'other';
    groupStart: number;
}

function readTabs(lines: string[]): RawTab[] {
    const tabs: RawTab[] = [];
    let framework: Framework | 'other' | null = null;
    let lastEnd = -1;
    let groupStart = -1;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const heading = FRAMEWORK_HEADING.exec(line);
        if (heading) {
            framework = toFramework(heading[1]);
            continue;
        }
        if (/^---\s*$/.test(line)) {
            framework = null;
            continue;
        }

        const marker = TAB_MARKER.exec(line);
        if (!marker || !framework) continue;
        const [, indent, prefix, label, rest] = marker;
        if (!prefix && !BARE_LABELS.test(label)) continue;

        const base = indent.length;
        const code: string[] = [];
        const firstLine = i + 2;
        if (rest.trim()) code.push(rest.trim());

        let j = i + 1;
        for (; j < lines.length; j++) {
            const current = lines[j];
            if (current.trim() === '') { code.push(''); continue; }
            if (indentOf(current) < base) break;
            const next = TAB_MARKER.exec(current);
            if (next && indentOf(current) === base && (next[2] || BARE_LABELS.test(next[3]))) break;
            code.push(current.slice(base));
        }
        while (code.length && code[code.length - 1] === '') code.pop();

        // Tabs that follow each other with only blank lines between them form one snippet.
        const continues = lastEnd >= 0 && lines.slice(lastEnd, i).every((l) => l.trim() === '');
        if (!continues) groupStart = i;

        tabs.push({
            fileName: toFileName(label, framework),
            label,
            code: code.join('\n'),
            line: rest.trim() ? i + 1 : firstLine,
            framework,
            groupStart,
        });
        lastEnd = j;
        i = j - 1;
    }
    return tabs;
}

/**
 * Splits a group into alternative variants when two tabs write the same file
 * (for example `App.vue (Options API)` and `App.vue (Composition API)`).
 */
function expandVariants(tabs: Tab[]): Array<{ variant?: string; tabs: Tab[] }> {
    const byFile = new Map<string, Tab[]>();
    for (const tab of tabs) byFile.set(tab.fileName, [...(byFile.get(tab.fileName) ?? []), tab]);
    const count = Math.max(...[...byFile.values()].map((v) => v.length));
    if (count === 1) return [{ tabs }];

    const result: Array<{ variant?: string; tabs: Tab[] }> = [];
    for (let v = 0; v < count; v++) {
        const picked: Tab[] = [];
        let variant: string | undefined;
        for (const group of byFile.values()) {
            const tab = group[Math.min(v, group.length - 1)];
            picked.push(tab);
            if (group.length > 1) variant ??= tab.label;
        }
        result.push({ variant, tabs: picked });
    }
    return result;
}

export function extractSnippets(absolutePath: string, relativePath: string, startId: number): Snippet[] {
    const lines = readFileSync(absolutePath, 'utf8').split(/\r?\n/).map(expandLeadingTabs);
    const raw = readTabs(lines);
    const groups = new Map<number, RawTab[]>();
    for (const tab of raw) groups.set(tab.groupStart, [...(groups.get(tab.groupStart) ?? []), tab]);

    const snippets: Snippet[] = [];
    let id = startId;
    for (const group of groups.values()) {
        const framework = group[0].framework;
        if (framework === 'other') continue;
        const tabs: Tab[] = group.map(({ fileName, label, code, line }) => ({ fileName, label, code, line }));
        for (const { variant, tabs: variantTabs } of expandVariants(tabs)) {
            snippets.push({
                id: `s${String(id++).padStart(4, '0')}`,
                file: relativePath,
                framework,
                line: variantTabs[0].line - 1,
                tabs: variantTabs,
                variant,
            });
        }
    }
    return snippets;
}
