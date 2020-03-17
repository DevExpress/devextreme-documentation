Loading data in raw mode allows you to configure the CustomStore more easily. You can use it only if all data shaping operations are supposed to be performed on the client. In raw mode, the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function should get raw, unprocessed data from the server, and the CustomStore will perform data shaping automatically, without any input from you. To switch to the raw mode, assign *"raw"* to the [loadMode](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/loadMode.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#loadMode') option.

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        loadMode: "raw",
        load: function() {
            return $.getJSON("url/to/the/resource");
        }
    });

Note that you are not required to implement the [byKey](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/byKey.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey') and [totalCount](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/totalCount.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#totalCount') functions in raw mode, since they will be evaluated based on the results of the **load** function. If, however, you do implement them, your implementation will take precedence over the default one.

Once loaded, data is stored in the cache. If you need to clear the cache at some point, call the [clearRawDataCache()](/api-reference/30%20Data%20Layer/CustomStore/3%20Methods/clearRawDataCache().md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#clearRawDataCache') method.

    <!--JavaScript-->
    store.clearRawDataCache();

To switch data caching off, assign **false** to the [cacheRawData](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/cacheRawData.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#cacheRawData') option. Note that in this case, the CustomStore will reload all data on every call of the **load**, **byKey** and **totalCount** functions.

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        // ...
        cacheRawData: false
    });

Since the CustomStore loads all data in raw mode at once, we do not recommend using it with large amounts of data. If you notice a decrease in the CustomStore performance in raw mode, consider delegating some or all data shaping operations to the server and implementing the remaining operations in the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function yourself.
