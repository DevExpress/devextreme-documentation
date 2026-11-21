import type { Snippet, Tab } from './types.ts';

/** Shared base types in `api-reference` that document several concrete widgets. */
const BASE_TYPES: Record<string, string[]> = {
    GridBase: ['DataGrid', 'TreeList'],
    GridBaseColumn: ['DataGrid', 'TreeList'],
    '15 grids': ['DataGrid', 'TreeList'],
};

const toKebab = (pascal: string) => pascal.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
const toCamel = (pascal: string) => pascal[0].toLowerCase() + pascal.slice(1);

/** Finds the widgets an article documents, based on its path. Returns an empty list if it cannot tell. */
export function widgetsFromPath(relativePath: string): string[] {
    const segments = relativePath.split(/[\\/]/);
    for (const segment of segments) {
        if (BASE_TYPES[segment]) return BASE_TYPES[segment];
    }
    for (const segment of segments) {
        const dx = /^dx([A-Z]\w*)$/.exec(segment);
        if (dx) return [dx[1]];
    }
    // `concepts/05 UI Components/<Widget>/...`
    const index = segments.findIndex((s) => /UI Components$/.test(s));
    if (index >= 0 && segments[index + 1] && /^[A-Z]\w*$/.test(segments[index + 1])) {
        return [segments[index + 1]];
    }
    return [];
}

export const hasWidgetPlaceholders = (code: string) => /\{(WidgetName|widgetName|widget-name|widgetname)\}/.test(code);

function replaceWidgetPlaceholders(code: string, widget: string): string {
    return code
        .replace(/\{WidgetName\}/g, widget)
        .replace(/\{widgetName\}/g, toCamel(widget))
        .replace(/\{widget-name\}/g, toKebab(widget))
        .replace(/\{widgetname\}/g, widget.toLowerCase());
}

const isTypeScript = (fileName: string) => /\.(tsx?|vue)$/.test(fileName);

const MASK = '\u0000';

/**
 * Replaces the `...` elisions that documentation uses with valid code.
 * The replacement never adds or removes lines, so diagnostics map back to the article.
 */
export function replaceElisions(code: string, fileName: string): string {
    const stub = isTypeScript(fileName) ? 'undefined as any' : 'undefined';
    const masked: string[] = [];
    const mask = (text: string) => `${MASK}${masked.push(text) - 1}${MASK}`;

    let result = code
        // Comments and strings stay as they are.
        .replace(/<!--[\s\S]*?-->|\/\*[\s\S]*?\*\/|@\*[\s\S]*?\*@|(^|[^:])\/\/[^\n]*/g, (match, lead) =>
            lead === undefined ? mask(match) : lead + mask(match.slice(lead.length)))
        .replace(/'(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*"|`(?:[^`\\]|\\.)*`/g, mask);

    result = result
        // import { ..., ViewChild } from '...'   |   import { Component, ... } from '...'
        .replace(/\{([^{}\n]*)\}/g, (match, inner: string) => {
            if (!/(^|[\s,])\.\.\.(?=[\s,]|$)/.test(inner)) return match;
            const items = inner.split(',').map((s) => s.trim()).filter((s) => s && s !== '...');
            return items.length ? `{ ${items.join(', ')} }` : '{}';
        })
        // foo(...)  ->  foo()
        .replace(/\(\s*\.\.\.\s*\)/g, '()')
        // [ ... ]  ->  []
        .replace(/\[\s*\.\.\.\s*\]/g, '[]')
        // key: ...,   key = ...;   return ...;
        .replace(/(:|=|return)\s*\.\.\.(?=\s*[,;)}\]\n]|\s*$)/g, `$1 ${stub}`)
        // A bare `...` token inside a tag or on its own line.
        .replace(/(^|\s)\.\.\.(?=\s|\/?>|$)/gm, '$1');

    result = result.replace(/([}\u0000\w])([ \t]*)\{(\u0000\d+\u0000)\}/g, (match, before, space, comment) =>
        // `<Column a="1" {/* note */}>` is not valid JSX, but `/* note */` is.
        (masked[Number(comment.slice(1, -1))].startsWith('/*') ? `${before}${space}${comment}` : match));

    return result.replace(new RegExp(`${MASK}(\\d+)${MASK}`, 'g'), (_, index) => masked[Number(index)]);
}

/** Articles often show `@NgModule({ ... })` without the class it decorates. */
function completeDecorators(code: string): string {
    const decorators = [...code.matchAll(/^@(?:NgModule|Component|Directive|Injectable|Pipe)\s*\(/gm)];
    if (!decorators.length) return code;
    return /\bclass\b/.test(code.slice(decorators.at(-1)!.index)) ? code : `${code}\nclass __Fragment {}`;
}

export function resolveSnippet(snippet: Snippet, widget?: string): Snippet {
    const tabs: Tab[] = snippet.tabs.map((tab) => {
        const withWidget = widget ? replaceWidgetPlaceholders(tab.code, widget) : tab.code;
        const code = replaceElisions(withWidget, tab.fileName);
        return { ...tab, code: snippet.framework === 'angular' && tab.fileName.endsWith('.ts') ? completeDecorators(code) : code };
    });
    return { ...snippet, tabs, widget };
}
