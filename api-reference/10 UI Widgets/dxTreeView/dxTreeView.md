---
module: ui/tree_view
export: default
inherits: ..\HierarchicalCollectionWidget\HierarchicalCollectionWidget.md
---
---
##### widgettree
dataSource: [{
    id: "1",
    text: "Stores",
    expanded: true,
    items: [{
        id: "1_1",
        text: "Super Mart of the West",
        expanded: true,
        items: [{
            id: "1_1_1",
            text: "Video Players",
            items: [{
                id: "1_1_1_1",
                text: "HD Video Player",
                price: 220,
                image: "images/products/1.png"
            }, {
                id: "1_1_1_2",
                text: "SuperHD Video Player",
                image: "images/products/2.png",
                price: 270
            }]
        }, {
            id: "1_1_2",
            text: "Televisions",
            expanded: true,
            items: [{
                id: "1_1_2_1",
                text: "SuperLCD 42",
                image: "images/products/7.png",
                price: 1200
            }, {
                id: "1_1_2_2",
                text: "SuperLED 42",
                image: "images/products/5.png",
                price: 1450
            }, {
                id: "1_1_2_3",
                text: "SuperLED 50",
                image: "images/products/4.png",
                price: 1600
            }, {
                id: "1_1_2_4",
                text: "SuperLCD 55",
                image: "images/products/6.png",
                price: 1350
            }, {
                id: "1_1_2_5",
                text: "SuperLCD 70",
                image: "images/products/9.png",
                price: 4000
            }]
        }, {
            id: "1_1_4",
            text: "Projectors",
            items: [{
                id: "1_1_4_1",
                text: "Projector Plus",
                image: "images/products/14.png",
                price: 550
            }, {
                id: "1_1_4_2",
                text: "Projector PlusHD",
                image: "images/products/15.png",
                price: 750
            }]
        }]

    }, {
        id: "1_2",
        text: "Braeburn",
        items: [{
            id: "1_2_1",
            text: "Video Players",
            items: [{
                id: "1_2_1_1",
                text: "HD Video Player",
                image: "images/products/1.png",
                price: 240
            }, {
                id: "1_2_1_2",
                text: "SuperHD Video Player",
                image: "images/products/2.png",
                price: 300
            }]
        }]

    }]
}]

##### lib
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **TreeView** widget is a tree-like representation of textual data.

---
You can create the widget using one of the following approaches.

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->
    var species = [
        { id: 1, parentId: 0, text: "Species" },
        { id: 2, parentId: 1, text: "Cat" },
        { id: 3, parentId: 1, text: "Dog" },
        { id: 4, parentId: 1, text: "Cow" },
        { id: 5, parentId: 2, text: "Abyssinian" },
        { id: 6, parentId: 2, text: "Aegean cat" },
        { id: 7, parentId: 2, text: "Australian Mist" },
        { id: 8, parentId: 3, text: "Affenpinscher" },
        { id: 9, parentId: 3, text: "Afghan Hound" },
        { id: 10, parentId: 3, text: "Airedale Terrier" },
        { id: 11, parentId: 3, text: "Akita Inu" },
        { id: 12, parentId: 0, text: "Birds" },
        { id: 13, parentId: 12, text: "Akekee" },
        { id: 14, parentId: 12, text: "Arizona Woodpecker" },
        { id: 15, parentId: 12, text: "Black-chinned Sparrow" }
    ];
    $(function () {
        $("#treeView").dxTreeView({
            dataSource: species,
            dataStructure: 'plain'
        });
    });

    <!--HTML-->
    <div id="treeView"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-tree-view
        [dataSource]="species"
        dataStructure="plain">
    </dx-tree-view>

    <!--TypeScript-->
    export class AppComponent {
        species = [
            // ...   
        ];
    }

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-tree-view="{
            dataSource: species,
            dataStructure: 'plain'
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.species = [
                // ...   
            ];
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxTreeView: {
        dataSource: species,
        dataStructure: 'plain'
    }"></div>

    <!--JavaScript-->var viewModel = {
        species: [
            // ...
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget')

    <!--Razor C#-->@(Html.DevExtreme().TreeView()
        .ID("treeView")
        .DataSource(Species)
        .DataStructure(TreeViewDataStructure.Plain)
    )

    <!--Razor VB-->@(Html.DevExtreme().TreeView() _
        .ID("treeView") _
        .DataSource(Species) _
        .DataStructure(TreeViewDataStructure.Plain)
    )

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

[note]The **TreeView** widget requires each data source item to contain at least a [key](/api-reference/10%20UI%20Widgets/HierarchicalCollectionWidget/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#keyExpr') field. Thus, the widget does not support data sources consisting of value items.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationtreeviewtreeviewsimpletreeview/"
}
<a href="http://www.youtube.com/watch?v=j3d94lzW4Vw&index=41&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [TreeView - Overview](/concepts/05%20Widgets/TreeView/00%20Overview.md '/Documentation/Guide/Widgets/TreeView/Overview/')
- [ASP.NET MVC Controls - Data Binding](/concepts/35%20ASP.NET%20MVC%20Controls/30%20Data%20Binding '/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/')