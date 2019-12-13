---
id: GridBase.filter(filterExpr)
---
---
##### shortDescription
Applies a filter to the widget's [data source](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource').

##### param(filterExpr): any
A [filter expression](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering').

---
Pass an array with the following members to this method:

1. The data source field by which data items are filtered.
2. The comparison operator. The following operators are available: "=", "<>", ">", ">=", "<", "<=", "startswith", "endswith", "contains", "notcontains".
3. The value with which data source field values should be compared.

The filter passed to this method is not reflected in [any of the filtering UI elements](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching '/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/') and is applied before these elements' filters. To clear all filters applied in code and the UI, call the [clearFilter()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/clearFilter().md '{basewidgetpath}/Methods/#clearFilter') method.

#####See Also#####
#include common-link-callmethods
- [getCombinedFilter()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/getCombinedFilter().md '{basewidgetpath}/Methods/#getCombinedFilter')
- [filterValue](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterValue.md '{basewidgetpath}/Configuration/#filterValue')