[note] In this article, the [Button](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/') widget is used to demonstrate how to show and hide the **LoadIndicator**. This choice is made for purely demonstrational purposes, and you can do the same operations using another widget following the same guidelines.

To specify whether the **LoadIndicator** is shown, change the [visible](/api-reference/10%20UI%20Widgets/Widget/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/Configuration/#visible') option.

---

##### jQuery

    <!--HTML-->
    <div id="loadIndicatorContainer"></div>
    <div id="buttonContainer"></div>

    <!--JavaScript-->
    $(function() {
        var loadIndicator =  $("#loadIndicatorContainer").dxLoadIndicator({
            visible: false      
        }).dxLoadIndicator("instance");
        
        $("#buttonContainer").dxButton({
            text: "Toggle the LoadIndicator", 
            onClick: function () {
                var isLoadIndicatorVisible = loadIndicator.option("visible");
                loadIndicator.option("visible", !isLoadIndicatorVisible);
            } 
        });
    });

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().LoadIndicator()
        .ID("loadIndicator")
        .Visible(false)
    )

    @(Html.DevExtreme().Button()
        .ID("button")
        .Text("Toggle the LoadIndicator")
        .OnClick(@<text>
            function () {
                var loadIndicator = $("#loadIndicator").dxLoadIndicator("instance");
                var isLoadIndicatorVisible = loadIndicator.option("visible");
                loadIndicator.option("visible", !isLoadIndicatorVisible);
            } 
        </text>)
    )

    <!--Razor VB-->
    @(Html.DevExtreme().LoadIndicator() _
        .ID("loadIndicator") _
        .Visible(False)
    )

    @(Html.DevExtreme().Button() _
        .ID("button") _
        .Text("Toggle the LoadIndicator") _
        .OnClick("button_click")
    )

    <script>
        function button_click() {
            var loadIndicator = $("#loadIndicator").dxLoadIndicator("instance");
            var isLoadIndicatorVisible = loadIndicator.option("visible");
            loadIndicator.option("visible", !isLoadIndicatorVisible);
        }
    </script>

---

With Angular, AngularJS, or Knockout, bind the [visible](/api-reference/10%20UI%20Widgets/Widget/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/Configuration/#visible') property of the **LoadIndicator** widget to a component property (in Angular), a scope property (in AngularJS), or an observable variable (in Knockout). After that, change this property/variable, and the **LoadIndicator** will appear or disappear.

---
##### Angular

    <!--HTML-->
    <dx-load-indicator
        [(visible)]="isLoadIndicatorVisible">
    </dx-load-indicator>
    <dx-button
        text="Toggle the LoadIndicator"
        (onClick)="isLoadIndicatorVisible = !isLoadIndicatorVisible">
    </dx-button>

    <!--TypeScript-->
    import { DxLoadIndicatorModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isLoadIndicatorVisible: boolean = true;
    }
    @NgModule({
        imports: [
            // ...
            DxLoadIndicatorModule,
            DxButtonModule
        ],
        // ...
    })

##### AngularJS

    <!--HTML--><div ng-controller="DemoController">
        <div dx-load-indicator="{
            bindingOptions: {
                visible: 'isLoadIndicatorVisible'
            }
        }"></div>
        <div dx-button="{
            text: 'Toggle the LoadIndicator',
            onClick: toggleLoadIndicator
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.isLoadIndicatorVisible = false;
            $scope.toggleLoadIndicator = function () {
                var currentValue = $scope.isLoadIndicatorVisible;
                $scope.isLoadIndicatorVisible = !currentValue;
            }
        });

##### Knockout

    <!--HTML--><div data-bind="dxLoadIndicator: {
        visible: isLoadIndicatorVisible
    }"></div>
    <div data-bind="dxButton: {
        text: 'Toggle the LoadIndicator',
        onClick: function (e) {
            var currentValue = e.model.isLoadIndicatorVisible();
            e.model.isLoadIndicatorVisible(!currentValue);
        }
    }"></div>

    <!--JavaScript-->var viewModel = {
        isLoadIndicatorVisible: ko.observable(false)
    };

    ko.applyBindings(viewModel);

---

#####See Also#####
#include common-link-handleevents
- [LoadIndicator Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/LoadIndicator/Overview)
- [LoadIndicator API Reference](/api-reference/10%20UI%20Widgets/dxLoadIndicator '/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/')

[tags]loadIndicator, load indicator, loading indicator, overlay, show, hide, open, close, showing, shown, hiding, hidden