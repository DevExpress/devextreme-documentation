import assert from 'node:assert/strict';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import { parseDiagnostics } from '../src/adapters/common.ts';
import { checkSnippets } from '../src/check.ts';
import { extractSnippets } from '../src/extract.ts';
import { replaceElisions, widgetsFromPath } from '../src/resolve.ts';
import type { Framework } from '../src/types.ts';

const FIXTURES = join(import.meta.dirname, 'fixtures');
const ALL: Framework[] = ['react', 'jquery', 'vue', 'angular'];

describe('extract', () => {
    const snippets = extractSnippets(join(FIXTURES, 'valid.md'), 'valid.md', 1);

    it('finds one snippet per framework and splits alternative variants', () => {
        assert.deepEqual(
            snippets.map((s) => `${s.framework}${s.variant ? `:${s.variant}` : ''}`),
            ['jquery', 'angular', 'vue:App.vue (Composition API)', 'vue:App.vue (Options API)', 'react'],
        );
    });

    it('keeps tabs of one group together and reads tab-indented lines', () => {
        assert.deepEqual(snippets[1].tabs.map((t) => t.fileName), ['app.component.html', 'app.component.ts']);
        assert.match(snippets[4].tabs[0].code, /from 'devextreme-react\/data-grid'/);
    });

    it('maps tab lines back to the article', () => {
        const [jquery] = snippets;
        assert.equal(jquery.tabs[0].line, 4);
    });
});

describe('replaceElisions', () => {
    it('removes bare tokens in tags and keeps line count', () => {
        const code = '<DataGrid ... >\n    <Column ... />\n</DataGrid>';
        const result = replaceElisions(code, 'App.tsx');
        assert.equal(result.split('\n').length, 3);
        assert.doesNotMatch(result, /\.\.\./);
    });

    it('replaces values, calls, arrays, and imports', () => {
        const result = replaceElisions("import { ..., ViewChild } from '@angular/core';\nconst a = { data: ..., b: [ ... ], c: f(...) };", 'a.ts');
        assert.equal(result, "import { ViewChild } from '@angular/core';\nconst a = { data: undefined as any, b: [], c: f() };");
    });

    it('does not touch comments, strings, or spreads', () => {
        const code = "const s = 'Loading...'; // ...\nconst t = [...items, ...other];";
        assert.equal(replaceElisions(code, 'a.ts'), code);
    });

    it('turns JSX comments in attribute position into JS comments', () => {
        const result = replaceElisions('<A b="1" {/* note */}>\n    {/* child */}\n</A>', 'App.tsx');
        assert.equal(result, '<A b="1" /* note */>\n    {/* child */}\n</A>');
    });
});

describe('widgetsFromPath', () => {
    it('detects widgets from api-reference and concepts paths', () => {
        assert.deepEqual(widgetsFromPath('api-reference/10 UI Components/dxDataGrid/1 Configuration/x.md'), ['DataGrid']);
        assert.deepEqual(widgetsFromPath('api-reference/10 UI Components/GridBase/3 Methods/refresh().md'), ['DataGrid', 'TreeList']);
        assert.deepEqual(widgetsFromPath('concepts/05 UI Components/TreeList/20 Editing/x.md'), ['TreeList']);
        assert.deepEqual(widgetsFromPath('api-reference/30 Data Layer/Store/x.md'), []);
    });
});

describe('parseDiagnostics', () => {
    it('maps compiler output to snippets', () => {
        const [d] = parseDiagnostics("snippets/s0001/App.tsx(4,5): error TS2322: Type 'a' is not assignable to type 'b'.\n  More detail.");
        assert.deepEqual([d.snippetId, d.fileName, d.line, d.code], ['s0001', 'App.tsx', 4, 'TS2322']);
        assert.match(d.message, /More detail/);
    });

    it('throws when the compiler reports errors outside of the snippets', () => {
        assert.throws(() => parseDiagnostics('error TS500: The Angular Compiler requires TypeScript >=6.0.0'), /outside of the snippets/);
    });
});

describe('checkSnippets (runs the real compilers)', () => {
    it('passes valid snippets in every framework', () => {
        const results = checkSnippets({ paths: [join(FIXTURES, 'valid.md')], frameworks: ALL });
        const failures = results.filter((r) => r.status !== 'pass');
        assert.deepEqual(failures.map((r) => [r.snippet.framework, r.status, r.diagnostics.map((d) => d.message)]), []);
        assert.equal(results.length, 5);
    });

    it('fails broken snippets in every framework', () => {
        const results = checkSnippets({ paths: [join(FIXTURES, 'broken.md')], frameworks: ALL });
        const failed = new Set(results.filter((r) => r.status === 'fail').map((r) => `${r.snippet.framework}`));
        assert.deepEqual([...failed].sort(), ['angular', 'jquery', 'react', 'vue']);
        const codes = results.flatMap((r) => r.diagnostics.map((d) => d.code));
        assert.ok(codes.includes('NG8002'), 'Angular unknown property');
        assert.ok(codes.includes('TS2339'), 'Angular unknown member in template');
        assert.ok(codes.includes('TS1005'), 'Vue syntax error');
    });
});
