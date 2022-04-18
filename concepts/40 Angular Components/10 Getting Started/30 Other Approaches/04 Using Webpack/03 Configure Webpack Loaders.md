Open the `webpack.config.js` file and configure <a href="https://webpack.js.org/concepts#loaders" target="_blank">loaders</a> to process CSS and fonts:

    <!-- tab: webpack.config.js -->
    ...
    rules: [
      ...
      { 
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }]
      }
    ]
    ...

In addition, open the `package.json` file and ensure `style-loader`, `css-loader`, and `url-loader` are listed in `devDependencies`.
