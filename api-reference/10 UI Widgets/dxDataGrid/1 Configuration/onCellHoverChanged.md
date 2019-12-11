---
EventForAction: ..\4 Events\cellHoverChanged.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [cellHoverChanged](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/cellHoverChanged.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#cellHoverChanged') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.eventType): String
Identifies whether the cell has been hovered over or hovered out. This field equals either *"mouseover"* or *"mouseout"*.

##### field(e.data): Object
The object of the data source presented by the row to which the current cell belongs.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in a [data source](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource'), the whole data object is considered the key.

##### field(e.value): any
The value of the current cell as it is specified in the data source.

##### field(e.text): String
The value of the current cell in a string format. Use this field to get the value with an applied [format](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/format.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format').

##### field(e.displayValue): String
The value displayed by the current cell. Differs from the **value** field only when the column to which the current cell belongs uses [lookup](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/lookup '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/').

##### field(e.columnIndex): Number
The index of the column to which the current cell belongs. For more information on how this index is calculated, refer to the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.

##### field(e.rowIndex): Number
The *visible* index of the row to which the current cell belongs. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that group cells are also counted as rows and, thus, have row indexes. For further information about row indexes, see the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.

##### field(e.column): Object
The [settings of the column](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') to which the current cell belongs.

##### field(e.rowType): String
The type of the row to which the current cell belongs. This field equals *'data'* for data rows or *'group'* for group rows. Use this field to distinguish rows by type.

##### field(e.cellElement): jQuery
The element of the hovered cell.

##### field(e.row): dxDataGridRowObject
The settings of the row to which the cell belongs.

---
The **cellHoverChanged** event fires when the hover state of a grid cell is changed. When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the cell whose hover state has been changed. For example, to identify whether a cell has been hovered over or hovered out, check the value of the **eventType** field.