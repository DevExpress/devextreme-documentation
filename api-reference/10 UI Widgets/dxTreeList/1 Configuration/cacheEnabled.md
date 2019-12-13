---
##### merge

---
When this option is set to **true**, data loaded once is saved in cache. Then, the widget takes data from this cache when performing such operations as sorting, grouping, paging, etc. Caching is helpful when the data source takes significant time to load, but consider disabling it for frequently changing data sources. 

To update data in cache, call the [refresh()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/refresh().md '{basewidgetpath}/Methods/#refresh') method of the widget or the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method of the **DataSource**.

#####See Also#####
- [Data Caching](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/045%20Data%20Caching.md '/Documentation/Guide/Widgets/TreeList/Data_Binding/Data_Caching/')
- [getDataSource()](/api-reference/10%20UI%20Widgets/DataHelperMixin/3%20Methods/getDataSource().md '{basewidgetpath}/Methods/#getDataSource')