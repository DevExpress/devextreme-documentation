---
module: viz/tree_map
export: default
inherits: ..\BaseWidget\BaseWidget.md
---
---
##### widgettree
dataSource: [{
    name: 'Fruits',
    items: [
        { name: 'Apples', value: 4 },
        { name: 'Oranges', value: 10 },
        { name: 'Lemons', value: 6 }
    ]
}, {
    name: 'Vegetables',
    items: [
        { name: 'Cucumbers', value: 4 },
        { name: 'Tomatoes', value: 8 },
        { name: 'Turnips', value: 7 }
    ]
}]

##### lib
dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **TreeMap** is a widget that displays hierarchical data by using nested rectangles.

---
In the **TreeMap** widget, hierarchical data is represented by a set of nested rectangles whose sizes are proportional to the visualized values. **TreeMap** operates with plain and hierarchical [data sources](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#dataSource'). Also, it can visualize a hierarchy reconstructed from a flat data source.

**TreeMap** provides three [layout algorithms](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/layoutAlgorithm.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#layoutAlgorithm') out-of-the-box along with the capability to implement your own algorithm. In addition, the widget includes API methods that enable you to implement the [drill down](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node/3%20Methods/drillDown().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#drillDown') feature. Moreover, **TreeMap** supports all interactive features available in other DevExtreme Data Visualization Widgets: [click](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/4%20Events/click.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#click'), [hover](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/4%20Events/hoverChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#hoverChanged') and [selection](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/4%20Events/selectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#selectionChanged').

#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->var fruitsVegetables = [{
        name: 'Fruits',
        items: [
            { name: 'Apples', value: 4 },
            { name: 'Oranges', value: 10 },
            { name: 'Lemons', value: 6 }
        ]
    }, {
        name: 'Vegetables',
        items: [
            { name: 'Cucumbers', value: 4 },
            { name: 'Tomatoes', value: 8 },
            { name: 'Turnips', value: 7 }
        ]
    }];
    $(function() {
        $("#treeMap").dxTreeMap({
            dataSource: fruitsVegetables
        });
    });

    <!--HTML--><div id="treeMap"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-tree-map [dataSource]="fruitsVegetables"></dx-tree-map>

    <!--TypeScript-->
    export class AppComponent {
        fruitsVegetables = [
            // ...   
        ];
    }

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-tree-map="{
            dataSource: fruitsVegetables
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.fruitsVegetables = [
                // ...   
            ];
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxTreeMap: {
        dataSource: fruitsVegetables
    }"></div>

    <!--JavaScript-->var viewModel = {
        fruitsVegetables: [
            // ...
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().TreeMap()
        .ID("treeMap")
        .DataSource(FruitsVegetables)
    )

    <!--Razor VB-->@(Html.DevExtreme().TreeMap() _
        .ID("treeMap") _
        .DataSource(FruitsVegetables)
    )

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/charts-tree_map-hierarchical_data_structure"
}
<a href="https://www.youtube.com/watch?v=xTyN69v7kWU&index=5&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [TreeMap - dataSource](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#dataSource')
- [ASP.NET MVC Controls - Data Binding](/concepts/35%20ASP.NET%20MVC%20Controls/30%20Data%20Binding '/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/')