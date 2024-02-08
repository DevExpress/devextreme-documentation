In certain scenarios, you may want to utilize a custom bundle rather than an automatically generated one. The example below illustrates how to implement a custom bundle with Vite.

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-vite-vue-bundling"
}

For best experience, we recommend you to use the latest version of DevExtreme alongside ESM.

To create a custom bundle, follow the steps below:

1. Create a `main.js` file with re-exports of DevExtreme components that you want to include in the bundle.

        <!-- tab: main.js -->
        export { DxButton } from "devextreme-vue/button";
        export { DxDataGrid } from "devextreme-vue/data-grid";

2. Create a separate [Vite configuration](https://vitejs.dev/guide/build.html#library-mode) `vite.config.devextreme.bundle.js` file.

        <!-- tab: vite.config.devextreme.bundle.js-->
        import { resolve } from 'path'
        import { defineConfig } from 'vite'

        export default defineConfig({
            build: {
                commonjsOptions: {
                    esmExternals: true 
                },
                lib: {
                    entry: resolve(__dirname, 'main.js'),
                    name: 'DevExtreme Vue Bundle',
                    formats: ['es', 'cjs'],
                    fileName: 'devextreme-vue-bundle',
                },
                rollupOptions: {
                    external: ['vue'],
                    output: {
                        globals: {
                            vue: 'Vue',
                        },
                    },
                },
                outDir: 'devextreme-bundle'
            },
        })

    In the code snippet above, the following options are presented:

    - `esmExternals: true`     
    Treat external dependencies (Vue in this case) as ECMAScript modules.

    - `entry: resolve(__dirname, 'main.js')`    
    A main entry file. We created it at the step one.

    - `formats: ['es', 'cjs']`    
    Output formats.

    - `fileName: 'devextreme-vue-bundle'`    
    Your bundle name.

    - `outDir: 'devextreme-bundle'`    
    A folder for the generated bundle. The default value is `dist`.

    Leave `vite.config.js` file as it is to build Vue applications separately.

3. Configure your `package.json`.

        <!-- tab: package.json -->
        "type": "module",
        "scripts": {
            // ...
            "build": "vite build",
            "build:devextreme-bundle": "vite build --config vite.config.devextreme.bundle.js",
        },

4. Bundle the modules.

        npm run build:devextreme-bundle

5. Use the assembled bundle in your application.

        <!-- tab: App.vue -->
        import { DxButton, DxDataGrid } from "./devextreme-bundle/devextreme-vue-bundle";