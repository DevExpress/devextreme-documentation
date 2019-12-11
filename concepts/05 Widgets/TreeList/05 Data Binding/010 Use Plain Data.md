For an example of plain data, see the following code.

    <!--JavaScript-->
    var plainData = [
        { id: '1', fullName: "John Heart", position: "CEO" }, 
        { id: '1_1', parentId: '1', fullName: "Samantha Bright",  position: "COO" }, 
        { id: '1_2', parentId: '1', fullName: "Arthur Miller",  position:"CTO" },
        { id: '2_1', parentId: '2', fullName: "Robert Reagan", position: "CMO" }, 
        { id: '2', fullName: "Greta Sims", position: "HR Manager" }
    ];

Here, all items have the **id** field, and those items that have a parent include the **parentId** field. **id** and **parentId** are conventional field names. To use other ones, change the [keyExpr](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr') and [parentIdExpr](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/parentIdExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#parentIdExpr') options, respectively.

---
##### jQuery

    <!--JavaScript-->
    var plainData = [
        { key: '1', fullName: "John Heart", position: "CEO" }, 
        { key: '1_1', head: '1', fullName: "Samantha Bright", position: "COO" }, 
        { key: '1_2', head: '1', fullName: "Arthur Miller", position: "CTO" },
        { key: '2_1', head: '2', fullName: "Robert Reagan", position: "CMO" }, 
        { key: '2', fullName: "Greta Sims", position: "HR Manager" }
    ];

    $(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: plainData,
            keyExpr: 'key',
            parentIdExpr: 'head'
        });
    });

##### Angular

    <!--HTML--><dx-tree-list
        [dataSource]="plainData"
        keyExpr="key"
        parentIdExpr="head">
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        plainData = [
            { key: '1', fullName: "John Heart", position: "CEO" }, 
            { key: '1_1', head: '1', fullName: "Samantha Bright", position: "COO" }, 
            { key: '1_2', head: '1', fullName: "Arthur Miller", position: "CTO" },
            { key: '2_1', head: '2', fullName: "Robert Reagan", position: "CMO" }, 
            { key: '2', fullName: "Greta Sims", position: "HR Manager" }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/SimpleArrayPlainStructure/"
}

Items on the highest hierarchical level have the parent ID equal to *0*, **null** or **undefined**, which indicates that these items belong to the root node. If you need to use another value, change the [rootValue](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/rootValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#rootValue') option.

---
##### jQuery

    var plainData = [
        { id: '1', head: '-1', fullName: "John Heart", position: "CEO" }, 
        { id: '1_1', head: '1', fullName: "Samantha Bright", position: "COO" }, 
        { id: '1_2', head: '1', fullName: "Arthur Miller", position:"CTO" }, 
        { id: '2_1', head: '2', fullName: "Robert Reagan", position: "CMO" }, 
        { id: '2', head: '-1', fullName: "Greta Sims", position: "HR Manager" } 
    ];

    $(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: plainData,
            parentIdExpr: 'head',
            rootValue: '-1'
        });
    });

##### Angular

    <!--HTML--><dx-tree-list
        [dataSource]="plainData"
        parentIdExpr="head"
        rootValue="-1">
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        plainData = [
            { id: '1', head: '-1', fullName: "John Heart", position: "CEO" }, 
            { id: '1_1', head: '1', fullName: "Samantha Bright", position: "COO" }, 
            { id: '1_2', head: '1', fullName: "Arthur Miller", position:"CTO" }, 
            { id: '2_1', head: '2', fullName: "Robert Reagan", position: "CMO" }, 
            { id: '2', head: '-1', fullName: "Greta Sims", position: "HR Manager" } 
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

---

When you load data from a remote source, and your data objects have a field that defines whether a row has nested rows, assign this field name to the [hasItemsExpr](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/hasItemsExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#hasItemsExpr') option. It will notify the widget which rows do not need the expand button. 

#####See Also#####
- [TreeList - Use Hierarchical Data](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/015%20Use%20Hierarchical%20Data.md '/Documentation/Guide/Widgets/TreeList/Data_Binding/Use_Hierarchical_Data/')
- [TreeList API Reference](/api-reference/10%20UI%20Widgets/dxTreeList '/Documentation/ApiReference/UI_Widgets/dxTreeList/')

[tags]treeList, plain data, parentIdExpr, keyExpr, root value, rootValue
