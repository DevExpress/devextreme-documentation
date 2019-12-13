[note] In this article, the [Button](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/') widget is used to demonstrate how to show and hide the **LoadPanel**. This choice is made for purely demonstrational purposes, and you can do the same operations using another widget following the same guidelines.

To show or hide the **LoadPanel** programmatically, call the [show()](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/show().md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Methods/#show') or [hide()](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/hide().md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Methods/#hide') method. The same thing can be done using the [toggle(showing)](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/toggle(showing).md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Methods/#toggleshowing') method. Pass **true** or **false** to this method to show or hide the **LoadPanel**, respectively.

---
#####**jQuery**

    <!--JavaScript-->
    $(function() {
        $("#loadPanelContainer").dxLoadPanel({
            closeOnOutsideClick: true
        });
        $("#buttonContainer").dxButton({
            text: "Show the Load Panel", 
            onClick: function () {
                $("#loadPanelContainer").dxLoadPanel("show");
                // ==== or ====
                $("#loadPanelContainer").dxLoadPanel("toggle", true);
            } 
        });
    });

#####ASP.NET MVC Controls

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
                // ==== or ====
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
            // ==== or ====
            $("#loadPanel").dxLoadPanel("toggle", true);
        }
    </script>

---

With Angular, AngularJS, or Knockout, use a different technique. Bind the [visible](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#visible') property of the **LoadPanel** widget to a component property (in Angular), a scope property (in AngularJS), or an observable variable (in Knockout). After that, change this property/variable, and the **LoadPanel** will appear or disappear.

---
##### Angular

    <!--HTML-->
    <dx-load-panel
        [closeOnOutsideClick]="true"
        [(visible)]="isLoadPanelVisible">
    </dx-load-panel>
    <dx-button
        text="Show the Load Panel"
        (onClick)="isLoadPanelVisible = true">
    </dx-button>

    <!--TypeScript-->
    import { DxLoadPanelModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isLoadPanelVisible: boolean = false;
    }
    @NgModule({
        imports: [
            // ...
            DxLoadPanelModule,
            DxButtonModule
        ],
        // ...
    })

##### AngularJS

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

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.isLoadPanelVisible = false;
            $scope.showLoadPanel = function () {
                $scope.isLoadPanelVisible = true;
            }
        });

##### Knockout

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

    <!--JavaScript-->var viewModel = {
        isLoadPanelVisible: ko.observable(false)
    };

    ko.applyBindings(viewModel);

---

To execute certain commands before or after the **LoadPanel** is shown/hidden, handle the [showing](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/showing.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Events/#showing'), [shown](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/shown.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Events/#shown'), [hiding](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/hiding.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Events/#hiding') or [hidden](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/hidden.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Events/#hidden') event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the corresponding **on*EventName*** option. For example, in the following code, a handler of the **shown** event is assigned to the [onShown](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/onShown.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#onShown') option. This handler hides the **LoadPanel** three seconds after it was shown.

---
##### jQuery

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

##### Angular

    <!--HTML-->
    <dx-load-panel
        [(visible)]="isLoadPanelVisible"
        (onShown)="hideLoadPanel($event)">
    </dx-load-panel>
    <dx-button
        text="Show the Load Panel"
        (onClick)="isLoadPanelVisible = true">
    </dx-button>

    <!--TypeScript-->
    import { DxLoadPanelModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isLoadPanelVisible: boolean = false;
        hideLoadPanel (e) {
            setTimeout(() => { 
                e.component.hide();          
            }, 3000);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxLoadPanelModule,
            DxButtonModule
        ],
        // ...
    })

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var shownEventHandler1 = function (e) {
        // First handler of the "shown" event
    };

    var shownEventHandler2 = function (e) {
        // Second handler of the "shown" event
    };

    $("#loadPanelContainer").dxLoadPanel("instance")
        .on("shown", shownEventHandler1)
        .on("shown", shownEventHandler2);

#####See Also#####
#include common-link-handleevents
- [LoadPanel - Customize the Appearance](/concepts/05%20Widgets/LoadPanel/10%20Customize%20the%20Appearance '/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/')
- [LoadPanel - Resize and Relocate](/concepts/05%20Widgets/LoadPanel/15%20Resize%20and%20Relocate.md '/Documentation/Guide/Widgets/LoadPanel/Resize_and_Relocate/')
- [LoadPanel Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/LoadPanel/Overview)
- [LoadPanel API Reference](/api-reference/10%20UI%20Widgets/dxLoadPanel '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/')

[tags]loadPanel, load panel, overlay, show, hide, open, close, showing, shown, hiding, hidden