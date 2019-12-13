If you use plain data in the **TreeView**, set the [dataStructure](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/dataStructure.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataStructure') option to *"plain"*. For an example of plain data, see the following code snippet. 

---
##### jQuery

    <!--JavaScript-->var plainData = [
        { id: '1', text: 'Fruits' },
        { id: '1_1', text: 'Apples', parentId: '1' },
        { id: '1_2', text: 'Oranges', parentId: '1' },
        { id: '2', text: 'Vegetables' },
        { id: '2_1', text: 'Cucumbers', parentId: '2' },
        { id: '2_2', text: 'Tomatoes', parentId: '2' }
    ];

    $(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: plainData,
            dataStructure: 'plain'
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [dataSource]="plainData"
        dataStructure="plain">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        plainData = [
            { id: '1', text: 'Fruits' },
            { id: '1_1', text: 'Apples', parentId: '1' },
            { id: '1_2', text: 'Oranges', parentId: '1' },
            { id: '2', text: 'Vegetables' },
            { id: '2_1', text: 'Cucumbers', parentId: '2' },
            { id: '2_2', text: 'Tomatoes', parentId: '2' }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })

---

As you can see, all items in a plain data source have the **id** and **text** fields, and items that have a parent, have the **parentId** field. Those are [conventional field names](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/items/'). To use other names, change the [keyExpr](/api-reference/10%20UI%20Widgets/HierarchicalCollectionWidget/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#keyExpr'), [displayExpr](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#displayExpr') and [parentIdExpr](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/parentIdExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#parentIdExpr') options, respectively.

---
##### jQuery

    <!--JavaScript-->var plainData = [
        { key: '1', name: 'Fruits' },
        { key: '1_1', name: 'Apples', parent: '1' },
        { key: '1_2', name: 'Oranges', parent: '1' },
        { key: '2', name: 'Vegetables' },
        { key: '2_1', name: 'Cucumbers', parent: '2' },
        { key: '2_2', name: 'Tomatoes', parent: '2' }
    ];

    $(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: plainData,
            dataStructure: 'plain',
            keyExpr: 'key',
            displayExpr: 'name',
            parentIdExpr: 'parent'
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [dataSource]="plainData"
        dataStructure="plain"
        keyExpr="key"
        displayExpr="name"
        parentIdExpr="parent">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        plainData = [
            { key: '1', name: 'Fruits' },
            { key: '1_1', name: 'Apples', parent: '1' },
            { key: '1_2', name: 'Oranges', parent: '1' },
            { key: '2', name: 'Vegetables' },
            { key: '2_1', name: 'Cucumbers', parent: '2' },
            { key: '2_2', name: 'Tomatoes', parent: '2' }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })

---

Frequently, the **id** of an item is also its **text**. In this case, set both the **keyExpr** and **displayExpr** options to a single value.

---
##### jQuery

    <!--JavaScript-->var plainData = [
        { name: 'Fruits' },
        { name: 'Apples', parentId: 'Fruits' },
        { name: 'Oranges', parentId: 'Fruits' },
        { name: 'Vegetables' },
        { name: 'Cucumbers', parentId: 'Vegetables' },
        { name: 'Tomatoes', parentId: 'Vegetables' }
    ];

    $(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: plainData,
            dataStructure: 'plain',
            keyExpr: 'name',
            displayExpr: 'name'
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [dataSource]="plainData"
        dataStructure="plain"
        keyExpr="name"
        displayExpr="name">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        plainData = [
            { name: 'Fruits' },
            { name: 'Apples', parentId: 'Fruits' },
            { name: 'Oranges', parentId: 'Fruits' },
            { name: 'Vegetables' },
            { name: 'Cucumbers', parentId: 'Vegetables' },
            { name: 'Tomatoes', parentId: 'Vegetables' }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_View/FlatDataStructure/"
}

#####See Also#####
- [TreeView - Use Hierarchical Data](/concepts/05%20Widgets/TreeView/05%20Use%20Hierarchical%20Data.md '/Documentation/Guide/Widgets/TreeView/Use_Hierarchical_Data')
- [TreeView - Access a Node](/concepts/05%20Widgets/TreeView/10%20Access%20a%20Node '/Documentation/Guide/Widgets/TreeView/Access_a_Node')
- [TreeView - Customize Node Appearance](/concepts/05%20Widgets/TreeView/30%20Customize%20Node%20Appearance.md '/Documentation/Guide/Widgets/TreeView/Customize_Node_Appearance')
- [TreeView API Reference](/api-reference/10%20UI%20Widgets/dxTreeView '/Documentation/ApiReference/UI_Widgets/dxTreeView/')

[tags]treeview, tree view, plain data structure, dataSctructure, keyExpr, displayExpr, parentIdExpr