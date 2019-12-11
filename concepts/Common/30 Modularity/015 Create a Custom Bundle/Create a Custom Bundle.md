To create a custom bundle using the DevExtreme Bundler tool, you need [Webpack](https://webpack.github.io/docs) and the DevExtreme package installed globally.  

    npm install -g webpack  
    npm install -g devextreme  

Create the DevExtreme configuration file in your project folder.  

    devextreme-bundler-init <bundle_name>

Here, *<bundle_name>* is a name of the configuration file without an extension. By default, it is **dx.custom**.

After the file is created, you can edit it and leave only modules and exports you need.  

[note]To use the DevExtreme widgets with the Knockout approach, check to ensure you use the [Knockout integration module](/concepts/Common/30%20Modularity/02%20DevExtreme%20Modules%20Structure/060%20integration/knockout.md '/Documentation/Guide/Common/Modularity/#DevExtreme_Modules_Structure/integration/knockout').

[note]To use the DevExtreme widgets with the AngularJS approach, check to ensure you use the [AngularJS integration module](/concepts/Common/30%20Modularity/02%20DevExtreme%20Modules%20Structure/060%20integration/angular.md '/Documentation/Guide/Common/Modularity/#DevExtreme_Modules_Structure/integration/angular').


The following command produces a minified bundle.

    devextreme-bundler <bundle_name|file_name>

Then, link the bundle script file to your HTML page.

    <!--HTML-->
    <script type="text/javascript" src="dx.custom.js" charset="utf-8"></script>

Link themes to your application.

    <!--HTML-->
    <!--Link Themes-->
    <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_17_1/css/dx.common.css" />
    <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_17_1/css/dx.ios7.default.css" />

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
        <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.1.0.min.js"></script>
        <!--DevExtreme Bundle-->
        <script type="text/javascript" src="dx.custom.js" charset="utf-8"></script>
        <!--Themes-->
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_17_1/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_17_1/css/dx.ios7.default.css" />
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
    /* UI core (dx.module-core.js) */
    var ui = DevExpress.ui = require("devextreme/bundles/modules/ui");
    ui.dialog = require("devextreme/ui/dialog");
    /* Base widgets (dx.module-widgets-base.js) */
    ui.dxButton = require("devextreme/ui/button");


#####AngularJS Approach####

**index.js**

    <!--HTML-->
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevExtreme with a custom bundle and AngularJS example</title>
      <meta charset="utf-8">
        <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.1.0.min.js"></script>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.11/angular.min.js"></script>
        <!--DevExtreme Bundle-->
        <script type="text/javascript" src="dx.custom.js" charset="utf-8"></script>
        <!--Link Themes-->
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_17_1/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_17_1/css/dx.ios7.default.css" />
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


#####Knockout Approach####

**index.html**

    <!--HTML-->
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevExtreme with a custom bundle and Knockout example</title>
      <meta charset="utf-8">
        <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.1.0.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min.js"></script>
        <!--DevExtreme Bundle-->
        <script type="text/javascript" src="dx.custom.js" charset="utf-8"></script>
        <!--Link Themes-->
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_17_1/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_17_1/css/dx.ios7.default.css" />
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