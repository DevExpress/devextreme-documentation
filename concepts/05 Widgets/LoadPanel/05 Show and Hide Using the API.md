[note] In this article, the [Button](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/') widget is used to demonstrate how to show and hide the **LoadPanel**. This choice is made for purely demonstrational purposes, and you can do the same operations using another widget following the same guidelines.

To show or hide the **LoadPanel** programmatically, call the [show()](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/show().md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Methods/#show') or [hide()](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/hide().md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Methods/#hide') method. The same thing can be done using the [toggle(showing)](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/toggle(showing).md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Methods/#toggleshowing') method. Pass *true* or *false* to this method to show or hide the **LoadPanel**, respectively.

[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function() {
		$("#loadPanelContainer").dxLoadPanel({
            closeOnOutsideClick: true
        });
        
        $("#buttonContainer").dxButton({
            text: "Show the Load Panel", 
            onClick: function () {
                $("#loadPanelContainer").dxLoadPanel("show");
                // ---------- or ----------
                $("#loadPanelContainer").dxLoadPanel("toggle", true);
            } 
        });
    });

[**ASP.NET MVC Wrappers**](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget')

    <!--Razor C#-->
    @(Html.DevExtreme().LoadPanel()
        .ID("loadPanel")
        .CloseOnOutsideClick(true)
    )

    @(Html.DevExtreme().Button()
        .ID("button")
        .Text("Show the Load Panel")
        .OnClick(@<text>
            function () {
                $("#loadPanel").dxLoadPanel("show");
                // ---------- or ----------
                $("#loadPanel").dxLoadPanel("toggle", true);
            } 
        </text>)
    )

    <!--Razor VB-->
    @(Html.DevExtreme().LoadPanel() _
        .ID("loadPanel") _
        .CloseOnOutsideClick(True)
    )

    @(Html.DevExtreme().Button() _
        .ID("button") _
        .Text("Show the Load Panel") _
        .OnClick("button_click")
    )

    <script>
        function button_click() {
            $("#loadPanel").dxLoadPanel("show");
            // ---------- or ----------
            $("#loadPanel").dxLoadPanel("toggle", true);
        }
    </script>

With AngularJS or Knockout, use a different technique. Bind the [visible](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#visible') property of the **LoadPanel** widget to a scope property (in AngularJS) or an observable variable (in Knockout). After that, change this scope property or observable variable, and the **LoadPanel** will appear or disappear.

[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/') 

    <!--HTML--><div ng-controller="DemoController">
        <div dx-load-panel="{
            closeOnOutsideClick: true,
            bindingOptions: {
                visible: 'isLoadPanelVisible'
            }
        }"></div>
        <div dx-button="{
            text: 'Show the Load Panel',
            onClick: showLoadPanel
        }"></div>
    </div>

<!---->

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.isLoadPanelVisible = false;
            $scope.showLoadPanel = function () {
                $scope.isLoadPanelVisible = true;
            }
        });

[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML--><div data-bind="dxLoadPanel: {
        closeOnOutsideClick: true,
        visible: isLoadPanelVisible
    }"></div>
    <div data-bind="dxButton: {
        text: 'Show the Load Panel',
        onClick: function (e) {
            e.model.isLoadPanelVisible(true);
        }
    }"></div>

<!---->

    <!--JavaScript-->var viewModel = {
        isLoadPanelVisible: ko.observable(false)
    };

    ko.applyBindings(viewModel);

To execute certain commands before or after the **LoadPanel** is shown/hidden, handle the [showing](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/showing.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Events/#showing'), [shown](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/shown.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Events/#shown'), [hiding](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/hiding.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Events/#hiding') or [hidden](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/hidden.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Events/#hidden') event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the corresponding **on*EventName*** option. For example, in the following code, a handler of the **shown** event is assigned to the [onShown](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/onShown.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#onShown') option. This handler hides the **LoadPanel** three seconds after it was shown.

    <!--JavaScript-->$(function() {
		$("#loadPanelContainer").dxLoadPanel({
            onShown: function (e) {
                setTimeout(function () { 
                    e.component.hide();          
                }, 3000);
            }
        });

        $("#buttonContainer").dxButton({
            text: "Show the Load Panel", 
            onClick: function () {
                $("#loadPanelContainer").dxLoadPanel("show");
            } 
        });
    });

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Methods/#oneventName_eventHandler') method.

    <!--JavaScript-->
    var shownEventHandler1 = function (e) {
        // First handler of the "shown" event
    };

    var shownEventHandler2 = function (e) {
        // Second handler of the "shown" event
    };

    $("#loadPanelContainer").dxLoadPanel("instance")
        .on('shown', shownEventHandler1)
        .on('shown', shownEventHandler2);

#####See Also#####
- [Handle Events](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events')
- [LoadPanel - Customize the Appearance](/concepts/05%20Widgets/LoadPanel/10%20Customize%20the%20Appearance '/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/')
- [LoadPanel - Resize and Relocate](/concepts/05%20Widgets/LoadPanel/15%20Resize%20and%20Relocate.md '/Documentation/Guide/Widgets/LoadPanel/Resize_and_Relocate/')
- [LoadPanel Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-load_panel-overview)
- [LoadPanel API Reference](/api-reference/10%20UI%20Widgets/dxLoadPanel '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/')

[tags]loadPanel, load panel, overlay, show, hide, open, close, showing, shown, hiding, hidden