---
id: dxTreeList.Options.dataStructure
acceptValues: 'plain' | 'tree'
type: String
default: 'plain'
---
---
##### shortDescription
Notifies the widget of the used data structure.

---
The widget expects that data has a plain structure where:

- each data item contains a `parentId` and a unique `id`;
- data items of the highest hierarchical level have `parentId` equal to **0**, **null** or **undefined**. It indicates that these data items descend from the root node. The root node does not have a visual representation.

<!----->

    <!--JavaScript-->
    var treeListData = [
        { id: 1, parentId: 0 },
        { id: 11, parentId: 1 },
        { id: 12, parentId: 1 },
        { id: 13, parentId: 1 },
        { id: 131, parentId: 13 },
        { id: 132, parentId: 13 },
        { id: 133, parentId: 13 },
        { id: 2, parentId: 0 }
    ];

Specify the [keyExpr](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr') and [parentIdExpr](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/parentIdExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#parentIdExpr') if `parentId` and `id` are called differently in your dataset. You can also change the root node's ID from 0 via the [rootValue](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/rootValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#rootValue') option.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/SimpleArrayPlainStructure/"
}

If data has a hierarchical structure, set the **dataStructure** option to *"tree"*. Parent and item IDs will be generated automatically. Data items that nest other data items should have an **items** field:

    <!--JavaScript-->
    var treeListData = [{
        text: "item1",
        items: [{ 
            text: "item11" 
        }, { 
            text: "item12",
            items: [
                { text: "item121" }, 
                { text: "item122" }
            ]
        }]
    }, { 
        text: "item2" 
    }];

If the **items** field is called differently in your dataset, specify the [itemsExpr](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/itemsExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#itemsExpr') option. 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/SimpleArrayHierarchicalStructure/"
}

[note] Editing does not work with hierarchical data sources out of the box, but you can use the code sample from <a href="https://www.devexpress.com/Support/Center/Question/Details/T725094/treelist-how-to-perform-crud-operations-on-a-hierarchical-data-source" target="_blank">this KB</a> to implement it.

If each data item has a Boolean field that specifies whether this data item nests other items, assign the field's name to the [hasItemsExpr](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/hasItemsExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#hasItemsExpr') option. The widget uses this information to render the expand button. This is required only if the widget is bound to a remote data source.

#####See Also#####
- [Use Plain Data](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/010%20Use%20Plain%20Data.md '/Documentation/Guide/Widgets/TreeList/Data_Binding/Use_Plain_Data/')
- [Use Hierarchical Data](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/015%20Use%20Hierarchical%20Data.md '/Documentation/Guide/Widgets/TreeList/Data_Binding/Use_Hierarchical_Data/')