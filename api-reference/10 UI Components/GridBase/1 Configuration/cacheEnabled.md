---
id: GridBase.Options.cacheEnabled
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether data should be cached.

---
When this property is set to **true**, data loaded once is saved in cache. Then, the UI component takes data from this cache when performing such operations as sorting, grouping, paging, etc. Caching is helpful when the data source takes significant time to load. But, consider disabling it for frequently changing data sources. 

To update data in cache, call the [refresh()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/refresh().md '{basewidgetpath}/Methods/#refresh') method of the UI component or the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method of the **DataSource**.

[note]If you fetch data from the server, some operations with data can be executed [remotely](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '{basewidgetpath}/Configuration/remoteOperations/'), while others - locally. If you perform basic operations (sorting, filtering, and paging) remotely and advanced operations (grouping and summary calculation) locally, certain user actions will force **DataGrid** to query the server for data repeatedly despite caching being enabled. Particularly, the advanced operations demand data to be reloaded completely  from the server to provide correct results.

#####See Also#####
- [Data Caching](/concepts/05%20UI%20Components/DataGrid/05%20Data%20Binding/35%20Data%20Caching.md '/Documentation/Guide/UI_Components/DataGrid/Data_Binding/Data_Caching/')
- [getDataSource()](/api-reference/10%20UI%20Widgets/DataHelperMixin/3%20Methods/getDataSource().md '{basewidgetpath}/Methods/#getDataSource')