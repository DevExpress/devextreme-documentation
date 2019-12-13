[note] In this article, the [Button](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/') widget is used to demonstrate how to show and hide the **Popover**. This choice is made for purely demonstrational purposes, and you can do the same operations using another widget following the same guidelines.

To show or hide the **Popover** programmatically, call the [show()](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/show().md '/Documentation/ApiReference/UI_Widgets/dxPopover/Methods/#show') or [hide()](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/hide().md '/Documentation/ApiReference/UI_Widgets/dxPopover/Methods/#hide') method. The same thing can be done using the [toggle(showing)](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/toggle(showing).md '/Documentation/ApiReference/UI_Widgets/dxPopover/Methods/#toggleshowing') method. Pass **true** or **false** to this method to show or hide the **Popover**, respectively. This approach is more typical of jQuery and ASP.NET MVC Controls.

---
##### jQuery 

    <!--JavaScript-->$(function() {
		$("#popoverContainer").dxPopover({
            target: "#image"
        });

        $("#showButton").dxButton({
            text: "Show the Popover", 
            onClick: function () {
                $("#popoverContainer").dxPopover("show");
                // ===== or =====
                $("#popoverContainer").dxPopover("toggle", true);
            } 
        });

        $("#hideButton").dxButton({
            text: "Hide the Popover", 
            onClick: function () {
                $("#popoverContainer").dxPopover("hide");
                // ===== or =====
                $("#popoverContainer").dxPopover("toggle", false);
            } 
        });
    });

    <!--HTML--><img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="popoverContainer">
        <p>Popover content</p>
    </div>
    <div id="showButton"></div>
    <div id="hideButton"></div>

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Popover()
        .ID("popover")
        .Target("#image")
        .ContentTemplate(@<text>
            <p>Popover content</p>
        </text>)
    )
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />

    @(Html.DevExtreme().Button()
        .ID("showButton")
        .Text("Show the Popover")
        .OnClick("showPopover")
    )

    @(Html.DevExtreme().Button()
        .ID("hideButton")
        .Text("Hide the Popover")
        .OnClick("hidePopover")
    )

    <script type="text/javascript">
        function showPopover () {
            $("#popover").dxPopover("show");
            // ===== or =====
            $("#popover").dxPopover("toggle", true);
        }

        function hidePopover () {
            $("#popover").dxPopover("hide");
            // ===== or =====
            $("#popover").dxPopover("toggle", false);
        } 
    </script>

---

The **show()** method called without arguments shows the **Popover** for the [target specified beforehand](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/target.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#target'). If you need to change the target once, call the [show(target)](/api-reference/10%20UI%20Widgets/dxPopover/3%20Methods/show(target).md '/Documentation/ApiReference/UI_Widgets/dxPopover/Methods/#showtarget') method.

---
##### jQuery 

    <!--JavaScript-->$(function() {
        // ...
        $("#showButton").dxButton({
            text: "Show the Popover", 
            onClick: function () {
                $("#popoverContainer").dxPopover("show", "#newTarget");
            } 
        });
    });

##### ASP.NET MVC Controls

    <!--Razor C#-->
    // ...

    <script type="text/javascript">
        function showPopover () {
            $("#popover").dxPopover("show", "#newTarget");
        }
        // ...
    </script>

---

With Angular, AngularJS, or Knockout, use a different technique. Bind the [visible](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#visible') property of the **Popover** widget to a component property (in Angular), a scope property (in AngularJS), or an observable variable (in Knockout). After that, change them, and the **Popover** will appear or disappear.

---
##### Angular

    <!--HTML-->
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <dx-popover
        target="#image"
        [visible]="isPopoverVisible">
        <div *dxTemplate="let data of 'content'">
            <p>Popover content</p>
        </div>
    </dx-popover>
    <dx-button
        text="Show the Popover"
        (onClick)="isPopoverVisible = true">
    </dx-button>
    <dx-button
        text="Hide the Popover"
        (onClick)="isPopoverVisible = false">
    </dx-button>

    <!--TypeScript-->
    import { DxPopoverModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isPopoverVisible: boolean = false;
    }
    @NgModule({
        imports: [
            // ...
            DxPopoverModule
        ],
        // ...
    })

#####**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-popover="{
            target: '#image',
            bindingOptions: {
                visible: 'isPopoverVisible'
            }
        }">
            <p>Popover Content</p>
        </div>
        <div dx-button="{
            text: 'Show the Popover',
            onClick: showPopover
        }"></div>
        <div dx-button="{
            text: 'Hide the Popover',
            onClick: hidePopover
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.isPopoverVisible = false;
            $scope.showPopover = function () {
                $scope.isPopoverVisible = true;
            };
            $scope.hidePopover = function () {
                $scope.isPopoverVisible = false;
            };
        });

#####**Knockout**

    <!--HTML-->
    <div data-bind="dxPopover: {
        target: '#image',
        visible: isPopoverVisible
    }">
        <p>Popover Content</p>
    </div>
    <div data-bind="dxButton: {
        text: 'Show the Popover',
        onClick: function (e) {
            e.model.isPopoverVisible(true);
        }
    }"></div>
    <div data-bind="dxButton: {
        text: 'Hide the Popover',
        onClick: function (e) {
            e.model.isPopoverVisible(false);
        }
    }"></div>

    <!--JavaScript-->var viewModel = {
        isPopoverVisible: ko.observable(false)
    };

    ko.applyBindings(viewModel);

---