In certain scenarios, you may want to utilize a custom bundle rather than an automatically generated one. The example below illustrates how to implement a custom bundle with Vite.

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-vite-react-bundling"
}

For the best experience, we recommend that you use the latest version of DevExtreme alongside ESM.

To create a custom bundle, follow the steps below:

1. Create a `main.js` file with re-exports of DevExtreme components that you want to include in the bundle. If you use nested configuration components, we recommend to utilize import aliases.

        <!-- tab: main.js -->
        import Button from "devextreme-react/button";
        export { Button };

        import DataGrid, {
            Column as GridColumn,
        } from "devextreme-react/data-grid";
        export {
            DataGrid,
            GridColumn
        };

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
                    name: 'DevExtreme React Bundle',
                    formats: ['es', 'cjs'],
                    fileName: 'devextreme-react-bundle',
                },
                rollupOptions: {
                    external: ['react'],
                    output: {
                        globals: {
                            react: 'React',
                        },
                    },
                },
                outDir: 'devextreme-bundle'
            },
        })

    In the code snippet above, the following options are used:

    - `esmExternals: true`     
    Treat external dependencies (React in this case) as ECMAScript modules.

    - `entry: resolve(__dirname, 'main.js')`    
    A main entry file created at step one.

    - `formats: ['es', 'cjs']`    
    Output formats.

    - `fileName: 'devextreme-react-bundle'`    
    Your bundle name.

    - `outDir: 'devextreme-bundle'`    
    A folder for the generated bundle. The default value is `dist`.

    Leave `vite.config.js` file as it is to build React applications separately.

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

        <!-- tab: App.jsx -->
        import { 
            Button,
            DataGrid,
            GridColumn as Column
        } from "./devextreme-bundle/devextreme-react-bundle";