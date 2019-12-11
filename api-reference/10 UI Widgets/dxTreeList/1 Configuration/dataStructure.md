---
default: 'plain'
acceptValues: 'plain' | 'tree'
type: String
---
---
##### shortDescription
Notifies the widget of your data structure.

---
By default, the widget expects that data has a plain structure where each data item contains a *"parentId"* field and a unique *"id"* field. For items of the highest hierarchical level, *"parentId"* should be *0*, **null** or **undefined** indicating that these items belong to the root node. The root node holds the entire hierarchy and is not visualized.

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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/LocalDataPlainStructure/jQuery/Light/"
}

If your data has a hierarchical structure where each data item contains nested items, set this option to *"tree"*. Parent and item IDs will be generated automatically.

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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/LocalDataHierarchicalStructure/jQuery/Light/"
}

#####See Also#####
- [Use Plain Data](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/010%20Use%20Plain%20Data.md '/Documentation/Guide/Widgets/TreeList/Data_Binding/Use_Plain_Data/')
- [Use Hierarchical Data](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/015%20Use%20Hierarchical%20Data.md '/Documentation/Guide/Widgets/TreeList/Data_Binding/Use_Hierarchical_Data/')
- [parentIdExpr](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/itemsExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#itemsExpr')
- [keyExpr](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr')
- [rootValue](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/rootValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#rootValue')
- [itemsExpr](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/itemsExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#itemsExpr')