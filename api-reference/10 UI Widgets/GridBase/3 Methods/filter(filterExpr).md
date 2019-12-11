---
##### shortDescription
Applies a filter to the widget's data source.

##### param(filterExpr): any
A [filter expression](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering').

---
Pass an array with the following members to this method.

1. The data source field by which data items are filtered.
2. The comparison operator. The following operators are available: "=", "<>", ">", ">=", "<", "<=", "startswith", "endswith", "contains", "notcontains".
3. The value with which data source field values should be compared.

This method applies a filter before the [filter row](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterRow '{basewidgetpath}/Configuration/filterRow/'), [search panel](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/searchPanel '{basewidgetpath}/Configuration/searchPanel/'), or [header filter](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/headerFilter '{basewidgetpath}/Configuration/headerFilter/') does. To clear all filters applied both from code and the UI, call the [clearFilter()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/clearFilter().md '{basewidgetpath}/Methods/#clearFilter') method.

#####See Also#####
#include common-link-callmethods
- [getCombinedFilter()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/getCombinedFilter().md '{basewidgetpath}/Methods/#getCombinedFilter')