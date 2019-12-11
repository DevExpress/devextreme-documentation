---
module: ui/panorama
export: default
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### widgettree
dataSource: [
    {
        header: "Main courses",
        text: "First and second course of a meal"
    },
    {
        header: "Seafood",
        text: "Seafood: ocean and sea"
    },
    {
        header: "Desserts",
        text: "Desserts: biscuits and cookies"
    },
    {
        header: "Drinks",
        text: "Drinks: Soft vine and tea"
    }
],
height: 300

##### lib
dx.mobile.js, dx.all.js

##### shortDescription
The **Panorama** widget is a full-screen widget that allows you to arrange items on a long horizontal canvas split into several views. Each view contains several items, and an end user navigates the views with the swipe gesture. The **Panorama** is often used as a navigation map on the first page of an application.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->
    $(function () {
        $("#panorama").dxPanorama({
            items: [{
                title: "Item 1 Title",
                text: "Item 1 Text Content"
            }, {
                title: "Item 2 Title",
                text: "Item 2 Text Content"
            }],
            backgroundImage: {
                url: '/here/goes/your/image.png',
                height: 600,
                width: 800
            }
        });
    });

    <!--HTML-->
    <div id="panorama"></div>

    <!--CSS-->#panorama {
        height: auto;
        position: absolute;
        top: 0; 
        bottom: 0;
        width: 100%;
    }

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-panorama
        [items]="panoramaItems">
        <dxo-background-image
            url="/here/goes/your/image.png"
            [height]="600"
            [width]="800">
        </dxo-background-image>
    </dx-panorama>

    <!--TypeScript-->
    import { DxPanoramaModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        panoramaItems = [{
            title: "Item 1 Title",
            text: "Item 1 Text Content"
        }, {
            title: "Item 2 Title",
            text: "Item 2 Text Content"
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxPanoramaModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div ng-controller="DemoController">
        <div id="panorama" dx-panorama="{
            items: panoramaItems,
            backgroundImage: {
                url: '/here/goes/your/image.png',
                height: 600,
                width: 800
            }
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.panoramaItems = [{
                title: "Item 1 Title",
                text: "Item 1 Text Content"
            }, {
                title: "Item 2 Title",
                text: "Item 2 Text Content"
            }];
        });

    <!--CSS-->#panorama {
        height: auto;
        position: absolute;
        top: 0; 
        bottom: 0;
        width: 100%;
    }

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div id="panorama" data-bind="dxPanorama: {
        items: panoramaItems,
        backgroundImage: {
            url: '/here/goes/your/image.png',
            height: 600,
            width: 800
        }
    }"></div>

    <!--JavaScript-->var viewModel = {
        panoramaItems: [{
            title: "Item 1 Title",
            text: "Item 1 Text Content"
        }, {
            title: "Item 2 Title",
            text: "Item 2 Text Content"
        }]
    };
    ko.applyBindings(viewModel);

    <!--CSS-->#panorama {
        height: auto;
        position: absolute;
        top: 0; 
        bottom: 0;
        width: 100%;
    }

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationpanoramapanoramapanorama/iphone/ios7/default/default"
}
<a href="http://www.youtube.com/watch?v=zVDFC0BuGG0&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=11" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Panorama - Overview](/concepts/05%20Widgets/Panorama/00%20Overview.md '/Documentation/Guide/Widgets/Panorama/Overview/')