---
id: dxDataGrid.Options.onFocusedCellChanged
type: function(e)
default: null
EventForAction: dxDataGrid.focusedCellChanged
---
---
##### shortDescription
A function that is executed after the focused cell changes.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cellElement): dxElement
#include common-ref-elementparam with { element: "focused cell" }

##### field(e.column): dxDataGridColumn
The column's properties.

##### field(e.columnIndex): Number
The index of the cell's column.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.row): dxDataGridRowObject
The row's properties.

##### field(e.rowIndex): Number
The index of the cell's row.

---
#####See Also#####
- [focusedRowIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#focusedRowIndex') | [focusedRowKey](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowKey.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#focusedRowKey')
- [focusedColumnIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedColumnIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#focusedColumnIndex')