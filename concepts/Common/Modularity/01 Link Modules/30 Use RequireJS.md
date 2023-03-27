1. Install <a href="http://requirejs.org/" target="_blank">RequireJS</a> and DevExtreme in your application folder.

        npm install requirejs devextreme

1. Use the <a href="http://requirejs.org/docs/commonjs.html#autoconversion" target="_blank">RequireJS conversion tool</a> to convert the DevExtreme modules from CommonJS to AMD and save them in the **devextreme_amd** directory:

        npx r_js -convert node_modules/devextreme/cjs devextreme_amd

1. Add [DevExtreme themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') to your application. 

        <!--HTML-->
        <link rel="stylesheet" href="node_modules/devextreme/dist/css/dx.light.css">


1. Link RequireJS and define its <a href="http://requirejs.org/docs/api.html#config" target="_blank">configuration object</a>. 

        <!--HTML-->
        <script src="node_modules/requirejs/require.js"></script>
        <script>
            require.config({ 
                // ... 
                paths: {
                    // ...
                    "devextreme": "devextreme_amd"
                }
            });
        </script>

You can see examples on how to use RequireJS with <a href="https://github.com/DevExpress/devextreme-examples/tree/22_2/" target="_blank">jQuery</a> on GitHub. The **index.html** file contains the main code. jQuery components require additional [integration module](/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/jquery).

[note] We recommend to use [Webpack](/concepts/Common/Modularity/01%20Link%20Modules/10%20Use%20Webpack.md '/Documentation/Guide/Common/Modularity/#Link_Modules/Use_Webpack') or [jspm](/concepts/Common/Modularity/01%20Link%20Modules/20%20Use%20jspm.md '/Documentation/Guide/Common/Modularity/#Link_Modules/Use_jspm') for better performance.

[tags] jquery