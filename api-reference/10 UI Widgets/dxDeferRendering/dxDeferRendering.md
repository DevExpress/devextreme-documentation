---
module: ui/defer_rendering
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **DeferRendering** is a widget that waits for its content to be ready before rendering it. While the content is getting ready, the **DeferRendering** displays a loading indicator.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxDeferRendering` jQuery plug-in.

        <!--HTML-->
        <div id="deferRendering">
            <!--Widget content-->
        </div>

    <!---->

        <!--JavaScript-->
        var readyToRender = $.Deferred();
        //A function in which readyToRender is resolved
        //...
        $("#deferRendering").dxDeferRendering({
            renderWhen: readyToRender.promise();
        })

- **Knockout**  
 Add a **div** element and apply the `dxDeferRendering` binding to this element. 

        <!--HTML-->
        <div data-bind="dxDeferRendering: {
            renderWhen: modelIsReady
        }">
            <!--Widget content-->
        </div>
  
    <!---->
  
        <!--JavaScript-->
        var modelIsReady = $.Deferred();
        //A function in which modelIsReady is resolved
        //...
        var myViewModel = {
            modelIsReady: modelIsReady.promise()
        };
        ko.applyBindings(myViewModel);

- **AngularJS**  
 Add a **div** element and apply the `dx-defer-rendering` directive to this element.

        <!--HTML-->
        <div dx-defer-rendering="{
            renderWhen: modelIsReady
        }">
            <!--Widget content-->
        </div>

    <!---->

        <!--JavaScript-->
        var modelIsReady = $.Deferred();
        var myApp = angular.module('myApp', ['dx']);
        myApp.controller("demoController", function ($scope) {
            $scope.modelIsReady = modelIsReady.promise();
        });
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['myApp']);
        });

Note that DevExtreme widgets require you to link the jQuery library to your application. To use the Knockout approach, the Knockout library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

You can find the detailed information on principles of working with the widget in the [dxDeferRendering](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/Individual%20Widgets/dxDeferRendering.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/#dxDeferRendering') section of the [Individual Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/Individual%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/') article.