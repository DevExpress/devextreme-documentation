We recommend server-side data processing for large datasets. The [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') supports server-side filtering and sorting. DevExtreme provides extensions that help implement data processing for [ASP.NET](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%2C%20PHP%2C%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/') and [PHP](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%2C%20PHP%2C%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/') servers. You can also use the third-party extension for [MongoDB](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%2C%20PHP%2C%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/'). If these extensions do not suit your data source, implement server-side data processing manually according to the protocol described in the [Custom Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/') article.

Specify the [remoteOperations](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/remoteOperations/') property to notify the **TreeList** of the server's data processing operations.

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
