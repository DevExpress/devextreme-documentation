[important]

Please be aware that the Globalize package may be insecure. It has not been updated for an extended period, and we have received reports from the Snyk security checker regarding vulnerabilities associated with this package.

You may choose to use it at your own risk. However, we will be removing Globalize from our installation, templates, and demos in version 25.1. For a more secure solution, we recommend switching to Intl.

[/important]

If you want to use <a href="https://github.com/globalizejs/globalize#globalize" target="_blank">Globalize</a> for localization, install it and the `devextreme-cldr-data` extension:

    npm install --save-dev devextreme-cldr-data globalize

Then, register the Globalize and CLDR scripts in the TypeScript configuration file...

    <!-- tab: tsconfig.app.json -->
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

Refer to the [Using Globalize](/concepts/Common/Localization/05%20Localize%20Dates%2C%20Numbers%2C%20and%20Currencies/10%20Using%20Globalize.md '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Globalize') article for usage examples.

Alternatively, you can [use Intl](/concepts/Common/Localization/05%20Localize%20Dates%2C%20Numbers%2C%20and%20Currencies/05%20Using%20Intl.md '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Intl') as a more lightweight localization solution.
