---
id: dxTreeMap.Options.parentField
type: String
default: undefined
---
---
##### shortDescription
Specifies the name of the data source field that provides parent IDs for items. Applies to plain [data sources](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#dataSource') only.

---
In certain cases, you may have a plain data source that implies a hierarchical structure. For example, the following code declares a data source that, despite being plain, can be rearranged into a hierarchy of two groups with two items in each.

    <!--JavaScript-->var treeMapOptions = {
        // ...
        dataSource: [
            // Group 1
            { id: 1, name: 'Fruits'},
            { parent: 1, name: 'Apples', value: 10 },
            { parent: 1, name: 'Oranges', value: 13 },
            
            // Group 2
            { id: 2, name: 'Vegetables' },
            { parent: 2, name: 'Cucumbers', value: 4 },
            { parent: 2, name: 'Tomatoes', value: 8 }
        ]
    };

Note that in this data source, objects that have children have the *"id"* field whose value is unique. Their children have the *"parent"* field pointing at the parent's ID. The *"id"* and *"parent"* fields can have other names, but in any case they must be assigned to the [idField](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/idField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#idField') and **parentField** options.

    <!--JavaScript-->var treeMapOptions = {
        // ...
        idField: 'id',
        parentField: 'parent'
    };

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/FlatDataStructure/"
}