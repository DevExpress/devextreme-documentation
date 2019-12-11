---
module: ui/slide_out
export: default
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### lib
dx.mobile.js, dx.all.js

##### shortDescription
The **SlideOut** widget is a classic slide-out menu paired with a view. An end user opens the menu by swiping away the view.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#slideOut").dxSlideOut({
            dataSource: [ "Item 1", "Item 2", "Item 3", "Item 4" ],
            onItemClick: function (e) {
                e.component.hideMenu();
            }
        });
    });

    <!--HTML-->
    <div id="slideOut"></div>

    <!--CSS-->#slideOut {
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-slide-out
        [dataSource]="slideOutDataSource"
        (onItemClick)="closeSlideOut($event)">
    </dx-slide-out>

    <!--TypeScript-->
    import { DxSlideOutModule } from 'devextreme-angular'
    // ...
    export class AppComponent {
        slideOutDataSource = [ "Item 1", "Item 2", "Item 3", "Item 4" ];
        closeSlideOut = function (e) {
            e.component.hideMenu();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSlideOutModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div id="slideOut" dx-slide-out="{
        dataSource: slideOutDataSource,
        onItemClick: closeSlideOut
    }"></div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.slideOutDataSource = [ "Item 1", "Item 2", "Item 3", "Item 4" ];
            $scope.closeSlideOut = function (e) {
                e.component.hideMenu();
            }
        });

    <!--CSS-->#slideOut {
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div id="slideOut" data-bind="dxSlideOut: {
        dataSource: [ "Item 1", "Item 2", "Item 3", "Item 4" ],
        onItemClick: function (e) {
            e.component.hideMenu();
        }
    }"></div>

    <!--CSS-->#slideOut {
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().SlideOut()
        .ID("slideOut")
        .DataSource(new[] { "Item 1", "Item 2", "Item 3", "Item 4" })
        .OnItemClick(@<text>
            function (e) {
                e.component.hideMenu();
            }
        </text>)
    )

    <!--Razor VB-->@(Html.DevExtreme().SlideOut() _
        .ID("slideOut") _
        .DataSource({ "Item 1", "Item 2", "Item 3", "Item 4" }) _
        .OnItemClick("slideOut_itemClick")
    )
    <script>
        function slideOut_itemClick(e) {
            e.component.hideMenu();
        }
    </script>

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationslideoutslideoutgroupingmenuitems/iphone/ios7/default/default"
}

#####See Also#####
- [SlideOut - Overview](/concepts/05%20Widgets/SlideOut/00%20Overview.md '/Documentation/Guide/Widgets/SlideOut/Overview/')