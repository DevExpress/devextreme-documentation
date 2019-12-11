---
##### shortDescription
Gets the total filter that combines all the filters applied.

##### return: any
A [filter expression](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering').

---
Use this method to get the total filter, which combines filters applied using the [filter(filterExpr)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/filter(filterExpr).md '{basewidgetpath}/Methods/#filterfilterExpr') method, [filter row](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterRow '{basewidgetpath}/Configuration/filterRow/'), [header filter](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/headerFilter '{basewidgetpath}/Configuration/headerFilter/') and the [search panel](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/searchPanel '{basewidgetpath}/Configuration/searchPanel/'). Note that the total filter contains [getters](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters'). To get the total filter with data fields, call the [getCombinedFilter(returnDataField)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/getCombinedFilter(returnDataField).md '{basewidgetpath}/Methods/#getCombinedFilterreturnDataField') method.

#####See Also#####
#include common-link-callmethods