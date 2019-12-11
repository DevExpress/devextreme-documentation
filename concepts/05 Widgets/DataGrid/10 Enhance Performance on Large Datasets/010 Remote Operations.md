We recommend server-side data processing for large datasets. The [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') supports server-side paging, filtering, and sorting. DevExtreme provides extensions that help implement data processing for [ASP.NET](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding/16%20Web%20API%20Service.md '/Documentation/Guide/Widgets/DataGrid/Data_Binding/Web_API_Service/') and [PHP](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding/17%20PHP%20Service.md '/Documentation/Guide/Widgets/DataGrid/Data_Binding/PHP_Service/') servers. You can also use the third-party extension for [MongoDB](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding/18%20MongoDB%20Service.md '/Documentation/Guide/Widgets/DataGrid/Data_Binding/MongoDB_Service/'). If these extensions do not suit your data source, implement server-side data processing manually according to the protocol described in the [Custom Sources](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding/25%20Custom%20Sources '/Documentation/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/') article.

Specify the [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/') option to notify the **DataGrid** of the server's data processing operations.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({ 
            // ...
            remoteOperations: {
                filtering: true,
                paging: true,
                sorting: true,
                groupPaging: true,
                grouping: true,
                summary: true
            }
        });
    }); 

#####Angular

    <!--HTML--><dx-data-grid ... >
        <dxo-remote-operations
            [filtering]="true"
            [paging]="true"
            [sorting]="true"
            [summary]="true"
            [grouping]="true"
            [groupPaging]="true"> 
        </dxo-remote-operations>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---
