If you want to use <a href="https://github.com/globalizejs/globalize#globalize" target="_blank">Globalize</a> for localization, install it and the `devextreme-cldr-data` extension:

    npm install --save-dev devextreme-cldr-data globalize

Then, register the Globalize and CLDR scripts in the `tsconfig.json` file...

    <!-- tab: tsconfig.json -->
    {
      ...
      "compilerOptions": {
        ...
        "paths": {
          "globalize": [
            "node_modules/globalize/dist/globalize"
          ],
          "globalize/*": [
            "node_modules/globalize/dist/globalize/*"
          ],
          "cldr": [
            "node_modules/cldrjs/dist/cldr"
          ],
          "cldr/*": [
            "node_modules/cldrjs/dist/cldr/*"
          ],
          "jszip": [
            "node_modules/jszip/dist/jszip.min.js"
          ]
        }
      }
    }

... and create a `typings.d.ts` file in the `src` folder with ambient declarations for Globalize, DevExtreme localization messages, and `devextreme-cldr-data`:

    <!-- tab: typings.d.ts -->
    declare module 'globalize' {
        const value: any;
        export default value;
    }

    declare module 'devextreme/localization/messages/*' {
        const value: any;
        export default value;
    }

    declare module 'devextreme-cldr-data/*' {
        const value: any;
        export default value;
    }

In projects created with Angular CLI version 5 and earlier, configure **config.js** as follows instead:

    <!-- tab: config.js -->
    System.config({
        // ...
        paths: {
            "npm:": "node_modules/"
        },
        map: {
            // ...
            "globalize": "npm:globalize/dist/globalize",
            "cldr": "npm:cldrjs/dist/cldr",
            "cldr-data": "npm:cldr-data",
            "json": "npm:systemjs-plugin-json/json.js",
        },
        packages: {
            app: {
                // ...
                "globalize": {
                    main: "../globalize.js",
                    defaultExtension: "js"
                },
                "cldr": {
                    main: "../cldr.js",
                    defaultExtension: "js"
                }
            }
        }
    });

Refer to the [Using Globalize](/concepts/Common/33%20Localization/05%20Localize%20Dates%2C%20Numbers%2C%20and%20Currencies/10%20Using%20Globalize.md '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Globalize') article for usage examples.

Alternatively, you can [use Intl](/concepts/Common/33%20Localization/05%20Localize%20Dates%2C%20Numbers%2C%20and%20Currencies/05%20Using%20Intl.md '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Intl') as a more lightweight localization solution.
