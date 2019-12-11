---
module: data/custom_store
type: object
inherits: ..\Store\Store.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
A [Store](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') object that enables you to implement your own data access logic.

---
This class requires you to implement all data access operations. Each function implementing an operation should be passed to the corresponding configuration option of the CustomStore.

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        load: function(loadOptions) {
            // . . .
        },
        byKey: function(key, extra) {
            // . . .
        },
        update: function(key, values) {
            // . . .
        },
        . . .  
    });

Note that despite Store operations being asynchronous and returning the [jQuery.Deferred](https://api.jquery.com/jQuery.Deferred) promise, you do not need to create the **jQuery.Deferred** object within your function. The function should return an object compatible with **jQuery.Deferred**.

For more information on creating a CustomStore, refer to the [Data Source Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources') topic.