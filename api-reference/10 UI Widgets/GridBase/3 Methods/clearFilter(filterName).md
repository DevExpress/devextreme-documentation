---
##### shortDescription
Clears all row filters of a specific type.

##### param(filterName): String
The filter type.

---
The method's parameter specifies what type of filter should be cleared. The parameter can have one of the following values:

* 'dataSource' - clears the [dataSource filter](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') (defined in the configuration or applied by the [filter(filterExpr)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/filter(filterExpr).md '{basewidgetpath}/Methods/#filterfilterExpr') method);
* 'search' - clears the [search panel](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/searchPanel '{basewidgetpath}/Configuration/searchPanel/');
* 'header' - clears the [column header filter](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/headerFilter '{basewidgetpath}/Configuration/headerFilter/');
* 'row' - clears the [filter row](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterRow '{basewidgetpath}/Configuration/filterRow/').

#####See Also#####
#include common-link-callmethods