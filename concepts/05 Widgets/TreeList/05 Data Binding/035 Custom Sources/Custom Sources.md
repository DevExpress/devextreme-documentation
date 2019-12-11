To consume data from a custom source, the **TreeList** uses the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/'). This article provides details on how to configure it and on the protocol that the **CustomStore** adheres when communicating with the server. If the server already processes data (that is, performs filtering, sorting or grouping), notify the **TreeList** by assigning **true** to the corresponding field of the [remoteOperations](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/remoteOperations/') object. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            //...
            remoteOperations: {
                filtering: true,
                sorting: true,
                // Grouping is required only when
                // a user can filter data using a header filter
                grouping: true
            }
        });
    });

##### Angular

    <!--HTML--><dx-tree-list ... >
        <dxo-remote-operations
            [filtering]="true"
            [sorting]="true"
            [grouping]="true"> <!-- Grouping is required only when a user can filter data using a header filter -->
        </dxo-remote-operations>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

---

[note]Make data operations remote only if data has a [plain structure](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/dataStructure.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataStructure').

If the server does not process data yet, employ one of the following extensions by DevExtreme. They implement server-side data processing and also configure the **CustomStore** for you. Remember to notify the **TreeList** of the data processing operations that were delegated to the server.

- [DevExtreme ASP.NET Data](https://github.com/DevExpress/DevExtreme.AspNet.Data)
- [DevExtreme PHP Data](https://github.com/DevExpress/DevExtreme-PHP-Data)

If these extensions do not suit your needs, configure the **CustomStore** and implement server-side data processing following the instructions given in this article. Note that the server may leave some of the data processing operations unimplemented. In this case, make sure that the corresponding fields of the **remoteOperations** object are set to **false**.

<a href="/Demos/WidgetsGallery/Demo/Tree_List/WebAPIService/jQuery/Light/" class="button orange small fix-width-155" target="_blank">Web API Service Demo</a>

[tags]treeList, CustomStore, DataSource, remote operations. remoteOperations, filtering, sorting, grouping, load data, add, delete, update
