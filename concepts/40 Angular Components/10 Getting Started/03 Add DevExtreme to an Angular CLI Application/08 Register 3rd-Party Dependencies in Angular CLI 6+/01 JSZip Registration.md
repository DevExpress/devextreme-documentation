If you want to use the [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Angular/Light) widget, register the <a href="https://stuk.github.io/jszip/" target="_blank">JSZip library</a> in the `tsconfig.json` file. The widget uses this library for [client-side export to Excel](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExportToExcel/Angular/Light).

    <!-- tab: tsconfig.json -->
    {
      ...
      "compilerOptions": {
        ...
        "paths": {
          "jszip": [
            "node_modules/jszip/dist/jszip.min.js"
          ]
        }
      }
    }
