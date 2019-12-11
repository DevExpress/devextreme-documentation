---
module: ui/tag_box
export: default
inherits: ..\dxSelectBox\dxSelectBox.md
---
---
##### widgettree
dataSource: [
    "HD Video Player",
    "SuperHD Video Player",
    "SuperPlasma 50",
    "SuperLED 50",
    "SuperLED 42",
    "SuperLCD 55",
    "SuperLCD 42",
    "SuperPlasma 65",
    "SuperLCD 70",
    "Projector Plus",
    "Projector PlusHT",
    "ExcelRemote IR",
    "ExcelRemote BT",
    "ExcelRemote IP"
]

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **TagBox** widget is an editor that allows an end user to select multiple items from a drop-down list.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->
    $(function() {
        $("#tagBox").dxTagBox({
            dataSource: [ "Item 1", "Item 2", "Item 3" ],
            maxDisplayedTags: 2
        });
    });

    <!--HTML-->
    <div id="tagBox"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxDataSource"
        [maxDisplayedTags]="2">
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular"
    // ...
    export class AppComponent {
        tagBoxDataSource = [ "Item 1", "Item 2", "Item 3" ];
    }
    @NgModule({
        imports: [
            // ...
            DxTagBoxModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-tag-box="{
            dataSource: tagBoxDataSource,
            maxDisplayedTags: 2
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.tagBoxDataSource = [ "Item 1", "Item 2", "Item 3" ];
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxTagBox: {
        dataSource: tagBoxDataSource,
        maxDisplayedTags: 2
    }"></div>

    <!--JavaScript-->var viewModel = {
        tagBoxDataSource: [ "Item 1", "Item 2", "Item 3" ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().TagBox()
        .ID("tagBox")
        .DataSource(new[] { "Item 1", "Item 2", "Item 3" })
        .MaxDisplayedTags(2)
    )

    <!--Razor VB-->@(Html.DevExtreme().TagBox() _
        .ID("tagBox") _
        .DataSource({ "Item 1", "Item 2", "Item 3" }) _
        .MaxDisplayedTags(2)
    )

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/editorstagboxtagboxmainfeatures/"
}
<a href="http://www.youtube.com/watch?v=PEz46QIZhxQ&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=39" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [TagBox - Overview](/concepts/05%20Widgets/TagBox/00%20Overview.md '/Documentation/Guide/Widgets/TagBox/Overview/')