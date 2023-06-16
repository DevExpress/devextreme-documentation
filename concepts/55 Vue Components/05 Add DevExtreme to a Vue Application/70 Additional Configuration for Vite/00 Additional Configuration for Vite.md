[note] If you created your application with Vue CLI, skip this step.

To avoid errors in the production build, do one of the following:

- Add the [resolve.alias](https://vitejs.dev/config/shared-options.html#resolve-alias) configuration to the `vite.config.js` file:    

        <!-- tab: vite.config.js -->
        resolve: {
            alias: {
                "devextreme/ui": 'devextreme/esm/ui'
            }
        },

- Disable treeshaking in the `vite.config.ts` file:     

        <!-- tab: vite.config.ts -->
        export default defineConfig({
            build: {
                rollupOptions: {
                    treeshake:  false 
                }
            },
        });

- Disable treeshaking only for required modules. For example, if you use DataGrid in the application, disable the following module in the `vite.config.ts` file:

        <!-- tab: vite.config.ts -->
        export default defineConfig({
            build: {
                rollupOptions: {
                    plugins: [
                        {
                            name: 'no-treeshake',
                            transform(_, id) {
                                if (id.includes('ui/data_grid')) {
                                    return { moduleSideEffects: 'no-treeshake' }
                                }
                            }
                        }
                    ] 
                }
            },
        });

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-vite-vue-bundling"
}
