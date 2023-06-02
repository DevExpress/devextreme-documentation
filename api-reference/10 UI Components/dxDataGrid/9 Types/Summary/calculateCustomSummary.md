---
uid: ui/data_grid:Summary.calculateCustomSummary
type: function(options)
---
---
##### shortDescription
Specifies a custom aggregate function. This function is called for summary items whose [summaryType](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#summaryType') is *"custom"*.

##### param(options): Object
Summary information.

##### field(options.component): dxDataGrid
The UI component's instance.

##### field(options.groupIndex): Number
A zero-based group level. Available only when calculating group summary items.

##### field(options.name): String
The summary item's [name](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/name.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#name').

##### field(options.summaryProcess): String
Indicates the stage of the summary item calculation; equals *"start"*, *"calculate"* or *"finalize"*.

##### field(options.totalValue): any
The resulting summary item's value.

##### field(options.value): any
A column value used to calculate the summary. If you need an entire data object in this field, do not specify the summary item's [column](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/column.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#column') property. To display the summary in this case, use the [showInColumn](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/showInColumn.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#showInColumn') property instead.

---
