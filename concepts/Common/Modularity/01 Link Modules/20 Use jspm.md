1. <a href="http://jspm.io/docs/getting-started.html" target="_blank">Install</a> jspm in your application folder. 

        npm install jspm

1. Install the DevExtreme package via jspm.

        jspm install npm:devextreme

1. Link the system.js and configuration files to your HTML page.

        <!--HTML-->
        <script src="jspm_packages/system.js"></script>
        <script src="config.js"></script>

1. Create your application's entry script and specify modules in it.

        <!--JavaScript-->
        import "devextreme/ui/button";
        ...

1. Import your application's main entry point on the HTML page.

        <!--HTML-->
        <script>
            System.import('./index.js');
        </script>

See examples on how to use jspm with <a href="https://github.com/DevExpress/devextreme-examples/tree/22_2/" target="_blank">jQuery</a> on GitHub. The **index.js** and **index.html** files contain the main code. Note that jQuery components require additional [integration module](/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/jquery).

[tags] jquery
