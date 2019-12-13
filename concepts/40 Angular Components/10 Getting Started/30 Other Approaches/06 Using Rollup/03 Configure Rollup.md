Install the `rollup-plugin-node-resolve`, `rollup-plugin-commonjs`, and `rollup-plugin-alias` packages with the following command...

    npm install --save-dev rollup-plugin-node-resolve rollup-plugin-commonjs rollup-plugin-alias

... and configure them in the `rollup-config.js` file:

    <!-- tab: rollup-config.js -->
    import nodeResolve from 'rollup-plugin-node-resolve';
    import commonjs from 'rollup-plugin-commonjs';
    import alias from 'rollup-plugin-alias';
    // ...
    export default {
        // ...
        plugins: [
            alias({
                jszip: path.join(__dirname, './node_modules/jszip/dist/jszip.min.js')
            }),
            nodeResolve({ jsnext: true, module: true }),
            commonjs({
                include: [
                    './node_modules/rxjs/**',
                    './node_modules/jszip/**',
                    './node_modules/devextreme/**',
                    './node_modules/devextreme-angular/**'
                ]
            })
        ]
        // ...
    }