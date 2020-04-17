DevExtreme requires the <a href="https://stuk.github.io/jszip/" target="_blank">JSZip library</a>. Since JSZip v3.3.0, the library does not need to be registered. If you use an earlier version, register JSZip in the `tsconfig.json` file:

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
