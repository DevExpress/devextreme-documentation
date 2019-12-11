---
module: data/array_store
type: object
inherits: ..\Store\Store.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
A [Store](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') accessing an in-memory array.

---
To associate the required array with the ArrayStore, pass this array ArrayStore constructor.

    <!--JavaScript-->
    var store = new DevExpress.data.ArrayStore(array);

If you need to specify other configuration option of the ArrayStore in addition to the data array, pass the required array to the [data](/api-reference/30%20Data%20Layer/ArrayStore/1%20Configuration/data.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#data') configuration option.

    <!--JavaScript-->
    var store = new DevExpress.data.ArrayStore({
        data: array,
        key: "id",
        onModified: function() {
            // 'modified' event handler
        },
        errorHandler: function(error) {
            // Error handler
        }
    });

Note, that the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#key') option is required if you are going to use the Store for read-write access to data.

For more information on working with in-memory data, refer to the [Data Source Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/0%20In-memory%20Data.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#In-memory_Data') article.