---
id: GridBase.clearFilter(filterName)
---
---
##### shortDescription
Clears all row filters of a specific type.

##### param(filterName): String
The filter type.

---
The method's parameter specifies what type of filter should be cleared. This parameter can have one of the following values:

- *"row"*       
Clears the [filter row](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/1%20Filter%20Row.md '/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Filter_Row').
- *"header"*        
Clears the [header filter](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/2%20Header%20Filter.md '/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Header_Filter').
- *"filterValue"*       
Clears the [filter builder](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/4%20Filter%20Panel%20with%20Filter%20Builder.md '/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Filter_Panel_with_Filter_Builder') and the [synchronized filtering UI elements](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterSyncEnabled.md '{basewidgetpath}/Configuration/#filterSyncEnabled').
- *"search"*        
Clears the [search panel](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/3%20Search%20Panel.md '/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Search_Panel').
- *"dataSource"*        
Clears the data source filter defined [in the configuration](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') or applied by the [filter(filterExpr)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/filter(filterExpr).md '{basewidgetpath}/Methods/#filterfilterExpr') method.

#####See Also#####
#include common-link-callmethods
- [clearFilter()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/clearFilter().md '{basewidgetpath}/Methods/#clearFilter')