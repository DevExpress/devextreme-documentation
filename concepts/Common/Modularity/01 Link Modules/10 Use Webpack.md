1. Install <a href="http://webpack.github.io/docs/" target="_blank">Webpack</a> globally.

        npm install webpack -g

1. Install the DevExtreme package in your application folder.  

        npm install devextreme

1. Define the Webpack <a href="https://webpack.js.org/configuration/" target="_blank">configuration file</a>.

        <!--JavaScript-->
        var path = require('path');

        module.exports = {
            entry: './index.js',
            output: {
                filename: 'bundle.js'
            }
        };

1. Link the bundle script file to your application. 

        <!--HTML-->
        <script type="text/javascript" src="bundle.js" charset="utf-8"></script>

1. Add [DevExtreme themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/').  

        <!--HTML-->
        <link rel="stylesheet" href="node_modules/devextreme/dist/css/dx.light.css">

1. Create your application's entry script and specify modules in it.

        <!--JavaScript-->
        import "devextreme/ui/button";
        ...

1. Create the bundle.

        webpack

To see how to use Webpack with <a href="https://github.com/DevExpress/devextreme-examples/tree/22_2/" target="_blank">jQuery</a>, refer to examples on GitHub. The **webpack.config.js**, **index.js**, and **index.html** files contain the main code. Note that jQuery components require additional [integration module](/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/jquery).

[tags] jquery