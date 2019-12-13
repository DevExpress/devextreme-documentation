Open the `config.js` file and configure DevExtreme and its dependencies as follows:

    <!-- tab: config.js -->
    System.config({
        // ...
        paths: {
            "npm:": "node_modules/"
        },
        map: {
            // ...
            'devextreme': 'npm:devextreme',
            'devextreme-angular': 'npm:devextreme-angular',

            // for client-side Excel export in the DataGrid widget
            'jszip': 'npm:jszip/dist/jszip.min.js',

            // for the HtmlEditor widget
            'quill': 'npm:quill/dist/quill.min.js',
            'quill-delta-to-html': 'npm:quill-delta-to-html/dist/browser/QuillDeltaToHtmlConverter.bundle.js'
        },
        packages: {
            // ...
            'devextreme': {
                defaultExtension: 'js'
            },
            'devextreme-angular': {
                main: 'index.js',
                defaultExtension: 'js'
            }
        }
    });