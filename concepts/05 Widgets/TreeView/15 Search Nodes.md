Searching is disabled in the **TreeView** widget by default. Assign **true** to the [searchEnabled](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#searchEnabled') option to display the search panel. The [searchExpr](/api-reference/10%20UI%20Widgets/SearchBoxMixin/1%20Configuration/searchExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#searchExpr') option specifies which data fields should be searched. Assign an _array_ of field names to it if you need to search several fields.

---
#####jQuery

    <!--JavaScript-->
    var treeViewData = [
        { key: '1', name: 'Fruits' },
        { key: '1_1', name: 'Apples', count: 20, parent: '1' },
        { key: '1_2', name: 'Oranges', count: 3, parent: '1' },
        { key: '2', name: 'Vegetables' },
        { key: '2_1', name: 'Cucumbers', count: 15, parent: '2' },
        { key: '2_2', name: 'Tomatoes', count: 23, parent: '2' }
    ];
    
    $(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: treeViewData,
            dataStructure: 'plain',
            keyExpr: 'key',
            displayExpr: 'name',
            parentIdExpr: 'parent',
            searchEnabled: true,
            searchExpr: ["count", "name"]
        });
    });

#####Angular

    <!--HTML-->
    <dx-tree-view
        [dataSource]="treeViewData"
        dataStructure="plain"
        keyExpr="key"
        displayExpr="name"
        parentIdExpr="parent"
        [searchEnabled]="true"
        [searchExpr]="['count', 'name']">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        treeViewData = [
            { key: '1', name: 'Fruits' },
            { key: '1_1', name: 'Apples', count: 20, parent: '1' },
            { key: '1_2', name: 'Oranges', count: 3, parent: '1' },
            { key: '2', name: 'Vegetables' },
            { key: '2_1', name: 'Cucumbers', count: 15, parent: '2' },
            { key: '2_2', name: 'Tomatoes', count: 23, parent: '2' }
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
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/TreeViewWithSearchBar/"
}

When a user types a string in the input field, the **TreeView** suggests all nodes that _contain_ this string. Assign *'startswith'* to the [searchMode](/api-reference/10%20UI%20Widgets/SearchBoxMixin/1%20Configuration/searchMode.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#searchMode') option if you want the **TreeView** to suggest only those nodes that _start_ with the input string.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: treeViewData,
            dataStructure: 'plain',
            keyExpr: 'key',
            displayExpr: 'name',
            parentIdExpr: 'parent',
            searchEnabled: true,
            searchMode: "startswith"
        });
    });

#####Angular

    <!--HTML-->
    <dx-tree-view
        [dataSource]="treeViewData"
        dataStructure="plain"
        keyExpr="key"
        displayExpr="name"
        parentIdExpr="parent"
        [searchEnabled]="true"
        searchMode="startswith">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        treeViewData = [
            { key: '1', name: 'Fruits' },
            { key: '1_1', name: 'Apples', count: 20, parent: '1' },
            { key: '1_2', name: 'Oranges', count: 3, parent: '1' },
            { key: '2', name: 'Vegetables' },
            { key: '2_1', name: 'Cucumbers', count: 15, parent: '2' },
            { key: '2_2', name: 'Tomatoes', count: 23, parent: '2' }
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

You can customize the search panel by specifying the [searchEditorOptions](/api-reference/10%20UI%20Widgets/SearchBoxMixin/1%20Configuration/searchEditorOptions.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#searchEditorOptions') option. The following code changes the panel's default width and placeholder:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: treeViewData,
            dataStructure: 'plain',
            keyExpr: 'key',
            displayExpr: 'name',
            parentIdExpr: 'parent',
            searchEnabled: true,
            searchEditorOptions: {
                placeholder: "Type search value here...",
                width: 300
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-tree-view
        [dataSource]="treeViewData"
        dataStructure="plain"
        keyExpr="key"
        displayExpr="name"
        parentIdExpr="parent"
        [searchEnabled]="true">
        <dxo-search-editor-options
            placeholder="Type search value here..."
            [width]="300">
        </dxo-search-editor-options>
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        treeViewData = [
            { key: '1', name: 'Fruits' },
            { key: '1_1', name: 'Apples', count: 20, parent: '1' },
            { key: '1_2', name: 'Oranges', count: 3, parent: '1' },
            { key: '2', name: 'Vegetables' },
            { key: '2_1', name: 'Cucumbers', count: 15, parent: '2' },
            { key: '2_2', name: 'Tomatoes', count: 23, parent: '2' }
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

#####See Also#####
- [TreeView - Access a Node](/concepts/05%20Widgets/TreeView/10%20Access%20a%20Node '/Documentation/Guide/Widgets/TreeView/Access_a_Node')

[tags]treeView, collection widget, search, search mode, search expression
