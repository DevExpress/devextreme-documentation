1. Check that <a href="http://webpack.github.io/docs/" target="_blank">Webpack</a> is installed globally. If not, execute the following command:

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
        <link rel="stylesheet" href="node_modules/devextreme/dist/css/dx.common.css">
        <link rel="stylesheet" href="node_modules/devextreme/dist/css/dx.light.css">

1. Create your application's entry script and specify modules in it.

        <!--JavaScript-->
        var dialog = require('devextreme/ui/button');
        ...

1. Create the bundle.

        webpack

See examples of using Webpack with <a href="https://github.com/DevExpress/devextreme-examples/tree/20_1/webpack-jquery" target="_blank">jQuery</a>, <a href="https://github.com/DevExpress/devextreme-examples/tree/20_1/webpack-angularjs" target="_blank">AngularJS</a>, and <a href="https://github.com/DevExpress/devextreme-examples/tree/20_1/webpack-knockout" target="_blank">Knockout</a> on GitHub. The **webpack.config.js**, **index.js**, and **index.html** files contain the main code. 

The following list shows additional modules each library/framework requires: 

- **jQuery**: DevExtreme [jQuery integration](/concepts/Common/Modularity/02%20DevExtreme%20Modules%20Structure/integration/jquery.md '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/jquery') module;
- **AngularJS**: jQuery, DevExtreme [AngularJS](/concepts/Common/Modularity/02%20DevExtreme%20Modules%20Structure/integration/angular.md '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/angular') and [jQuery](/concepts/Common/Modularity/02%20DevExtreme%20Modules%20Structure/integration/jquery.md '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/jquery') integration modules;
- **Knockout**: DevExtreme [Knockout integration](/concepts/Common/Modularity/02%20DevExtreme%20Modules%20Structure/integration/knockout.md '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/knockout') module.
