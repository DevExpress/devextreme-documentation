---
id: dxTreeView.Options.createChildren
type: function(parentNode)
---
---
##### shortDescription
Allows you to load nodes on demand.

##### param(parentNode): dxTreeViewNode
The node that has been expanded; **null** for the root node.

##### return: Promise<any> | Array<Object>
A Promise that is resolved with the result from the server or an array of objects to be converted to child nodes.

---
**createChildren** is called at the beginning of the UI component's lifetime and each time a user expands a node whose child nodes have not been loaded yet. It allows you to load the entire tree in portions: load root nodes first (when the function's **parentNode** parameter is **null**) and the child nodes of each expanded node later.

This function has the following restrictions:

- Neither the [dataSource](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#dataSource'), nor the [items](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/') property should be specified.

- The [dataStructure](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/dataStructure.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#dataStructure') property should be set to *"plain"*.

- Since the [search](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchEnabled') will be performed on loaded nodes only and thus produce incorrect results, it is not recommended that you enable this functionality.

The following code shows how to use this function with a remote service:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            dataStructure: "plain",
            rootValue: 0, 
            createChildren: function (parentNode) {
                var d = $.Deferred();
                $.get("http://url/to/the/service", {
                        // Here, 0 is the "rootValue" property's value.
                        parentId: parentNode ? JSON.stringify(parentNode.key) : "0" 
                    })
                    .done(function (result) {
                        d.resolve(result);
                    });
                return d.promise();
            }
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [rootValue]="0"
        dataStructure="plain"
        [createChildren]="createChildren">
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
                // Here, 0 is the "rootValue" property's value.
                .set("parentId", parentNode ? JSON.stringify(parentNode.key) : "0"); 
            return httpClient.get("http://url/to/the/service", {
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
            :create-children="createChildren"
            :root-value="''"
            data-structure="plain"
        />
    </template>
    <script>

    import DxTreeView from 'devextreme-vue/tree-view';
    import 'whatwg-fetch';

    export default {
        components: {
            DxTreeView
        },
        methods: {
            createChildren: function(parent) {
            let parentId = parent ? parent.itemData.id : '';

            return fetch(`http://url/to/the/service?parentId=${parentId}`)
                .then(response => response.json())
                .catch(() => { throw 'Data Loading Error'; });
            }
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import TreeView from 'devextreme-react/tree-view';
    import 'whatwg-fetch';

    const App = () => {
        return (
            <TreeView
                dataStructure="plain"
                rootValue="''"
                createChildren={createChildren}
            />
        );
    }

    const createChildren = (parent) => {
        let parentId = parent ? parent.itemData.id : '';

        return fetch(`http://url/to/the/service?parentId=${parentId}`)
            .then(response => response.json())
            .catch(() => { throw 'Data Loading Error'; });
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_View/LoadDataOnDemand/"
}

#####See Also#####
- [Enhance Performance on Large Datasets](/concepts/05%20UI%20Components/TreeView/32%20Enhance%20Performance%20on%20Large%20Datasets.md '/Documentation/Guide/UI_Components/TreeView/Enhance_Performance_on_Large_Datasets/')
- [Demo: Simple Array - Plain Structure](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/SimpleArrayPlainStructure/)
