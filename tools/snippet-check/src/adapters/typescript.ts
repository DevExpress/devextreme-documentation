import { writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import type { Framework, Snippet } from '../types.ts';
import {
    baseCompilerOptions, classify, parseDiagnostics, run, writeSnippets,
    type Adapter, type CheckOptions, type RawDiagnostic,
} from './common.ts';

interface Flavor {
    framework: Framework;
    /** Tool script, relative to `playground/node_modules`. */
    tool: string;
    /** File extensions that make a snippet checkable. */
    extensions: RegExp;
    compilerOptions?: Record<string, unknown>;
    /** Extra files the project needs, relative to the scratch folder. */
    extraFiles?: Record<string, string>;
    angularOptions?: Record<string, unknown>;
    skipReason?(snippet: Snippet): string | undefined;
}

export function createAdapter(flavor: Flavor): Adapter {
    return {
        framework: flavor.framework,
        skipReason(snippet) {
            if (!snippet.tabs.some((tab) => flavor.extensions.test(tab.fileName))) {
                return `no ${flavor.framework} code tab (${snippet.tabs.map((t) => t.fileName).join(', ')})`;
            }
            return flavor.skipReason?.(snippet);
        },
        check(snippets, options: CheckOptions): RawDiagnostic[] {
            writeSnippets(options.workDir, snippets);
            const toPlayground = relative(options.workDir, options.playground).replace(/\\/g, '/');
            for (const [name, content] of Object.entries(flavor.extraFiles ?? {})) {
                writeFileSync(join(options.workDir, name), content);
            }
            writeFileSync(join(options.workDir, 'tsconfig.json'), JSON.stringify({
                compilerOptions: {
                    ...baseCompilerOptions,
                    checkJs: options.checkJs,
                    ...flavor.compilerOptions,
                },
                ...(flavor.angularOptions ? { angularCompilerOptions: flavor.angularOptions } : {}),
                include: ['snippets/**/*', '*.ts', `${toPlayground}/globals.d.ts`],
            }, null, 2));
            const { output, status } = run(
                join(options.playground, 'node_modules', flavor.tool),
                ['-p', join(options.workDir, 'tsconfig.json'), '--pretty', 'false'],
                options.workDir,
            );
            const diagnostics = parseDiagnostics(output);
            if (status !== 0 && !diagnostics.length) {
                throw new Error(`${flavor.tool} failed without reporting diagnostics:\n${output.trim().slice(0, 2000)}`);
            }
            return classify(diagnostics);
        },
    };
}
