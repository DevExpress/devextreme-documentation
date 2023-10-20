To create a custom bundle using the DevExtreme Bundler tool, you need <a href="https://webpack.js.org/" target="_blank">Webpack</a>, <a href="https://webpack.js.org/plugins/terser-webpack-plugin/" target="_blank">TerserWebpackPlugin</a>, and the DevExtreme package installed globally.  

    npm install -g webpack  
    npm install -g terser-webpack-plugin  
    npm install -g devextreme  

Create the DevExtreme configuration file in your project folder.  

    devextreme-bundler-init <bundle_name>

Here, *<bundle_name>* is a name of the configuration file without an extension. By default, it is **dx.custom**.

After the file was created, you can edit it and leave only modules and exports you need.  

The following command produces a minified bundle.

    devextreme-bundler <bundle_name|file_name>

Then, link the bundle script file to your HTML page.

    <!--HTML-->
    <script type="text/javascript" src="dx.custom.js" charset="utf-8"></script>

Link themes to your application.

    <!--HTML-->
    <!--Link Themes-->
    <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_23_2/css/dx.light.css">
