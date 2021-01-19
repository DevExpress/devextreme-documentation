---
id: GridBase.Options.filterSyncEnabled
acceptValues: 'auto'
type: Boolean | String
default: 'auto'
---
---
##### shortDescription
Specifies whether to synchronize the [filter row](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/1%20Filter%20Row.md '/Documentation/Guide/UI_Components/{WidgetName}/Filtering_and_Searching/#Filter_Row'), [header filter](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/2%20Header%20Filter.md '/Documentation/Guide/UI_Components/{WidgetName}/Filtering_and_Searching/#Header_Filter'), and [filter builder](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/4%20Filter%20Panel%20with%20Filter%20Builder.md '/Documentation/Guide/UI_Components/{WidgetName}/Filtering_and_Searching/#Filter_Panel_with_Filter_Builder'). The synchronized filter expression is stored in the [filterValue](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterValue.md '{basewidgetpath}/Configuration/#filterValue') property.

---
Synchronization is enabled if the [filter panel](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterPanel '/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/filterPanel/') is visible. When it is enabled, check that each column that allows filtering has the [dataField](/api-reference/_hidden/GridBaseColumn/dataField.md '{basewidgetpath}/Configuration/columns/#dataField') or [name](/api-reference/_hidden/GridBaseColumn/name.md '{basewidgetpath}/Configuration/columns/#name') property specified.