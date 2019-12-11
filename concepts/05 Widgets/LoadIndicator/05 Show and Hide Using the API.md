[note] In this article, the [Button](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/') widget is used to demonstrate how to show and hide the **LoadIndicator**. This choice is made for purely demonstrational purposes, and you can do the same operations using another widget following the same guidelines.

To specify whether the **LoadIndicator** is shown, change the [visible](/api-reference/10%20UI%20Widgets/Widget/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/Configuration/#visible') option.

[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div id="loadIndicatorContainer"></div>
    <div id="buttonContainer"></div>

<!---->

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

[**ASP.NET MVC Wrappers**](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget')

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

With AngularJS or Knockout, bind the [visible](/api-reference/10%20UI%20Widgets/Widget/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/Configuration/#visible') property of the **LoadIndicator** widget to a scope property (in AngularJS) or an observable variable (in Knockout). After that, change this scope property or observable variable, and the **LoadIndicator** will appear or disappear.

[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-load-indicator="{
            bindingOptions: {
                visible: 'isLoadIndicatorVisible'
            }
        }"></div>
        <div dx-button="{
            text: 'Toggle the LoadIndicator',
            onClick: clickHandler
        }"></div>
    </div>

<!---->

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.isLoadIndicatorVisible = false;
            $scope.clickHandler = function () {
                var currentValue = $scope.isLoadIndicatorVisible;
                $scope.isLoadIndicatorVisible = !currentValue;
            }
        });

[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

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

<!---->

    <!--JavaScript-->var viewModel = {
        isLoadIndicatorVisible: ko.observable(false)
    };

    ko.applyBindings(viewModel);


#####See Also#####
- [Handle Events](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events')
- [LoadIndicator Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-load_indicator-overview)
- [LoadIndicator API Reference](/api-reference/10%20UI%20Widgets/dxLoadIndicator '/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/')

[tags]loadIndicator, load indicator, loading indicator, overlay, show, hide, open, close, showing, shown, hiding, hidden