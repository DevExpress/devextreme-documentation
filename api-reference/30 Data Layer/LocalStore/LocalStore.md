---
module: data/local_store
type: object
inherits: ..\ArrayStore\ArrayStore.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
A [Store](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') providing access to the HTML5 Web Storage.

---
When creating a LocalStore instance, specify the [name](/api-reference/30%20Data%20Layer/LocalStore/1%20Configuration/name.md '/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#name') configuration option, which is required to identify the data within the storage.

    <!--JavaScript-->
    var store = new DevExpress.data.LocalStore({
        name: "MyLocalData",
        key: "id"
    });

Note that the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#key') option is required if you are going to use the Store for read-write access to data.

For more information on working with LocalStore data, refer to the [Data Source Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/1%20Local%20Data.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Local_Data') article.