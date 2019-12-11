First, install [jspm](https://jspm.io) in your application folder. For detailed information on installing, see the [jspm documentation](https://jspm.io/docs/getting-started.html).

    npm install jspm

[note]Install the DevExtreme package with the help of jspm.

    jspm install npm:devextreme

To link up the modules to your application using [jspm](https://jspm.io), first add links to the library and then the configuration file to your application. 

    <!--HTML-->
    <script src="jspm_packages/system.js"></script>
    <script src="config.js"></script>

Create an entry script of your application. For example, it can specify the required modules.

    <!--JavaScript-->
    import $ from 'jquery';
    import 'devextreme/ui/button';
    ...

Then, in the HTML page, import your application's main entry point.

    <!--HTML-->
    <script>
        System.import('./index.js');
    </script>

[note]Check the supported versions of 3rd-party libraries. For details, see [Integration with 3rd-Party Libraries and Frameworks](/concepts/Common/05%20Introduction%20to%20DevExtreme/01%20Integration%20with%203rd-Party%20Libraries%20and%20Frameworks.md '/Documentation/Guide/Common/Introduction_to_DevExtreme/#Integration_with_3rd-Party_Libraries_and_Frameworks').

The example below demonstrates how to create an application with a single button using the modules from a local directory.

---
#####jQuery####

You can download [the example](https://github.com/DevExpress/devextreme-examples/tree/17_2/jspm-jquery) from GitHub. To use it, follow the instructions on GitHub.  

**index.js**

    <!--JavaScript-->
    import 'devextreme/dist/css/dx.common.css!';
    import 'devextreme/dist/css/dx.light.css!';
    
    import $ from 'jquery';
    import 'devextreme/ui/button';
    import dialog from 'devextreme/ui/dialog';

    $("#myButton").dxButton({
      text: "Say 'Hello world'",
      onClick: function() {
        dialog.alert('Hello world!', '', false);
      }
    });

**index.html**

    <!--HTML-->
    <!DOCTYPE html>
    <html>
        <head>
            <title>DevExtreme with Jspm and jQuery example</title>
            <!--Include SystemJS loader and the config file-->
            <script src="jspm_packages/system.js"></script>
            <script src="config.js"></script>
        </head>
        <body>
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
                <div id="myButton"></div>
            </div>
            <!--Import of the application main entry point-->
             <script>
                System.import('./index.js');
            </script>
        </body>
    </html>


#####AngularJS####

[note] To use AngularJS and DevExtreme widget modules with RequireJS, you should load the DevExtreme [integration](/concepts/Common/30%20Modularity/02%20DevExtreme%20Modules%20Structure/060%20integration/angular.md '/Documentation/Guide/Common/Modularity/#DevExtreme_Modules_Structure/integration/angular') and angular modules.

You can download [the example](https://github.com/DevExpress/devextreme-examples/tree/17_2/jspm-angularjs) from GitHub. To use it, follow the instructions on GitHub.  

**index.js**

    <!--JavaScript-->
    import 'devextreme/dist/css/dx.common.css!';
    import 'devextreme/dist/css/dx.light.css!';

    import angular from 'angular';
    import 'devextreme/integration/angular';
    import dialog from 'devextreme/ui/dialog';
    import 'devextreme/ui/button';

    var myApp = angular.module('myApp', ['dx']);
    myApp.controller("myController", function($scope) {
      $scope.buttonOptions = {
        text: "Say 'Hello world'",
        onClick: function() {
          dialog.alert('Hello world!', '', false);
        }
      };
    });

    angular.bootstrap(document, ['myApp']);

**index.html**

    <!--HTML-->
    <!DOCTYPE html>
    <html>
        <head>
            <title>DevExtreme with Jspm and AngularJS example</title>
            <!--Include SystemJS loader and the config file-->
            <script src="jspm_packages/system.js"></script>
            <script src="config.js"></script>
        </head>
        <body>
            <div ng-controller="myController">
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
                <div dx-button="buttonOptions"></div>
                </div>
            </div>
            <!--Import of the application main entry point-->
             <script>
                System.import('./index.js');
            </script>
        </body>
    </html>


#####Knockout####

[note]To use KnockoutJS and DevExtreme widget modules with RequireJS, load the DevExtreme [integration module](/concepts/Common/30%20Modularity/02%20DevExtreme%20Modules%20Structure/060%20integration/knockout.md '/Documentation/Guide/Common/Modularity/#DevExtreme_Modules_Structure/integration/knockout').

You can download [the example](https://github.com/DevExpress/devextreme-examples/tree/17_2/jspm-knockout) from GitHub. To use it, follow the instructions on GitHub.  

**index.js**

    <!--JavaScript-->
    import 'devextreme/dist/css/dx.common.css!';
    import 'devextreme/dist/css/dx.light.css!';

    import ko from 'knockout';
    import 'devextreme/integration/knockout';
    import dialog from 'devextreme/ui/dialog';
    import 'devextreme/ui/button';

    var viewModel = {
        buttonOptions: {
            text: "Say 'Hello world'",
            onClick: function() {
            dialog.alert('Hello world!', '', false);
            }
        }
    };
    ko.applyBindings(viewModel);

**index.html**

    <!--HTML-->
    <!DOCTYPE html>
    <html>
        <head>
            <title>DevExtreme with Webpack and Knockout example</title>
            <!--Include SystemJS loader and the config file-->
            <script src="jspm_packages/system.js"></script>
            <script src="config.js"></script>
        </head>
        <body>
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
                <div data-bind="dxButton: buttonOptions"></div>
            </div>
            <!--Import of the application main entry point-->
            <script>
                System.import('./index.js');
            </script>
        </body>
    </html>

---