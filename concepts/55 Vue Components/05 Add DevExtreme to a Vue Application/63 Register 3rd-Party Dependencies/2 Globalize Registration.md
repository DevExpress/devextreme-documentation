If you want to use <a href="https://github.com/globalizejs/globalize#globalize" target="_blank">Globalize</a> for localization, install it and the `devextreme-cldr-data` extension:

    npm install --save-dev devextreme-cldr-data globalize

Then, specify the Globalize and CLDR aliases in the `vue.config.js` file if you created the application with Vue CLI or in the `webpack.config.js` file otherwise:

    <!-- tab: vue.config.js -->
    const path = require("path");
    module.exports = {
      configureWebpack: {
        resolve: {
          alias: {
            globalize$: path.resolve(__dirname, "node_modules/globalize/dist/globalize.js"),
            globalize: path.resolve(__dirname, "node_modules/globalize/dist/globalize"),
            cldr$: path.resolve(__dirname, "node_modules/cldrjs/dist/cldr.js"),
            cldr: path.resolve(__dirname, "node_modules/cldrjs/dist/cldr")
          },
          extensions: [".ts", ".js", ".json"]
        }
      }
    }

    <!-- tab: webpack.config.js -->
    const path = require("path");
    module.exports = {
      ...
      resolve: {
        alias: {
          globalize$: path.resolve(__dirname, "node_modules/globalize/dist/globalize.js"),
          globalize: path.resolve(__dirname, "node_modules/globalize/dist/globalize"),
          cldr$: path.resolve(__dirname, "node_modules/cldrjs/dist/cldr.js"),
          cldr: path.resolve(__dirname, "node_modules/cldrjs/dist/cldr")
        },
        ...
      },
      ...
    }

Refer to the [Using Globalize](/concepts/Common/33%20Localization/05%20Localize%20Dates%2C%20Numbers%2C%20and%20Currencies/10%20Using%20Globalize.md '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Globalize') article for usage examples.

Alternatively, you can [use Intl](/concepts/Common/33%20Localization/05%20Localize%20Dates%2C%20Numbers%2C%20and%20Currencies/05%20Using%20Intl.md '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Intl') as a more lightweight localization solution.
