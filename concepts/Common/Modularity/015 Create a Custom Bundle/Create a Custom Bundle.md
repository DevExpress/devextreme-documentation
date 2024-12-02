To build a custom bundle with the DevExtreme Bundler tool, you need <a href="https://webpack.js.org/" target="_blank">Webpack</a>, <a href="https://webpack.js.org/plugins/terser-webpack-plugin/" target="_blank">TerserWebpackPlugin</a>, and the DevExtreme package installed globally.  

    npm install -g webpack  
    npm install -g terser-webpack-plugin  
    npm install -g devextreme  

Create the DevExtreme configuration file in your project directory:

    devextreme-bundler-init <bundle_name>

*<bundle_name>* is a name of the configuration file (without an extension). If none is specified, **dx.custom** is set.  

After the file is created, you can edit it to include only the required modules and exports. 

Run the following command to generate a minified bundle:

    devextreme-bundler <bundle_name|file_name>

Link the bundle script file to your HTML page:

    <!--HTML-->
    <script type="text/javascript" src="dx.custom.js" charset="utf-8"></script>

Incorporate themes into your application:

    <!--HTML-->
    <!--Link Themes-->
    <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_24_2/css/dx.light.css">

[tags] jquery
