---
module: ui/toast
export: default
inherits: ..\dxOverlay\dxOverlay.md
---
---
##### widgettree
displayTime: 20000,
visible: true,
message: "Toast message"

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Toast** is a widget that provides pop-up notifications.

---
You can create the widget using one of the following approaches.

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function() {
        $("#toast").dxToast({
            message: "Connection problem",
            type: "error",
            displayTime: 3000
        });
        $("#button").dxButton({
            text: "Show the Toast", 
            onClick: function () {
                $("#toast").dxToast("show");
            } 
        });
    });

    <!--HTML--><div id="toast"></div>
    <div id="button"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-toast
        message="Connection problem",
        type="error"
        [displayTime]="3000"
        [(visible)]="isToastVisible">
    </dx-toast>
    <dx-button
        text="Show the Toast" 
        (onClick)="showToast()">
    </dx-button>

    <!--TypeScript-->
    export class AppComponent {
        isToastVisible = false;
        showToast() {
            this.isToastVisible = true;
        }
    }

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-toast="{
            message: 'Connection problem',
            type: 'error',
            displayTime: 3000,
            bindingOptions: {
                visible: 'isToastVisible'
            } 
        }"></div>
        <div dx-button="{
            text: 'Show the Toast', 
            onClick: showToast
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.isToastVisible = false;
            $scope.showToast = function () {
                $scope.isToastVisible = true
            };
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxToast: {
        message: 'Connection problem',
        type: 'error',
        displayTime: 3000,
        visible: isToastVisible
    }"></div>
    <div data-bind="dxButton: {
        text: 'Show the Toast', 
        onClick: showToast
    }"></div>

    <!--JavaScript-->var viewModel = {
        isToastVisible: ko.observable(false),
        showToast: function (e) {
            e.model.isToastVisible(true);
        }
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget')

    <!--Razor C#-->@(Html.DevExtreme().Toast()
        .ID("toast")
        .Message("Connection problem")
        .Type(ToastType.Error)
        .DisplayTime(3000)
    )
    @(Html.DevExtreme().Button()
        .ID("button")
        .Text("Show the Toast")
        .OnClick(@<text>
            function (e) {
                $("#toast").dxToast("show")
            }
        </text>)    
    )

    <!--Razor VB-->@(Html.DevExtreme().Toast() _
        .ID("toast") _
        .Message("Connection problem") _
        .Type(ToastType.Error) _
        .DisplayTime(3000)
    )
    @(Html.DevExtreme().Button() _
        .ID("button") _
        .Text("Show the Toast") _
        .OnClick("button_click")    
    )
    <script>
        function button_click(e) {
            $("#toast").dxToast("show")
        }
    </script>

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationstoasttoasttoast/"
}

#####See Also#####
- [Toast - Overview](/concepts/05%20Widgets/Toast/00%20Overview.md '/Documentation/Guide/Widgets/Toast/Overview/')