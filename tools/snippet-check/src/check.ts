import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { adapters } from './adapters/index.ts';
import type { RawDiagnostic } from './adapters/common.ts';
import { extractSnippets } from './extract.ts';
import { hasWidgetPlaceholders, resolveSnippet, widgetsFromPath } from './resolve.ts';
import type { Diagnostic, Framework, Snippet, SnippetResult } from './types.ts';

export const TOOL_ROOT = resolve(import.meta.dirname, '..');
export const PLAYGROUND = join(TOOL_ROOT, 'playground');
export const DOCS_ROOT = resolve(TOOL_ROOT, '..', '..');

interface IgnoreRule {
    code: string;
    messageMatches?: string;
    reason: string;
}

interface Config {
    checkJs: boolean;
    ignore: IgnoreRule[];
}

export interface CheckRequest {
    paths: string[];
    frameworks: Framework[];
    /** Overrides the widget that is detected from the article path. */
    widget?: string;
    checkJs?: boolean;
}

function loadConfig(): Config {
    return JSON.parse(readFileSync(join(TOOL_ROOT, 'config.json'), 'utf8'));
}

function collectMarkdown(target: string): string[] {
    const absolute = resolve(target);
    if (!existsSync(absolute)) throw new Error(`Path does not exist: ${target}`);
    if (statSync(absolute).isFile()) return [absolute];
    return readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
        const full = join(absolute, entry.name);
        if (entry.isDirectory()) return entry.name === 'node_modules' ? [] : collectMarkdown(full);
        return entry.name.endsWith('.md') ? [full] : [];
    });
}

export function collectSnippets(request: CheckRequest): { snippets: Snippet[]; skipped: SnippetResult[] } {
    const files = [...new Set(request.paths.flatMap(collectMarkdown))];
    const snippets: Snippet[] = [];
    const skipped: SnippetResult[] = [];
    let nextId = 1;

    for (const file of files) {
        const relativePath = relative(DOCS_ROOT, file).replace(/\\/g, '/');
        const extracted = extractSnippets(file, relativePath, nextId);
        nextId += extracted.length;

        for (const snippet of extracted) {
            if (!request.frameworks.includes(snippet.framework)) continue;
            const needsWidget = snippet.tabs.some((tab) => hasWidgetPlaceholders(tab.code));
            if (!needsWidget) {
                snippets.push(resolveSnippet(snippet));
                continue;
            }
            const widgets = request.widget ? [request.widget] : widgetsFromPath(relativePath);
            if (!widgets.length) {
                skipped.push({
                    snippet,
                    status: 'skip',
                    reason: 'uses {WidgetName} placeholders, but the widget is unknown (pass --widget)',
                    diagnostics: [],
                });
                continue;
            }
            widgets.forEach((widget, index) => {
                const copy = index === 0 ? snippet : { ...snippet, id: `s${String(nextId++).padStart(4, '0')}` };
                snippets.push(resolveSnippet(copy, widget));
            });
        }
    }
    return { snippets, skipped };
}

const UNUSED_CODES = new Set(['TS6133', 'TS6192', 'TS6196', 'TS6198', 'TS6199']);

/** 1-based line numbers that belong to an `import` statement. */
function importLines(code: string): Set<number> {
    const lines = new Set<number>();
    for (const match of code.matchAll(/\bimport\b[^;]*?\bfrom\s*(['"]).*?\1/g)) {
        const first = code.slice(0, match.index).split('\n').length;
        const last = first + match[0].split('\n').length - 1;
        for (let line = first; line <= last; line++) lines.add(line);
    }
    return lines;
}

function isIgnored(diagnostic: RawDiagnostic, rules: IgnoreRule[]) {
    return rules.some((rule) => rule.code === diagnostic.code
        && (!rule.messageMatches || new RegExp(rule.messageMatches).test(diagnostic.message)));
}

export function checkSnippets(request: CheckRequest): SnippetResult[] {
    const config = loadConfig();
    const { snippets, skipped } = collectSnippets(request);
    const results: SnippetResult[] = [...skipped];

    for (const framework of request.frameworks) {
        const adapter = adapters[framework];
        const checkable: Snippet[] = [];
        for (const snippet of snippets.filter((s) => s.framework === framework)) {
            const reason = adapter.skipReason(snippet);
            if (reason) results.push({ snippet, status: 'skip', reason, diagnostics: [] });
            else checkable.push(snippet);
        }
        if (!checkable.length) continue;

        const raw = adapter.check(checkable, {
            playground: PLAYGROUND,
            workDir: join(PLAYGROUND, '.work', framework),
            checkJs: request.checkJs ?? config.checkJs,
        });

        for (const snippet of checkable) {
            const diagnostics: Diagnostic[] = raw
                .filter((d) => d.snippetId === snippet.id && !isIgnored(d, config.ignore))
                .flatMap((d) => {
                    const tab = snippet.tabs.find((t) => t.fileName === d.fileName);
                    if (!tab) return [];
                    // Snippets elide most of their code, so only unused imports are worth reporting.
                    if (UNUSED_CODES.has(d.code) && !importLines(tab.code).has(d.line)) return [];
                    return [{
                        code: d.code,
                        message: d.message,
                        severity: d.severity,
                        file: snippet.file,
                        line: tab.line + d.line - 1,
                        tab: tab.label,
                    }];
                });
            const failed = diagnostics.some((d) => d.severity === 'error');
            results.push({ snippet, status: failed ? 'fail' : 'pass', diagnostics });
        }
    }
    return results.sort((a, b) => a.snippet.file.localeCompare(b.snippet.file) || a.snippet.line - b.snippet.line);
}
