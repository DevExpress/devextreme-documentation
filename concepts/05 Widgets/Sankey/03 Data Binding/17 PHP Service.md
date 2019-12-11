DevExtreme provides the [DevExtreme-PHP-Data](https://github.com/DevExpress/DevExtreme-PHP-Data/blob/master/README.md) extension that implements data processing on a PHP server according to the DevExtreme widgets' protocol. To access the server from the client, configure the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') as described in the [Custom Sources](/concepts/05%20Widgets/Sankey/03%20Data%20Binding/20%20Custom%20Sources.md '/Documentation/Guide/Widgets/Sankey/Data_Binding/Custom_Sources/') article or use the [createStore](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference) method. This method is a part of the [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md) extension. The following code shows how to use it:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var serviceUrl = "http://url/to/my/service.php";
        $("#sankeyContainer").dxSankey({
            dataSource: DevExpress.data.AspNet.createStore({
                key: ["from", "to"],
                loadUrl: serviceUrl
            }),
            sourceField: "from",
            targetField: "to",
            weightField: "amount"
        })
    });

#####Angular

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    import CustomStore from "devextreme/data/custom_store";
    import { createStore } from "devextreme-aspnet-data-nojquery";
    // ...
    export class AppComponent {
        store: CustomStore;
        constructor() {
            const serviceUrl: string = "http://url/to/my/service.php";
            this.store = createStore({
                key: ["from", "to"],
                loadUrl: serviceUrl
            })
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-sankey
        [dataSource]="store"
        sourceField="from"
        targetField="to"
        weightField="amount">
    </dx-sankey>

---
