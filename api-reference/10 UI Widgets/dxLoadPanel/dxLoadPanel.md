---
module: ui/load_panel
export: default
inherits: ..\dxOverlay\dxOverlay.md
---
---
##### widgettree
visible: true

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **LoadPanel** is an overlay widget notifying the viewer that loading is in progress.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#loadPanel").dxLoadPanel({
            closeOnOutsideClick: true,
            visible: true
        });
    });

    <!--HTML-->
    <div id="loadPanel"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-load-panel
        [closeOnOutsideClick]="true"
        [(visible)]="isLoadPanelVisible">
    </dx-load-panel>

    <!--TypeScript-->
    import { DxLoadPanelModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        isLoadPanelVisible = true;
    }
    @NgModule({
        imports: [
            // ...
            DxLoadPanelModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-load-panel="{
            closeOnOutsideClick: true,
            bindingOptions: {
                visible: 'isLoadPanelVisible'
            }
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.isLoadPanelVisible = true;
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML--><div data-bind="dxLoadPanel: {
        closeOnOutsideClick: true,
        visible: isLoadPanelVisible
    }"></div>

    <!--JavaScript-->var viewModel = {
        isLoadPanelVisible: ko.observable(true)
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().LoadPanel()
        .ID("loadPanel")
        .CloseOnOutsideClick(true)
        .Visible(true)
    )

    <!--Razor VB-->@(Html.DevExtreme().LoadPanel() _
        .ID("loadPanel") _
        .CloseOnOutsideClick(True) _
        .Visible(True)
    )

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationsloadpanelloadpanelloadpanel/"
}

#####See Also#####
- [LoadPanel - Overview](/concepts/05%20Widgets/LoadPanel/00%20Overview.md '/Documentation/Guide/Widgets/LoadPanel/Overview/')
- [LoadPanel - Show and Hide Using the API](/concepts/05%20Widgets/LoadPanel/05%20Show%20and%20Hide%20Using%20the%20API.md '/Documentation/Guide/Widgets/LoadPanel/Show_and_Hide_Using_the_API/')