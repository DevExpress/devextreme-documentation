---
id: dxTreeMap
module: viz/tree_map
export: default
inherits: BaseWidget,DataHelperMixin
---
---
##### shortDescription
The TreeMap is a UI component that displays hierarchical data by using nested rectangles.

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
dx.viz.js, dx.all.js

---
In the TreeMap UI component, hierarchical data is represented by a set of nested rectangles whose sizes are proportional to the visualized values. TreeMap operates with plain and hierarchical [data sources](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#dataSource'). Also, it can visualize a hierarchy reconstructed from a flat data source.

TreeMap provides three [layout algorithms](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/layoutAlgorithm.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#layoutAlgorithm') out-of-the-box along with the capability to implement your own algorithm. In addition, the UI component includes API methods that enable you to implement the [drill down](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node/3%20Methods/drillDown().md '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/Methods/#drillDown') feature. Moreover, TreeMap supports all interactive features available in other DevExtreme Data Visualization Widgets: [click](/api-reference/10%20UI%20Components/dxTreeMap/4%20Events/click.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Events/#click'), [hover](/api-reference/10%20UI%20Components/dxTreeMap/4%20Events/hoverChanged.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Events/#hoverChanged') and [selection](/api-reference/10%20UI%20Components/dxTreeMap/4%20Events/selectionChanged.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Events/#selectionChanged').

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/HierarchicalDataStructure/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget