---
module: data/odata/store
export: default
type: Object
inherits: ..\Store\Store.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
A [Store](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') providing access to a separate [OData](https://www.odata.org) web service entity.

---
To access the entire OData service, use the [ODataContext](/api-reference/30%20Data%20Layer/ODataContext '/Documentation/ApiReference/Data_Layer/ODataContext/') object.

If you need to create a separate **ODataStore** instance, call the `ODataStore` constructor and specify the URL of the required entity via the [url](/api-reference/30%20Data%20Layer/ODataStore/1%20Configuration/url.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#url') configuration option.

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        url: "/url/to/service",
        key: "CategoryID",
        keyType: "Int32"
    });

Note that the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key') and [keyType](/api-reference/30%20Data%20Layer/ODataStore/1%20Configuration/keyType.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#keyType') configuration options provide read-write access to the entity.

#####See Also#####
- [DataSource Examples - OData](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData')

When configuring a widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), declare the **ODataStore** using the syntax shown in the following example. This example configures the [DataGrid](/api-reference/10%20UI%20Widgets/dxDataGrid '/Documentation/ApiReference/UI_Widgets/dxDataGrid/') widget.

    <!--Razor C#-->@(Html.DevExtreme().DataGrid()
        .ID("dataGrid")
        .DataSource(ds => ds.OData()
            .Version(4)
            .Url("http://services.odata.org/V4/Northwind/Northwind.svc/Products")
            .JSONP(true)
            .Key("ProductID")
            .Expand("Category")
        )
    )

    <!--Razor VB-->@(Html.DevExtreme().DataGrid() _
        .ID("dataGrid") _
        .DataSource(Function(ds)
            Return ds.OData() _
                     .Version(4) _
                     .Url("http://services.odata.org/V4/Northwind/Northwind.svc/Products") _
                     .JSONP(True) _
                     .Key("ProductID") _
                     .Expand("Category")
        End Function)
    )

#####See Also#####
- [ASP.NET MVC Wrappers - Data Binding](/concepts/35%20ASP.NET%20MVC%20Wrappers/30%20Data%20Binding '/Documentation/Guide/ASP.NET_MVC_Wrappers/Data_Binding/')