---
module: ui/toolbar
export: default
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### widgettree
dataSource: [{
        text: "Contacts",
        location: "before"
    }, {
        text: "Missed"
    }, {
        text: "Favorites",
        location: "after"
    }
]

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Toolbar** is a widget containing items that usually manage screen content. Those items can be plain text or widgets.

---
The main option you should specify when creating a widget is the [dataSource](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/#dataSource'). The following code snippet demonstrates an example of an array that can be passed to the **dataSource** option of the **Toolbar** widget.

    <!--JavaScript-->
    var toolbarItems = [{
        widget: "dxButton",
        options: {
            type: "back",
            text: "Back"
        },
        location: "before"
    }, {
        text: "Add",
        locateInMenu: "always"
    }, {
        text: "Change",
        locateInMenu: "always"
    }, {
        text: "Products",
        location: "center"
    }];

#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#toolbar").dxToolbar({
            items: toolbarItems
        });
    });

    <!--HTML-->
    <div id="toolbar"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-toolbar [items]="toolbarData"></dx-toolbar>

    <!--TypeScript-->
    import { DxToolbarModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        toolbarData = toolbarItems;
    }
    @NgModule({
         imports: [
             // ...
             DxToolbarModule,
             DxButtonModule
         ],
         // ...
     })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-toolbar="{
            items: toolbarData
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function DemoController($scope) {
            $scope.toolbarData = toolbarItems;
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxToolbar: {
        items: toolbarData
    }"></div>

    <!--JavaScript-->
    var viewModel = {
        toolbarData: toolbarItems
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Toolbar()
        .ID("toolbar")
        .Items(items => {
            items.Add()
                .Widget(w => w.Button()
                    .Type(ButtonType.Back)
                    .Text("Back"))
                .Location(ToolbarItemLocation.Before);
            items.Add()
                .Text("Add")
                .LocateInMenu(ToolbarItemLocateInMenuMode.Always);
            items.Add()
                .Text("Change")
                .LocateInMenu(ToolbarItemLocateInMenuMode.Always);
            items.Add()
                .Text("Products")
                .Location(ToolbarItemLocation.Center);
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().Toolbar() _
        .ID("toolbar") _
        .Items(Sub(items)
            items.Add() _
                .Widget(Function(w)
                    Return w.Button() _
                            .Type(ButtonType.Back) _
                            .Text("Back")
                End Function) _
                .Location(ToolbarItemLocation.Before)
            items.Add() _
                .Text("Add") _
                .LocateInMenu(ToolbarItemLocateInMenuMode.Always)
            items.Add() _
                .Text("Change") _
                .LocateInMenu(ToolbarItemLocateInMenuMode.Always)
            items.Add() _
                .Text("Products") _
                .Location(ToolbarItemLocation.Center)
        End Sub)
    )

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Toolbar/Overview/jQuery/Light/"
}

#####See Also#####
- [Toolbar - Overview](/concepts/05%20Widgets/Toolbar/00%20Overview.md '/Documentation/Guide/Widgets/Toolbar/Overview/')