[important]

The Globalize package is outdated and potentially unsafe. 

Use Globalize at your own risk. We recommend switching to Intl for a more secure solution.

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

Refer to the [Using Globalize](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/08%20Using%20Globalize.md '/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/08%20Using%20Globalize.md') article for usage examples.

Alternatively, you can [use Intl](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/04%20Using%20Intl.md '/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/04%20Using%20Intl.md') as a more lightweight localization solution.

