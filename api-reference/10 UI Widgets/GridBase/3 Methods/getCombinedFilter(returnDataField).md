---
id: GridBase.getCombinedFilter(returnDataField)
---
---
##### shortDescription
Gets the total filter that combines all the filters applied.

##### return: any
A [filter expression](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering').

##### param(returnDataField): Boolean
Specifies whether the total filter should contain data fields instead of [getters](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters').

---
Use this method to get the total filter. This filter combines filters applied using [filtering UI elements](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching '/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/') and the [filter(filterExpr)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/filter(filterExpr).md '{basewidgetpath}/Methods/#filterfilterExpr') method.

#####See Also#####
#include common-link-callmethods
- [getCombinedFilter()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/getCombinedFilter().md '{basewidgetpath}/Methods/#getCombinedFilter')