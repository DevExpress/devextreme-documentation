First, ensure the [Webpack](https://webpack.github.io/docs) is installed globally. If not, execute the following command. 

    npm install webpack -g

Install the DevExtreme package to the directory where you wish to store the files.  

    npm install devextreme

To link up the modules to your application using [Webpack](https://webpack.github.io/docs), begin by defining the [configuration object](https://webpack.github.io/docs/configuration.html).

    <!--JavaScript-->
    var path = require('path');

    module.exports = {
      entry: './index.js',
      output: {
        filename: 'bundle.js'
      }
    };

Link the bundle script file to your HTML page. 

    <!--HTML-->
    <script type="text/javascript" src="bundle.js" charset="utf-8"></script>

Add [themes](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/') to your application.  

    <!--HTML-->
    <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.common.css" />
    <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.light.css" />

Create an entry script of your application. For example, it can specify required modules.  

    <!--JavaScript-->
    var $ = require('jquery');
    var dialog = require('devextreme/ui/button');
    ...

Then, create the bundle.

    webpack

[note]Check the supported versions of 3rd-party libraries. For details, see [Integration with 3rd-Party Libraries and Frameworks](/concepts/Common/05%20Introduction%20to%20DevExtreme/01%20Integration%20with%203rd-Party%20Libraries%20and%20Frameworks.md '/Documentation/Guide/Common/Introduction_to_DevExtreme/#Integration_with_3rd-Party_Libraries_and_Frameworks').

The example below demonstrates how to create an application with a single button using modules, and how to configure [Webpack](https://webpack.github.io/docs) to pick up and bundle all the required scripts to your application.  

---
#####jQuery####

You can download [the example](https://github.com/DevExpress/devextreme-examples/tree/17_2/webpack-jquery) from GitHub. To use it, follow the instructions on GitHub. 

**webpack.config.js**

    <!--JavaScript-->
    var path = require('path');

    module.exports = {
      entry: './index.js',
      output: {
        filename: 'bundle.js'
      }
    };

**index.js**

    <!--JavaScript-->
    var $ = require('jquery');
    var dialog = require('devextreme/ui/dialog');

    require('devextreme/ui/button');

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
      <title>DevExtreme with Webpack and Knockout example</title>
      <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.common.css" />
      <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.light.css" />
    </head>

    <body>
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
        <div id="myButton"></div>
      </div>
      <!-- Include the bundle script -->
      <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
    </body>

    </html>


#####AngularJS####

[note]To use AngularJS and DevExtreme widget modules with Webpack, load the DevExtreme integration and angular modules.  

You can download [the example](https://github.com/DevExpress/devextreme-examples/tree/17_2/webpack-angularjs) from GitHub. To use it, follow the instructions on GitHub.

**webpack.config.js**  

    <!--JavaScript-->
    var path = require('path');

    module.exports = {
        entry: './index.js',
        output: {
            filename: 'bundle.js'
        }
    };

**index.js**

    <!--JavaScript-->
    var angular = require('angular');
    var dialog = require('devextreme/ui/dialog');

    require('devextreme/integration/angular');
    require('devextreme/ui/button');

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
      <title>DevExtreme with Webpack and AngularJS example</title>
      <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.common.css" />
      <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.light.css" />
    </head>

    <body>
      <div ng-controller="myController">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
          <div dx-button="buttonOptions"></div>
        </div>
      </div>
      <!-- Include the bundle script -->
      <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
    </body>

    </html>


#####Knockout####

[note]To use KnockoutJS and DevExtreme widget modules with Webpack, load the DevExtreme integration module.  

You can download [the example](https://github.com/DevExpress/devextreme-examples/tree/17_2/webpack-knockout) from GitHub. To use it, follow the instructions on GitHub.

**webpack.config.js**

    <!--JavaScript-->
    var path = require('path');

    module.exports = {
      entry: './index.js',
      output: {
        filename: 'bundle.js'
      }
    };

**index.js**

    <!--JavaScript-->
    var ko = require('knockout');
    var dialog = require('devextreme/ui/dialog');

    require('devextreme/integration/knockout');
    require('devextreme/ui/button');

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
      <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.common.css" />
      <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.light.css" />
    </head>

    <body>
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
        <div data-bind="dxButton: buttonOptions"></div>
      </div>
      <!-- Include the bundle script -->
      <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
    </body>

    </html>

---
