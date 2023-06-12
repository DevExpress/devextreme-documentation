---
id: dxDataGrid.Options.onCellDblClick
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a cell is double-clicked or double-tapped. Executed before [onRowDblClick](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowDblClick.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowDblClick').

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cellElement): DxElement
#include common-ref-elementparam with { element: "cell" }

##### field(e.column): dxDataGridColumn
The column's configuration.

##### field(e.columnIndex): Number
The index of the column the cell belongs to. For details on indexes, see the [Column and Row Indexes](/concepts/05%20UI%20Components/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_and_Row_Indexes/') topic.

##### field(e.component): dxDataGrid
The UI component's instance.

##### field(e.data): Object
The data of the row the cell belongs to. Available if the **rowType** is *"data"*, *"detail"*, or *"detailAdaptive"*.

##### field(e.displayValue): any
The value displayed in the cell. Available if the **rowType** is *"data"* or *"group"*.      
Differs from the **value** field only when the cell belongs to a [lookup](/api-reference/_hidden/GridBaseColumn/lookup '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/lookup/') column.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.key): any
The row's [key](/api-reference/10%20UI%20Components/dxDataGrid/6%20Row/key.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Row/#key') or a group row's [key](/concepts/05%20UI%20Components/DataGrid/45%20Grouping/20%20API/05%20Group%20Index%20and%20Key.md '/Documentation/Guide/UI_Components/DataGrid/Grouping/#API/Group_Index_and_Key'). Available if the **rowType** is *"data"*, *"detail"*, *"detailAdaptive"*, or *"group"*.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.row): dxDataGridRowObject
The row's properties. Available if the **rowType** is *"data"*, *"detail"*, *"detailAdaptive"*, or *"group"*.

##### field(e.rowIndex): Number
The index of the row the cell belongs to.

##### field(e.rowType): String
The row's [type](/api-reference/10%20UI%20Components/dxDataGrid/6%20Row/rowType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Row/#rowType').

##### field(e.text): String
The cell's [formatted](/api-reference/_hidden/dxDataGridColumn/format.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#format') value converted to a string. Available if the **rowType** is *"data"* or *"group"*.

##### field(e.value): any
The cell's raw value. Available if the **rowType** is *"data"* or *"group"*.

---
