---
id: dxTreeView.Options.dataStructure
acceptValues: 'plain' | 'tree'
type: String
default: 'tree'
---
---
##### shortDescription
Notifies the widget of the used data structure.

---
The widget expects that data has a hierarchical structure where each data item contains a `text`, a unique `id`, and an `items` array if the data item nests other data items:

    <!--JavaScript-->
    var hierarchicalData = [{
        id: '1',
        text: 'Fruits',
        items: [
            { id: '1_1', text: 'Apples' },
            { id: '1_2', text: 'Oranges' }
        ]
    }, {
        id: '2',
        text: 'Vegetables',
        items: [
            { id: '2_1', text: 'Cucumbers' },
            { id: '2_2', text: 'Tomatoes' }
        ]
    }];

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/HierarchicalDataStructure/"
}

If data has a plain structure, set the **dataStructure** option to *"plain"*. In this case, each data item should have a `text`, a unique `id`, and a `parentId`. For root items, `parentId` should be equal to **0** or **undefined**:

    <!--JavaScript-->
    var plainData = [
        { id: '1', text: 'Fruits' },     // A root item
        { id: '1_1', text: 'Apples', parentId: '1' },
        { id: '1_2', text: 'Oranges', parentId: '1' },
        { id: '2', text: 'Vegetables' }, // Also a root item
        { id: '2_1', text: 'Cucumbers', parentId: '2' },
        { id: '2_2', text: 'Tomatoes', parentId: '2' }
    ];

`id`, `text`, `items`, and `parentId` are [conventional field names](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/items/'). To use other names, change the [keyExpr](/api-reference/10%20UI%20Widgets/HierarchicalCollectionWidget/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#keyExpr'), [displayExpr](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#displayExpr'), [itemsExpr](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/itemsExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#itemsExpr'), and [parentIdExpr](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/parentIdExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#parentIdExpr') options, respectively. You can also specify the [rootValue](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/rootValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#rootValue') option to change the `parentId` value that root items should have.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/FlatDataStructure/"
}

#include common-ref-enum with {
    enum: "`TreeViewDataStructure`",
    values: "`Plain` and `Tree`"
}

#####See Also#####
- [TreeView - Use Hierarchical Data](/concepts/05%20Widgets/TreeView/05%20Use%20Hierarchical%20Data.md '/Documentation/Guide/Widgets/TreeView/Use_Hierarchical_Data/')
- [TreeView - Use Plain Data](/concepts/05%20Widgets/TreeView/07%20Use%20Plain%20Data.md '/Documentation/Guide/Widgets/TreeView/Use_Plain_Data/')