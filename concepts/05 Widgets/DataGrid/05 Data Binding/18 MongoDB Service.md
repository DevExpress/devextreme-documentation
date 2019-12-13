Use the third-party <a href="https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md" target="_blank">devextreme-query-mongodb</a> extension to query data from MongoDB. This extension implements data processing on a server according to the protocol the **DataGrid** uses. To access the server from the client, configure the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') as described in the [Custom Sources](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding/25%20Custom%20Sources '/Documentation/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/') article or use the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference" target="_blank">createStore</a> method. This method is a part of the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md" target="_blank">DevExtreme.AspNet.Data</a> extension. The following code shows how to use this method.
 
You should configure [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/') to notify the **DataGrid** that the server handles data.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var serviceUrl = "http://url/to/my/service";
        $("#dataGridContainer").dxDataGrid({
            dataSource: DevExpress.data.AspNet.createStore({
                key: "ID",
                loadUrl: serviceUrl,
                insertUrl: serviceUrl,
                updateUrl: serviceUrl,
                deleteUrl: serviceUrl
            }),
            remoteOperations: { groupPaging: true },
            // ...
        })
    });

#####Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    import CustomStore from "devextreme/data/custom_store";
    import { createStore } from "devextreme-aspnet-data-nojquery";
    // ...
    export class AppComponent {
        store: CustomStore;
        constructor() {
            let serviceUrl = "http://url/to/my/service";
            this.store = createStore({
                key: "ID",
                loadUrl: serviceUrl,
                insertUrl: serviceUrl,
                updateUrl: serviceUrl,
                deleteUrl: serviceUrl
            })
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ...
        [dataSource]="store">
        <dxo-remote-operations 
            [groupPaging]="true">
        </dxo-remote-operations>
    </dx-data-grid>

---

See <a href="https://community.devexpress.com/blogs/oliver/archive/2017/03/24/devextreme-real-world-patterns.aspx" target="_blank">this series of blog posts</a> for more information on using DevExtreme widgets in applications with MongoDB.


