---
id: GridBase.filter(filterExpr)
---
---
##### shortDescription
Applies a filter to the UI component's [data source](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource').

##### param(filterExpr): any
A [filter expression](/concepts/70%20Data%20Binding/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Filtering').

---
Pass an array with the following members to this method:

1. The data source field by which data items are filtered.
2. The comparison operator. The following operators are available: "=", "<>", ">", ">=", "<", "<=", "startswith", "endswith", "contains", "notcontains".
3. The value with which data source field values should be compared.

The filter passed to this method is not reflected in [any of the filtering UI elements](/concepts/05%20UI%20Components/DataGrid/30%20Filtering%20and%20Searching '/Documentation/Guide/UI_Components/{WidgetName}/Filtering_and_Searching/') and is applied before these elements' filters: [filterValue]({basewidgetpath}/Configuration/#filterValue), **columns[]**.[filterValue]({basewidgetpath}/Configuration/columns/#filterValue), and **columns[]**.[filterValues]({basewidgetpath}/Configuration/columns/#filterValues). To clear all filters applied in code and the UI, call the [clearFilter()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/clearFilter().md '{basewidgetpath}/Methods/#clearFilter') method.

#####See Also#####
#include common-link-callmethods
- [getCombinedFilter()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/getCombinedFilter().md '{basewidgetpath}/Methods/#getCombinedFilter')
- [filterValue](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterValue.md '{basewidgetpath}/Configuration/#filterValue')