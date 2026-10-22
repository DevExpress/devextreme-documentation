import type { Framework } from '../types.ts';
import type { Adapter } from './common.ts';
import { createAdapter } from './typescript.ts';

const react = createAdapter({
    framework: 'react',
    tool: 'typescript/bin/tsc',
    extensions: /\.(tsx?|jsx?)$/,
});

const jquery = createAdapter({
    framework: 'jquery',
    tool: 'typescript/bin/tsc',
    extensions: /\.(ts|js)$/,
    compilerOptions: { types: ['jquery'], jsx: 'preserve' },
    extraFiles: { 'setup.ts': "import 'jquery';\nimport 'devextreme/integration/jquery';\n" },
});

const vue = createAdapter({
    framework: 'vue',
    tool: 'vue-tsc/bin/vue-tsc.js',
    extensions: /\.vue$/,
    compilerOptions: { jsx: 'preserve' },
});

const angular = createAdapter({
    framework: 'angular',
    tool: '@angular/compiler-cli/bundles/src/bin/ngc.js',
    extensions: /\.ts$/,
    compilerOptions: { experimentalDecorators: true, useDefineForClassFields: false },
    angularOptions: { strictTemplates: true, strictInjectionParameters: true },
});

export const adapters: Record<Framework, Adapter> = { react, jquery, vue, angular };
