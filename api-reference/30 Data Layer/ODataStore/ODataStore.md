---
module: data/odata/store
type: object
inherits: ..\Store\Store.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
A [Store](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') providing access to a separate [OData](https://www.odata.org) web service entity.

---
To access the entire OData service, use the [ODataContext](/api-reference/30%20Data%20Layer/ODataContext '/Documentation/ApiReference/Data_Layer/ODataContext/') object.

If you need to create a separate ODataStore instance, call the ODataStore constructor and specify the URL of the required entity via the [url](/api-reference/30%20Data%20Layer/ODataStore/1%20Configuration/url.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#url') configuration option.

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        url: "/url/to/service",
        key: "CategoryID",
        keyType: "Int32"
    });

Note that the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key') and [keyType](/api-reference/30%20Data%20Layer/ODataStore/1%20Configuration/keyType.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#keyType') configuration options provide read-write access to the entity.

For more information on working with OData web services, refer to the [Data Source Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData') article.