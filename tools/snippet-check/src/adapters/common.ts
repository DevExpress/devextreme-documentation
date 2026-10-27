import { spawnSync } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import type { Framework, Snippet } from '../types.ts';

export interface RawDiagnostic {
    snippetId: string;
    fileName: string;
    line: number;
    code: string;
    message: string;
    severity: 'error' | 'warning';
}

export interface CheckOptions {
    /** Absolute path of the playground folder that holds the pinned dependencies. */
    playground: string;
    /** Absolute path of the scratch folder for this framework. */
    workDir: string;
    /** Type-check JavaScript tabs instead of only checking their syntax. */
    checkJs: boolean;
}

export interface Adapter {
    framework: Framework;
    /** Returns a reason when the snippet cannot be checked by this adapter. */
    skipReason(snippet: Snippet): string | undefined;
    check(snippets: Snippet[], options: CheckOptions): RawDiagnostic[];
}

export function run(script: string, args: string[], cwd: string) {
    const result = spawnSync(process.execPath, [script, ...args], {
        cwd,
        encoding: 'utf8',
        maxBuffer: 256 * 1024 * 1024,
    });
    if (result.error) throw result.error;
    return { output: `${result.stdout}\n${result.stderr}`, status: result.status };
}

const MODULE_SYNTAX = /^\s*(import|export)\b/m;

/** Makes script-like TypeScript and JavaScript files modules so snippets do not share a global scope. */
function isolate(fileName: string, code: string): string {
    if (!/\.(tsx?|jsx?)$/.test(fileName) || MODULE_SYNTAX.test(code)) return code;
    return `${code}\nexport {};`;
}

export function writeSnippets(workDir: string, snippets: Snippet[]) {
    rmSync(workDir, { recursive: true, force: true });
    for (const snippet of snippets) {
        for (const tab of snippet.tabs) {
            const target = join(workDir, 'snippets', snippet.id, tab.fileName);
            mkdirSync(dirname(target), { recursive: true });
            writeFileSync(target, isolate(tab.fileName, tab.code));
        }
    }
}

// path(line,col): error TS1234: message        (tsc, vue-tsc)
// path:line:col - error NG8001: message         (ngc)
const DIAGNOSTIC = /^(.+?)(?:\((\d+),\d+\)|:(\d+):\d+)(?::| -) (error|warning) ((?:TS|NG)\d+): (.*)$/;
const LOCATION = /snippets\/(s\d+)\/(.+)$/;

const ANY_ERROR = /\b(?:TS|NG)\d+\b/;

/**
 * Parses compiler output. Output that does not belong to a snippet (a crash, a broken
 * playground, an error in a shared file) throws, so a broken tool never reports a pass.
 */
export function parseDiagnostics(output: string): RawDiagnostic[] {
    const diagnostics: RawDiagnostic[] = [];
    const unattributed: string[] = [];
    let last: RawDiagnostic | undefined;
    for (const line of output.split(/\r?\n/)) {
        const plain = line.replace(/\u001b\[\d+m/g, '');
        const match = DIAGNOSTIC.exec(plain);
        const where = match && LOCATION.exec(match[1].replace(/\\/g, '/'));
        if (!where && /\berror\b/i.test(plain) && ANY_ERROR.test(plain)) unattributed.push(plain);
        if (match && where) {
            last = {
                snippetId: where[1],
                fileName: where[2],
                line: Number(match[2] ?? match[3]),
                severity: match[4] as 'error' | 'warning',
                code: match[5],
                message: match[6],
            };
            diagnostics.push(last);
        } else if (last && /^\s+\S/.test(line)) {
            last.message += ` ${line.trim()}`;
        } else if (line.trim()) {
            last = undefined;
        }
    }
    if (unattributed.length) {
        throw new Error(`The compiler reported errors outside of the snippets:\n${unattributed.slice(0, 10).join('\n')}`);
    }
    return diagnostics;
}

/** Diagnostics that point at unused code are reported, but they do not fail a snippet. */
const WARNING_CODES = new Set(['TS6133', 'TS6192', 'TS6196', 'TS6198', 'TS6199']);

export function classify(diagnostics: RawDiagnostic[]): RawDiagnostic[] {
    return diagnostics.map((d) => (WARNING_CODES.has(d.code) ? { ...d, severity: 'warning' } : d));
}

export const baseCompilerOptions = {
    target: 'ES2022',
    lib: ['ES2022', 'DOM', 'DOM.Iterable'],
    module: 'ESNext',
    moduleResolution: 'Bundler',
    jsx: 'react-jsx',
    strict: true,
    noUnusedLocals: true,
    skipLibCheck: true,
    noEmit: true,
    resolveJsonModule: true,
    esModuleInterop: true,
    allowJs: true,
    types: [] as string[],
};

export type { Framework };
