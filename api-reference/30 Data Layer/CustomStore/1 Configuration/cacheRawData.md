---
id: CustomStore.Options.cacheRawData
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether raw data should be saved in the cache. Applies only if [loadMode](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/loadMode.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#loadMode') is *"raw"*.

---
Data caching allows the **CustomStore** to decrease the number of data requests. On the downside, cached data and data in your source may become out of sync. If keeping them synchronized is crucial in your scenario, disable data caching by setting the **cacheRawData** option to **false**. In this case, the **CustomStore** will send a request for data on every call of the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load'), [byKey](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/byKey.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey') and [totalCount](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/totalCount.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#totalCount') functions.

#####See Also#####
- [clearRawDataCache()](/api-reference/30%20Data%20Layer/CustomStore/3%20Methods/clearRawDataCache().md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#clearRawDataCache')