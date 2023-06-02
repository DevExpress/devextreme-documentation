Searching is disabled in the TreeView UI component by default. Assign **true** to the [searchEnabled](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchEnabled') property to display the search panel. The [searchExpr](/api-reference/10%20UI%20Components/SearchBoxMixin/1%20Configuration/searchExpr.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchExpr') property specifies which data fields should be searched. Assign an _array_ of field names to it if you need to search several fields.

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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeView
            data-structure="plain"
            :data-source="treeViewData" 
            key-expr="key"
            display-expr="name"
            parent-id-expr="parent"
            :search-enabled="true"
            :search-expr="searchExpr"  
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxTreeView } from 'devextreme-vue/tree-view';

    const treeViewData = [
        { key: '1', name: 'Fruits' },
        { key: '1_1', name: 'Apples', count: 20, parent: '1' },
        { key: '1_2', name: 'Oranges', count: 3, parent: '1' },
        { key: '2', name: 'Vegetables' },
        { key: '2_1', name: 'Cucumbers', count: 15, parent: '2' },
        { key: '2_2', name: 'Tomatoes', count: 23, parent: '2' }
    ];

    export default {
        components: {
            DxTreeView
        },
        data() {
            return {
                searchExpr: ['count', 'name'],
                treeViewData
            };
        },
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeView from 'devextreme-react/tree-view';

    const treeViewData = [
        { key: '1', name: 'Fruits' },
        { key: '1_1', name: 'Apples', count: 20, parent: '1' },
        { key: '1_2', name: 'Oranges', count: 3, parent: '1' },
        { key: '2', name: 'Vegetables' },
        { key: '2_1', name: 'Cucumbers', count: 15, parent: '2' },
        { key: '2_2', name: 'Tomatoes', count: 23, parent: '2' }
    ];

    const searchExpr = ["count", "name"];
    class App extends React.Component {
        render() {
            return (
                <TreeView
                    dataStructure="plain"
                    dataSource={treeViewData}
                    keyExpr="key"
                    displayExpr="name"
                    parentIdExpr="parent"
                    searchEnabled={true}
                    searchExpr={searchExpr} />
            );
        }
    }

    export default App;

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/TreeViewWithSearchBar/"
}

When a user types a string in the input field, the TreeView suggests all nodes that _contain_ this string. Assign *'startswith'* to the [searchMode](/api-reference/10%20UI%20Components/SearchBoxMixin/1%20Configuration/searchMode.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchMode') property if you want the TreeView to suggest only those nodes that _start_ with the input string.

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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeView
            data-structure="plain"
            :data-source="treeViewData" 
            key-expr="key"
            display-expr="name"
            parent-id-expr="parent"
            search-mode="startswith"
            :search-enabled="true"
            :search-expr="searchExpr"  
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxTreeView } from 'devextreme-vue/tree-view';

    const treeViewData = [
        { key: '1', name: 'Fruits' },
        { key: '1_1', name: 'Apples', count: 20, parent: '1' },
        { key: '1_2', name: 'Oranges', count: 3, parent: '1' },
        { key: '2', name: 'Vegetables' },
        { key: '2_1', name: 'Cucumbers', count: 15, parent: '2' },
        { key: '2_2', name: 'Tomatoes', count: 23, parent: '2' }
    ];

    export default {
        components: {
            DxTreeView
        },
        data() {
            return {
                searchExpr: ['count', 'name'],
                treeViewData
            };
        },
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeView from 'devextreme-react/tree-view';

    const treeViewData = [
        { key: '1', name: 'Fruits' },
        { key: '1_1', name: 'Apples', count: 20, parent: '1' },
        { key: '1_2', name: 'Oranges', count: 3, parent: '1' },
        { key: '2', name: 'Vegetables' },
        { key: '2_1', name: 'Cucumbers', count: 15, parent: '2' },
        { key: '2_2', name: 'Tomatoes', count: 23, parent: '2' }
    ];

    const searchExpr = ["count", "name"];
    class App extends React.Component {
        render() {
            return (
                <TreeView
                    dataStructure="plain"
                    dataSource={treeViewData}
                    keyExpr="key"
                    displayExpr="name"
                    parentIdExpr="parent"
                    searchMode="startswith"
                    searchEnabled={true}
                    searchExpr={searchExpr} />
            );
        }
    }

    export default App;

---

You can customize the search panel by specifying the [searchEditorOptions](/api-reference/10%20UI%20Components/SearchBoxMixin/1%20Configuration/searchEditorOptions.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchEditorOptions') property. The following code changes the panel's default width and placeholder:

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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeView
            data-structure="plain"
            :data-source="treeViewData" 
            key-expr="key"
            display-expr="name"
            parent-id-expr="parent"
            :search-enabled="true">
            <DxSearchEditorOptions
                placeholder="Type search value here..."
                :width="300"
            />
        </DxTreeView>    
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeView, {
        DxSearchEditorOptions
    } from 'devextreme-vue/tree-view';

    const treeViewData = [
        { key: '1', name: 'Fruits' },
        { key: '1_1', name: 'Apples', count: 20, parent: '1' },
        { key: '1_2', name: 'Oranges', count: 3, parent: '1' },
        { key: '2', name: 'Vegetables' },
        { key: '2_1', name: 'Cucumbers', count: 15, parent: '2' },
        { key: '2_2', name: 'Tomatoes', count: 23, parent: '2' }
    ];

    export default {
        components: {
            DxTreeView,
            DxSearchEditorOptions
        },
        data() {
            return {
                treeViewData
            };
        },
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { TreeView, SearchEditorOptions } from 'devextreme-react/tree-view';

    const treeViewData = [
        { key: '1', name: 'Fruits' },
        { key: '1_1', name: 'Apples', count: 20, parent: '1' },
        { key: '1_2', name: 'Oranges', count: 3, parent: '1' },
        { key: '2', name: 'Vegetables' },
        { key: '2_1', name: 'Cucumbers', count: 15, parent: '2' },
        { key: '2_2', name: 'Tomatoes', count: 23, parent: '2' }
    ];

    class App extends React.Component {
        render() {
            return (
                <TreeView
                    dataStructure="plain"
                    dataSource={treeViewData}
                    keyExpr="key"
                    displayExpr="name"
                    parentIdExpr="parent"
                    searchEnabled={true}>
                    <SearchEditorOptions
                        placeholder="Type search value here..."
                        width={300}
                    />                    
                </TreeView>    
            );
        }
    }

    export default App;

---

#####See Also#####
- [TreeView - Access a Node](/concepts/05%20UI%20Components/TreeView/10%20Access%20a%20Node '/Documentation/Guide/UI_Components/TreeView/Access_a_Node')

[tags]treeView, collection UI component, search, search mode, search expression
