[note] If you do not use Webpack in your application, skip this step.

Open the `webpack.config.js` file and configure <a href="https://webpack.js.org/concepts#loaders" target="_blank">loaders</a> to process CSS and fonts. You should also specify Globalize and CLDR aliases if you want to [use Globalize for localization](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/08%20Using%20Globalize.md '/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/08%20Using%20Globalize.md'):

    <!-- tab: webpack.config.js -->
    const path = require('path');
    module.exports = {
      ...
      resolve: {
        alias: {
          globalize$: path.resolve( __dirname, "node_modules/globalize/dist/globalize.js" ),
          globalize: path.resolve(__dirname, "node_modules/globalize/dist/globalize"),
          cldr$: path.resolve(__dirname, "node_modules/cldrjs/dist/cldr.js"),
          cldr: path.resolve(__dirname, "node_modules/cldrjs/dist/cldr")
        },
        ...
      },
      module: {
        rules: [
          ...
          { 
            test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" }]
          }
        ]
      }
    }

In addition, open the `package.json` file and ensure `style-loader`, `css-loader`, and `url-loader` are listed in `devDependencies`.

