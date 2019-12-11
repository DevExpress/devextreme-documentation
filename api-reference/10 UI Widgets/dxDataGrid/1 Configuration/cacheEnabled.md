---
default: true
type: Boolean
---
---
##### shortDescription
Specifies whether or not to enable data caching.

---
When this option is enabled, data loaded once is saved to the cache, then the grid uses this cache when performing such operations as sorting, grouping, paging, etc. Caching is helpful when the data source is very large and takes significant time to load. 

To force a cache update, use the [refresh()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/refresh().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#refresh') method or [reload](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') the dataSource.

Consider disabling this feature if your grid displays current data and you need to always keep the grid up to date.

[note]If you fetch data from a server, some operations on the data can be executed [remotely](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/'), while others - locally. If you perform basic operations (sorting, filtering and paging) remotely and advanced operations (grouping and summary calculation) locally, certain actions will force **DataGrid** to query the server for data repeatedly despite caching being enabled. For example, the advanced operations demand data to be reloaded in full from the server to provide correct results.