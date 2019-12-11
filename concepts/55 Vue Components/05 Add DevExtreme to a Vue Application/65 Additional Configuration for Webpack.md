[note] If you created your application with Vue CLI, skip this step.

Open the `webpack.config.js` file and configure <a href="https://webpack.js.org/concepts#loaders" target="_blank">loaders</a> to process CSS and fonts:

    <!-- tab: webpack.config.js -->
    module.exports = {
      ...
      module: {
        rules: [
          ...
          { 
            test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" }
            ]
          },
          { 
            test: /\.(eot|svg|ttf|woff|woff2)$/, 
            use: "url-loader?name=[name].[ext]"
          }
        ]
      }
    }

In addition, open the `package.json` file and ensure `style-loader`, `css-loader`, and `url-loader` are listed in `devDependencies`.
