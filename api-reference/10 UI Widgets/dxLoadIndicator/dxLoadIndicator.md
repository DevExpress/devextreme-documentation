---
module: ui/load_indicator
export: default
inherits: ..\Widget\Widget.md
---
---
##### widgettree

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **LoadIndicator** is a UI element notifying the viewer that a process is in progress.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#loadIndicator").dxLoadIndicator({
            visible: true
        });
    });

    <!--HTML--><div id="loadIndicator"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-load-indicator [(visible)]="isLoadIndicatorVisible"></dx-load-indicator>

    <!--TypeScript-->
    import { DxLoadIndicatorModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        isLoadIndicatorVisible = true;
    }
    @NgModule({
        imports: [
            // ...
            DxLoadIndicatorModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-load-indicator="{
            bindingOptions: {
                visible: 'isLoadIndicatorVisible'
            }
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.isLoadIndicatorVisible = true;
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML--><div data-bind="dxLoadIndicator: {
        visible: isLoadIndicatorVisible
    }"></div>

    <!--JavaScript-->var viewModel = {
        isLoadIndicatorVisible: ko.observable(true)
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().LoadIndicator()
        .ID("loadIndicator")
        .Visible(true)
    )

    <!--Razor VB-->@(Html.DevExtreme().LoadIndicator() _
        .ID("loadIndicator") _
        .Visible(True)
    )

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationsloadindicatorloadindicatorloadindicator/"
}

#####See Also#####
- [LoadIndicator - Overview](/concepts/05%20Widgets/LoadIndicator/00%20Overview.md '/Documentation/Guide/Widgets/LoadIndicator/Overview/')
- [LoadIndicator - Show and Hide Using the API](/concepts/05%20Widgets/LoadIndicator/05%20Show%20and%20Hide%20Using%20the%20API.md '/Documentation/Guide/Widgets/LoadIndicator/Show_and_Hide_Using_the_API/')