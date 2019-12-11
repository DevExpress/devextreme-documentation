---
module: ui/pivot
export: default
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### widgettree
dataSource: [
    {
        title: "Main courses",
        text: "First and second course of a meal"
    },
    {
        title: "Seafood",
        text: "Seafood: ocean and sea"
    },
    {
        title: "Desserts",
        text: "Desserts: biscuits and cookies"
    },
    {
        title: "Drinks",
        text: "Drinks: Soft vine and tea"
    }
],
height: 300

##### lib
dx.mobile.js, dx.all.js

##### shortDescription
The **Pivot** provides a quick way to manage multiple views. It includes a collection of views and a navigation header. An end user switches the views by swiping them or by clicking their titles on the navigation header.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->
    $(function () {
        $("#pivot").dxPivot({
            items: [{
                title: "Item 1 Title",
                text: "Item 1 Text Content"
            }, {
                title: "Item 2 Title",
                text: "Item 2 Text Content"
            }, {
                title: "Item 3 Title",
                text: "Item 3 Text Content"
            }],
            height: 300
        });
    });

    <!--HTML-->
    <div id="pivot"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-pivot
        [items]="pivotItems"
        [height]="300">
    </dx-pivot>

    <!--TypeScript-->
    import { DxPivotModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        pivotItems = [{
            title: "Item 1 Title",
            text: "Item 1 Text Content"
        }, {
            title: "Item 2 Title",
            text: "Item 2 Text Content"
        }, {
            title: "Item 3 Title",
            text: "Item 3 Text Content"
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxPivotModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-pivot="{
            items: pivotItems,
            height: 300
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.pivotItems = [{
                title: "Item 1 Title",
                text: "Item 1 Text Content"
            }, {
                title: "Item 2 Title",
                text: "Item 2 Text Content"
            }, {
                title: "Item 3 Title",
                text: "Item 3 Text Content"
            }];
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxPivot: {
        items: pivotItems,
        height: 300
    }"></div>

    <!--JavaScript-->var viewModel = {
        pivotItems: [{
            title: "Item 1 Title",
            text: "Item 1 Text Content"
        }, {
            title: "Item 2 Title",
            text: "Item 2 Text Content"
        }, {
            title: "Item 3 Title",
            text: "Item 3 Text Content"
        }]
    };
    ko.applyBindings(viewModel);

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationpivotpivotpivot/iphone/ios7/default/default"
}
<a href="http://www.youtube.com/watch?v=EVE8ykPZxOE&index=10&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Pivot - Overview](/concepts/05%20Widgets/Pivot/00%20Overview.md '/Documentation/Guide/Widgets/Pivot/Overview/')