1. Install [RequireJS](https://requirejs.org) and DevExtreme in your application folder.

        npm install requirejs devextreme

1. Use the [RequireJS conversion tool](https://requirejs.org/docs/commonjs.html#autoconversion) to convert the DevExtreme modules from CommonJS to AMD:

    * Add the devextreme package to the 'node_modules/devextreme' directory

            npm i devextreme

    * Add global 'r_js' command

            npm i r.js -g

    * Convert the devextreme package and save it to the 'devextreme_amd' directory

            r_js -convert node_modules/devextreme devextreme_amd

1. Add [DevExtreme themes](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/') to your application. 

        <!--HTML-->
        <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.light.css" />


1. Link RequireJS and define its [configuration object](https://requirejs.org/docs/api.html#config). 

        <!--HTML-->
        <script src="node_modules/requirejs/require.js"></script>
        <script>
            require.config({ ... });
        </script>

See examples of using RequireJS with [jQuery](https://github.com/DevExpress/devextreme-examples/tree/18_1/requirejs-jquery), [AngularJS](https://github.com/DevExpress/devextreme-examples/tree/18_1/requirejs-angularjs), and [Knockout](https://github.com/DevExpress/devextreme-examples/tree/18_1/requirejs-knockout) on GitHub. The **index.html** file contains the main code. 

[note] Check the libraries' and frameworks' [supported versions](/concepts/Common/05%20Introduction%20to%20DevExtreme/01%20Integration%20with%203rd-Party%20Libraries%20and%20Frameworks.md '/Documentation/Guide/Common/Introduction_to_DevExtreme/#Integration_with_3rd-Party_Libraries_and_Frameworks').

The following list shows additional modules each library/framework requires: 

- **jQuery**: DevExtreme [jQuery integration](/concepts/Common/30%20Modularity/02%20DevExtreme%20Modules%20Structure/060%20integration/jquery.md '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/jquery') module;
- **AngularJS**: jQuery, DevExtreme [AngularJS](/concepts/Common/30%20Modularity/02%20DevExtreme%20Modules%20Structure/060%20integration/angular.md '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/angular') and [jQuery](/concepts/Common/30%20Modularity/02%20DevExtreme%20Modules%20Structure/060%20integration/jquery.md '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/jquery') integration modules;
- **Knockout**: DevExtreme [Knockout integration](/concepts/Common/30%20Modularity/02%20DevExtreme%20Modules%20Structure/060%20integration/knockout.md '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/knockout') module.

[note] We recommend using [Webpack](/concepts/Common/30%20Modularity/01%20Link%20Modules/10%20Use%20Webpack.md '/Documentation/Guide/Common/Modularity/#Link_Modules/Use_Webpack') or [jspm](/concepts/Common/30%20Modularity/01%20Link%20Modules/20%20Use%20jspm.md '/Documentation/Guide/Common/Modularity/#Link_Modules/Use_jspm') for better performance.
