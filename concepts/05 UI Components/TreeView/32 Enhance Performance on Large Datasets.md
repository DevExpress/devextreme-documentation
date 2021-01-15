If the **TreeView** performance is low, consider enabling the Virtual Mode. In this mode, the **TreeView** loads a set of child nodes once their parent node is expanded. The Virtual Mode can be enabled only if your data source satisfies the following conditions.

- It has a [plain structure](/concepts/05%20UI%20Components/TreeView/07%20Use%20Plain%20Data.md '/Documentation/Guide/UI_Components/TreeView/Use_Plain_Data').
- Root nodes have the [parentId](/api-reference/_hidden/dxTreeViewItem/parentId.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#parentId') field set to the [rootValue](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/rootValue.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#rootValue').
- Nodes that do not have children, have the [hasItems](/api-reference/_hidden/dxTreeViewItem/hasItems.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#hasItems') field set to **false**.

To enable the Virtual Mode, set the [virtualModeEnabled](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/virtualModeEnabled.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#virtualModeEnabled') option to **true**.

---
##### jQuery

    <!--JavaScript-->var plainData = [
        { id: 1,  text: 'Fruits',     parentId: -1 },
        { id: 11, text: 'Apples',     parentId: 1, hasItems: false },
        { id: 12, text: 'Oranges',    parentId: 1, hasItems: false },
        { id: 2,  text: 'Vegetables', parentId: -1 },
        { id: 21, text: 'Cucumbers',  parentId: 2, hasItems: false },
        { id: 22, text: 'Tomatoes',   parentId: 2, hasItems: false }
    ];

    $(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: plainData,
            dataStructure: 'plain',
            virtualModeEnabled: true,
            rootValue: -1
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [dataSource]="plainData"
        dataStructure="plain"
        [virtualModeEnabled]="true"
        [rootValue]="-1">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        plainData = [
            { id: 1,  text: 'Fruits',     parentId: -1 },
            { id: 11, text: 'Apples',     parentId: 1, hasItems: false },
            { id: 12, text: 'Oranges',    parentId: 1, hasItems: false },
            { id: 2,  text: 'Vegetables', parentId: -1 },
            { id: 21, text: 'Cucumbers',  parentId: 2, hasItems: false },
            { id: 22, text: 'Tomatoes',   parentId: 2, hasItems: false }
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
            :data-source="plainData"
            :virtual-mode-enabled="true"
            :root-value="-1"
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTreeView } from 'devextreme-vue/tree-view';

    const plainData = [
        { id: 1,  text: 'Fruits',     parentId: -1 },
        { id: 11, text: 'Apples',     parentId: 1, hasItems: false },
        { id: 12, text: 'Oranges',    parentId: 1, hasItems: false },
        { id: 2,  text: 'Vegetables', parentId: -1 },
        { id: 21, text: 'Cucumbers',  parentId: 2, hasItems: false },
        { id: 22, text: 'Tomatoes',   parentId: 2, hasItems: false }
    ];

    export default {
        components: {
            DxTreeView
        },
        data() {
            return {
                plainData
            };
        },
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import TreeView from 'devextreme-react/tree-view';

    const plainData = [
        { id: 1,  text: 'Fruits',     parentId: -1 },
        { id: 11, text: 'Apples',     parentId: 1, hasItems: false },
        { id: 12, text: 'Oranges',    parentId: 1, hasItems: false },
        { id: 2,  text: 'Vegetables', parentId: -1 },
        { id: 21, text: 'Cucumbers',  parentId: 2, hasItems: false },
        { id: 22, text: 'Tomatoes',   parentId: 2, hasItems: false }
    ];

    class App extends React.Component {
        render() {
            return (
                <TreeView
                    dataStructure="plain"
                    dataSource={plainData} 
                    virtualModeEnabled={true}
                    rootValue={-1} />
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_View/VirtualMode/"
}

If the Virtual Mode does not meet your requirements, you can get full control over nodes and how to load them in the [createChildren](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/createChildren.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#createChildren') function. This function will be called at the beginning of the UI component's lifetime and each time a user expands a node whose child nodes have not been loaded yet.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            createChildren: function (parentNode) {
                var d = $.Deferred();
                $.get("https://mydomain.com/MyDataService", {
                        parentId: parentNode ? JSON.stringify(parentNode.key) : "0"
                    })
                    .done(function (result) {
                        d.resolve(result);
                    });
                return d.promise();
            },
            dataStructure: 'plain'
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [createChildren]="createChildren"
        dataStructure="plain">
    </dx-tree-view>

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
    import "rxjs/add/operator/toPromise";
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        constructor(@Inject(HttpClient) httpClient: HttpClient) { }
        createChildren = (parentNode) => {
            let params: HttpParams = new HttpParams()
                .set("parentId", parentNode ? JSON.stringify(parentNode.key) : "0");
            return httpClient.get("https://mydomain.com/MyDataService", {
                    params: params
                })
                .toPromise();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule,
            HttpClientModule
        ],
        // ...
    })
    
##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeView
            data-structure="plain"
            :create-children="createChildren" 
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTreeView } from 'devextreme-vue/tree-view';
    import 'whatwg-fetch';

    export default {
        components: {
            DxTreeView
        },
        methods: {
            createChildren: function(parent) {
                const parentId = parent ? parent.itemData.id : '';

                return fetch(`https://mydomain.com/MyDataService?parentId=${parentId}`)
                    .then(response => response.json())
                    .catch(() => { throw 'Data Loading Error'; });
            }
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import TreeView from 'devextreme-react/tree-view';
    import 'whatwg-fetch';

    class App extends React.Component {
        render() {
            return (
                <TreeView
                    dataStructure="plain"
                    createChildren={this.createChildren} />
            );
        }

        createChildren(parent) {
            const parentId = parent ? parent.itemData.id : '';

            return fetch(`https://mydomain.com/MyDataService?parentId=${parentId}`)
                .then(response => response.json())
                .catch(() => { throw 'Data Loading Error'; });
        }        
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_View/LoadDataOnDemand/"
}

#####See Also#####
- [TreeView - Expand and Collapse Nodes](/concepts/05%20UI%20Components/TreeView/20%20Expand%20and%20Collapse%20Nodes '/Documentation/Guide/UI_Components/TreeView/Expand_and_Collapse_Nodes')
- [TreeView API Reference](/api-reference/10%20UI%20Components/dxTreeView '/Documentation/ApiReference/UI_Components/dxTreeView/')

[tags]treeview, tree view, enhance performance, big data, large data, virtual mode, virtualModeEnabled, createChildren
