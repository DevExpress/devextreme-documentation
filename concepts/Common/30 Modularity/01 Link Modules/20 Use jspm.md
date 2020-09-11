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

See examples of using jspm with <a href="https://github.com/DevExpress/devextreme-examples/tree/19_2/jspm-jquery" target="_blank">jQuery</a>, <a href="https://github.com/DevExpress/devextreme-examples/tree/19_2/jspm-angularjs" target="_blank">AngularJS</a>, and <a href="https://github.com/DevExpress/devextreme-examples/tree/19_2/jspm-knockout" target="_blank">Knockout</a> on GitHub. The **index.js** and **index.html** files contain the main code. 

[note] Check the libraries' and frameworks' [supported versions](/concepts/Common/05%20Introduction%20to%20DevExtreme/01%20Integration%20with%203rd-Party%20Libraries%20and%20Frameworks.md '/Documentation/Guide/Common/Introduction_to_DevExtreme/#Integration_with_3rd-Party_Libraries_and_Frameworks').

The following list shows additional modules each library/framework requires: 

- **jQuery**: DevExtreme [jQuery integration](/concepts/Common/30%20Modularity/02%20DevExtreme%20Modules%20Structure/integration/jquery.md '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/jquery') module;
- **AngularJS**: jQuery, DevExtreme [AngularJS](/concepts/Common/30%20Modularity/02%20DevExtreme%20Modules%20Structure/integration/angular.md '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/angular') and [jQuery](/concepts/Common/30%20Modularity/02%20DevExtreme%20Modules%20Structure/integration/jquery.md '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/jquery') integration modules;
- **Knockout**: DevExtreme [Knockout integration](/concepts/Common/30%20Modularity/02%20DevExtreme%20Modules%20Structure/integration/knockout.md '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/knockout') module.
