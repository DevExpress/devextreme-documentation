We recommend server-side data processing for large datasets. The [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') supports server-side filtering and sorting. DevExtreme provides extensions that help implement data processing for [ASP.NET](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/026%20Web%20API%20Service.md '/Documentation/Guide/Widgets/TreeList/Data_Binding/Web_API_Service/') and [PHP](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/027%20PHP%20Service.md '/Documentation/Guide/Widgets/TreeList/Data_Binding/PHP_Service/') servers. You can also use the third-party extension for [MongoDB](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/028%20MongoDB%20Service.md '/Documentation/Guide/Widgets/TreeList/Data_Binding/MongoDB_Service/'). If these extensions do not suit your data source, implement server-side data processing manually according to the protocol described in the [Custom Sources](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/035%20Custom%20Sources '/Documentation/Guide/Widgets/TreeList/Data_Binding/Custom_Sources/') article.

Specify the [remoteOperations](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/remoteOperations/') option to notify the **TreeList** of the server's data processing operations.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({ 
            // ...
            remoteOperations: {
                filtering: true,
                sorting: true,
                grouping: true
            }
        });
    }); 

#####Angular

    <!--HTML--><dx-tree-list ... >
        <dxo-remote-operations
            [filtering]="true"
            [sorting]="true"
            [grouping]="true"> 
        </dxo-remote-operations>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
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
