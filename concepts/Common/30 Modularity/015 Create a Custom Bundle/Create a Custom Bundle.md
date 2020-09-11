To create a custom bundle using the DevExtreme Bundler tool, you need <a href="http://webpack.github.io/docs/" target="_blank">Webpack</a> and the DevExtreme package installed globally.  

    npm install -g webpack  
    npm install -g devextreme  

Create the DevExtreme configuration file in your project folder.  

    devextreme-bundler-init <bundle_name>

Here, *<bundle_name>* is a name of the configuration file without an extension. By default, it is **dx.custom**.

After the file was created, you can edit it and leave only modules and exports you need.  

[note]To use DevExtreme widgets with jQuery, Knockout, or AngularJS, ensure that you import the [jquery](/concepts/Common/30%20Modularity/02%20DevExtreme%20Modules%20Structure/integration/jquery.md '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/jquery'), [knockout](/concepts/Common/30%20Modularity/02%20DevExtreme%20Modules%20Structure/integration/knockout.md '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/knockout'), or [angular](/concepts/Common/30%20Modularity/02%20DevExtreme%20Modules%20Structure/integration/angular.md '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/angular') integration module.


The following command produces a minified bundle.

    devextreme-bundler <bundle_name|file_name>

Then, link the bundle script file to your HTML page.

    <!--HTML-->
    <script type="text/javascript" src="dx.custom.js" charset="utf-8"></script>

Link themes to your application.

    <!--HTML-->
    <!--Link Themes-->
    <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_19_2/css/dx.common.css">
    <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_19_2/css/dx.light.css">

The example below demonstrates how to create an application with a single button using the modules and shows the reduced configuration file.

---
#####jQuery####

**index.html**

    <!--HTML-->
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevExtreme with a custom bundle example</title>
      <meta charset="utf-8">
        <!--External Scripts-->
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <!--DevExtreme Bundle-->
        <script type="text/javascript" src="dx.custom.js" charset="utf-8"></script>
        <!--Themes-->
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_19_2/css/dx.common.css">
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_19_2/css/dx.light.css">
    </head>

    <body>
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
        <div id="myButton"></div>
      </div>

      <script>
         $("#myButton").dxButton({
            text: "Say 'Hello world'",
            onClick: function() {
              DevExpress.ui.dialog.alert('Hello world!', '', false);
            }
          });
      </script>
    </body>

    </html>

**dx.custom.config.js**

    <!--JavaScript-->
    /* Core (dx.module-core.js) */
    var DevExpress = require("devextreme/bundles/modules/core");
    /* Integrations (dx.module-core.js) */
    require("devextreme/integration/jquery");
    /* UI core (dx.module-core.js) */
    var ui = DevExpress.ui = require("devextreme/bundles/modules/ui");
    ui.dialog = require("devextreme/ui/dialog");
    /* Base widgets (dx.module-widgets-base.js) */
    ui.dxButton = require("devextreme/ui/button");


#####AngularJS####

**index.js**

    <!--HTML-->
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevExtreme with a custom bundle and AngularJS example</title>
      <meta charset="utf-8">
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.2/angular.min.js"></script>
        <!--DevExtreme Bundle-->
        <script type="text/javascript" src="dx.custom.js" charset="utf-8"></script>
        <!--Link Themes-->
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_19_2/css/dx.common.css">
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_19_2/css/dx.light.css">
    </head>
    <body>
      <div ng-controller="myController">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
          <div dx-button="buttonOptions"></div>
        </div>
      </div>
      <script>
         var myApp = angular.module('myApp', ['dx']);
          myApp.controller("myController", function($scope) {
            $scope.buttonOptions = {
              text: "Say 'Hello world'",
              onClick: function() {
                DevExpress.ui.dialog.alert('Hello world!', '', false);
              }
            };
          });
          angular.bootstrap(document, ['myApp']);
      </script>
    </body>

    </html>

**dx.custom.config.js**

    <!--JavaScript-->
    /* Core (dx.module-core.js) */
    var DevExpress = require("devextreme/bundles/modules/core");
    /* Integrations (dx.module-core.js) */
    require("devextreme/integration/angular");
    /* UI core (dx.module-core.js) */
    var ui = DevExpress.ui = require("devextreme/bundles/modules/ui");
    ui.dialog = require("devextreme/ui/dialog");
    /* Base widgets (dx.module-widgets-base.js) */
    ui.dxButton = require("devextreme/ui/button");


#####Knockout####

**index.html**

    <!--HTML-->
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevExtreme with a custom bundle and Knockout example</title>
      <meta charset="utf-8">
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min.js"></script>
        <!--DevExtreme Bundle-->
        <script type="text/javascript" src="dx.custom.js" charset="utf-8"></script>
        <!--Link Themes-->
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_19_2/css/dx.common.css">
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_19_2/css/dx.light.css">
    </head>

    <body>
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
        <div data-bind="dxButton: buttonOptions"></div>
      </div>

      <script>
         viewModel = {
            buttonOptions: {
              text: "Say 'Hello world'",
              onClick: function() {
                DevExpress.ui.dialog.alert('Hello world!', '', false);
              }
            }
          };
          ko.applyBindings(viewModel);
      </script>
    </body>
    </html>

**dx.custom.config.js**

    <!--JavaScript-->
    /* Core (dx.module-core.js) */
    var DevExpress = require("devextreme/bundles/modules/core");
    /* Integrations (dx.module-core.js) */
    require("devextreme/integration/knockout");
    /* UI core (dx.module-core.js) */
    var ui = DevExpress.ui = require("devextreme/bundles/modules/ui");
    ui.dialog = require("devextreme/ui/dialog");
    /* Base widgets (dx.module-widgets-base.js) */
    ui.dxButton = require("devextreme/ui/button");

---
