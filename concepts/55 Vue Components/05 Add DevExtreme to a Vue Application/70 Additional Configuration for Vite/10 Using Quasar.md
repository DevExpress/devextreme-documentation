If you use Vite in Quasar, the `vite.config.js` file is ignored. Add the `resolve.alias` configuration to the `quasar.config.js` file instead:

    <!-- tab: quasar.config.js -->
    build: {
        extendViteConf (viteConf, { isServer, isClient }) {
            viteConf.resolve.alias['devextreme/ui'] = 'devextreme/esm/ui'
        }
    }