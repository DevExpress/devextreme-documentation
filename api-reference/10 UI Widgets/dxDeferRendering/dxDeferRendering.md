---
module: ui/defer_rendering
export: default
inherits: ..\Widget\Widget.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **DeferRendering** is a widget that waits for its content to be ready before rendering it. While the content is getting ready, the **DeferRendering** displays a loading indicator.

---
You can create the widget using one of the following approaches.

- [**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

        <!--HTML--><div id="deferRendering">
            <!-- Widget content -->
        </div>

        <!--JavaScript-->
        var readyToRender = $.Deferred();
        // Here goes a function that resolves the "readyToRender" Deferred object at a specific moment
        // ...
        $(function () {
            $("#deferRendering").dxDeferRendering({
                renderWhen: readyToRender.promise();
            });
        });

- [**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <dx-defer-rendering
            [renderWhen]="modelReady"
        }">
            <!-- Widget content -->
        </dx-defer-rendering>

        <!--JavaScript-->
        var modelIsReady = $.Deferred();
        // Here goes a function that resolves the "readyToRender" Deferred object at a specific moment
        // ...
        export class AppComponent
            modelReady = modelIsReady.promise();
        }

- [**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-defer-rendering="{
                renderWhen: modelIsReady
            }">
                <!-- Widget content -->
            </div>
        </div>

        <!--JavaScript-->var modelIsReady = $.Deferred();
        // Here goes a function that resolves the "readyToRender" Deferred object at a specific moment
        // ...
        angular.module('DemoApp', ['dx'])
            .controller("DemoController", function ($scope) {
                $scope.modelIsReady = modelIsReady.promise();
            });
            
- [**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div data-bind="dxDeferRendering: {
            renderWhen: modelIsReady
        }">
            <!-- Widget content -->
        </div>

        <!--JavaScript-->
        var modelIsReady = $.Deferred();
        // Here goes a function that resolves the "readyToRender" Deferred object at a specific moment
        // ...
        var viewModel = {
            modelIsReady: modelIsReady.promise()
        };
        ko.applyBindings(viewModel);

Note that DevExtreme widgets require you to link the jQuery library to your application. To use the Knockout approach, the Knockout library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

#####See Also#####
- [DeferRendering](/concepts/05%20Widgets/DeferRendering/00%20Overview.md '/Documentation/Guide/Widgets/DeferRendering/Overview/')