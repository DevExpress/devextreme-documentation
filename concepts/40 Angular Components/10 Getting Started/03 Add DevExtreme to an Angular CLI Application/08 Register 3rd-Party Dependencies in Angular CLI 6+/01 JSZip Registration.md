The <a href="https://stuk.github.io/jszip/" target="_blank">JSZip library</a> is useful if you use the following functionality in the [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Angular/Light) or [FileManager](https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/Overview/Angular/Light) widgets:

- **DataGrid** - [client-side export to Excel](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExportToExcel/Angular/Light)

- **FileManager** - [download several files at once when you use the ObjectFileSystemProvider](https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/BindingToHierarchicalStructure/Angular/Light)

To use the <a href="https://stuk.github.io/jszip/" target="_blank">JSZip library</a>, register it in the `tsconfig.json` file.

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
