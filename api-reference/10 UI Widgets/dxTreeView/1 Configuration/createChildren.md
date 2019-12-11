---
type: function(parentNode)
---
---
##### shortDescription
Allows you to load nodes manually.

##### param(parentNode): dxTreeViewNode
The node that has been expanded; **null** for the root node.

##### return: Promise<any>|Array<Object>
A Promise that is resolved with the result from the server or an array of objects to be converted to child nodes.

---
If you have a large data source hosted remotely, loading all of it may take considerable time. To quicken the process, you can load data for an individual node using the **createChildren** function. This function will be called at the beginning of the widget's lifetime and each time a user expands a node whose child nodes have not been loaded yet.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            createChildren: function (parentNode) {
                var d = $.Deferred();
                $.get("http://url/to/the/service", {
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
    import { ..., Inject } from '@angular/core';
    import { Http, HttpModule, URLSearchParams } from '@angular/http';
    import 'rxjs/add/operator/toPromise';
    import { DxTreeViewModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        constructor(@Inject(Http) http: Http) { }
        createChildren = (parentNode) => {
            let params: URLSearchParams = new URLSearchParams();
            params.set("parentId", parentNode ? JSON.stringify(parentNode.key) : "0");
            return http.get("http://url/to/the/service", {
                                search: params
                            })
                            .toPromise()
                            .then(response => {
                                return response.json()
                            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule,
            HttpModule
        ],
        // ...
    })

---

[note]The **createChildren** function applies only if the [dataStructure](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/dataStructure.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataStructure') option is set to *"plain"* and the [dataSource](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataSource') option is unspecified.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_View/LoadDataOnDemand/jQuery/Light/"
}


#####See Also#####
- [Enhance Performance on Large Datasets](/concepts/05%20Widgets/TreeView/32%20Enhance%20Performance%20on%20Large%20Datasets.md '/Documentation/Guide/Widgets/TreeView/Enhance_Performance_on_Large_Datasets/')
- [TreeView - Use Plain Data](/concepts/05%20Widgets/TreeView/07%20Use%20Plain%20Data.md '/Documentation/Guide/Widgets/TreeView/Use_Plain_Data/')