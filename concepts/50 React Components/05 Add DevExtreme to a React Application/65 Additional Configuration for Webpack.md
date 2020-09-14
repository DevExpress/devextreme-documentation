[note] If you do not use Webpack in your application, skip this step.

Open the `webpack.config.js` file and configure <a href="https://webpack.js.org/concepts#loaders" target="_blank">loaders</a> to process CSS and fonts. You should also specify Globalize and CLDR aliases if you want to [use Globalize for localization](/concepts/Common/33%20Localization/05%20Localize%20Dates%2C%20Numbers%2C%20and%20Currencies/10%20Using%20Globalize.md '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Globalize'):

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
          },
          { 
            test: /\.(eot|svg|ttf|woff|woff2)$/, 
            use: "url-loader?name=[name].[ext]"
          }
        ]
      }
    }

In addition, open the `package.json` file and ensure `style-loader`, `css-loader`, and `url-loader` are listed in `devDependencies`.
