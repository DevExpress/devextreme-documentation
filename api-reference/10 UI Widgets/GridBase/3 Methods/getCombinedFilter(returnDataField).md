---
##### shortDescription
Returns the total filter that combines all the filters applied.

##### param(returnDataField): Boolean
Specifies whether the total filter should contain data fields instead of [getters](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters').

##### return: any
A [filter expression](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering').

---
Use this method to get the total filter, which combines filters applied using the [filter(filterExpr)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/filter(filterExpr).md '{basewidgetpath}/Methods/#filterfilterExpr') method, [filter row](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterRow '{basewidgetpath}/Configuration/filterRow/'), [header filter](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/headerFilter '{basewidgetpath}/Configuration/headerFilter/') and the [search panel](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/searchPanel '{basewidgetpath}/Configuration/searchPanel/').

#####See Also#####
#include common-link-callmethods
- [getCombinedFilter()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/getCombinedFilter().md '{basewidgetpath}/Methods/#getCombinedFilter')