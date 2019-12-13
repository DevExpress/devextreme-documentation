DevExtreme provides the <a href="https://github.com/DevExpress/DevExtreme-PHP-Data/blob/master/README.md" target="_blank">DevExtreme-PHP-Data</a> extension that implements data processing on a PHP server according to the protocol the **TreeList** uses. To access the server from the client, configure the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') as described in the [Custom Sources](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/035%20Custom%20Sources '/Documentation/Guide/Widgets/TreeList/Data_Binding/Custom_Sources/') article or use the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference" target="_blank">createStore</a> method. This method is a part of the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md" target="_blank">DevExtreme.AspNet.Data</a> extension. The following code shows how to use this method.
 
You should configure [remoteOperations](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/remoteOperations/') to notify the **TreeList** that the server handles data.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var serviceUrl = "http://url/to/my/service.php";
        $("#treeListContainer").dxTreeList({
            dataSource: DevExpress.data.AspNet.createStore({
                key: "ID",
                loadUrl: serviceUrl,
                insertUrl: serviceUrl,
                updateUrl: serviceUrl,
                deleteUrl: serviceUrl
            }),
            remoteOperations: { 
                filtering: true,
                sorting: true,
                grouping: true
            },
            // ...
        })
    });

#####Angular

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    import CustomStore from "devextreme/data/custom_store";
    import { createStore } from "devextreme-aspnet-data-nojquery";
    // ...
    export class AppComponent {
        store: CustomStore;
        constructor() {
            let serviceUrl = "http://url/to/my/service.php";
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
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ...
        [dataSource]="store">
        <dxo-remote-operations 
            [filtering]="true"
            [sorting]="true"
            [grouping]="true">
        </dxo-remote-operations>
    </dx-tree-list>

---

