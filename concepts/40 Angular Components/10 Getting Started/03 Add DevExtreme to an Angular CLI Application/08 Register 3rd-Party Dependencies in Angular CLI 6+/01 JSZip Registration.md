Register the <a href="https://stuk.github.io/jszip/" target="_blank">JSZip library</a> in the `tsconfig.json` file:

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
