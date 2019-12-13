---
id: dxDataGrid.cellHoverChanged
type: eventType
---
---
##### shortDescription
Raised after the pointer enters or leaves a cell.

##### param(e): Object
Information about the event.

##### field(e.cellElement): dxElement
#include common-ref-elementparam with { element: "cell" }

##### field(e.column): dxDataGridColumn
This column's [configuration](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/').

##### field(e.columnIndex): Number
The index of the column to which the cell belongs. For details on indexes, see the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The data of the row to which the cell belongs.

##### field(e.displayValue): any
The cell's displayed value. Differs from the **value** field only when the column to which the current cell belongs uses [lookup](/api-reference/_hidden/dxDataGridColumn/lookup '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/').

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.eventType): String
Indicates whether the pointer entered or left the cell. Can be either *"mouseover"* or *"mouseout"*.

##### field(e.key): any
The row's key. If a field providing keys is not specified in the [data source](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource'), the whole data object is considered the key.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.row): dxDataGridRowObject
The row [properties](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/').

##### field(e.rowIndex): Number
The row's index. Refer to [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') for more information.

##### field(e.rowType): String
The row's [type](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType').

##### field(e.text): String
The cell's [formatted](/api-reference/_hidden/GridBaseColumn/format.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format') value converted to a string.

##### field(e.value): any
The cell's raw value.

---
Main article: [onCellHoverChanged](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onCellHoverChanged.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onCellHoverChanged')

#####See Also#####
#include common-link-handleevents