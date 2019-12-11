Use the third-party [devextreme-query-mongodb](https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md) extension to query data from MongoDB. This extension implements data processing on a server according to the protocol the **Lookup** uses. To access the server from the client, configure the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') as described in the [Custom Sources](/concepts/05%20Widgets/Lookup/03%20Data%20Binding/20%20Custom%20Sources.md '/Documentation/Guide/Widgets/Lookup/Data_Binding/Custom_Sources/') article or use the [createStore](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference) method. This method is a part of the [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md) extension. The following code shows how to use this method.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var serviceUrl = "http://url/to/my/service";
        $("#lookupContainer").dxLookup({
            dataSource: DevExpress.data.AspNet.createStore({
                key: "ID",
                loadUrl: serviceUrl
            }),
            // ...
        })
    });

#####Angular

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    import CustomStore from "devextreme/data/custom_store";
    import { createStore } from "devextreme-aspnet-data-nojquery";
    // ...
    export class AppComponent {
        store: CustomStore;
        constructor() {
            let serviceUrl = "http://url/to/my/service";
            this.store = createStore({
                key: "ID",
                loadUrl: serviceUrl
            })
        }
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-lookup ...
        [dataSource]="store">
    </dx-lookup>

---

See [this series of blog posts](https://community.devexpress.com/blogs/oliver/archive/2017/03/24/devextreme-real-world-patterns.aspx) for more information on using DevExtreme widgets in applications with MongoDB.