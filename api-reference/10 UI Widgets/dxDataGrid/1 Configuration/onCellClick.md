---
EventForAction: ..\4 Events\cellClick.md
default: null
type: function(e) | String
---
---
##### shortDescription
A handler for the [cellClick](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/cellClick.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#cellClick') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event.

##### field(e.data): Object
The object of the data source represented by the row to which the clicked cell belongs.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in a [data source](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource'), the whole data object is considered the key.

##### field(e.value): any
The value of the clicked cell as it is specified in a data source.

##### field(e.displayValue): String
The value displayed by the clicked cell. Differs from the **value** field only when the column to which the clicked cell belongs uses [lookup](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/lookup '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/').

##### field(e.text): String
The value of the clicked cell in a string format. Use this field to get the value with applied [format](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/format.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format').

##### field(e.columnIndex): Number
The current index of the column to which the clicked cell belongs. For more information on how this index is calculated, refer to the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.

##### field(e.column): Object
The [settings of the column](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') to which the clicked cell belongs.

##### field(e.rowIndex): Number
The *visible* index of the row to which the clicked cell belongs. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that group cells are also counted as rows and, thus, have row indexes. For further information about row indexes, see the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.

##### field(e.rowType): String
The type of the row to which the clicked cell belongs. This field equals *'data'* for data rows or *'group'* for group rows. Use this field to distinguish rows by type.

##### field(e.cellElement): jQuery
The element of the clicked cell.

##### field(e.row): dxDataGridRowObject
The settings of the row to which the clicked cell belongs.

---
The **cellClick** event fires when a user clicks a grid cell. When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the clicked cell.

Alternatively, you can navigate to a specific URL when the **cellClick** event fires. For this purpose, assign this URL to the **onCellClick** option.

In addition, you can perform some actions when a user clicks a row. For this purpose, handle the [rowClick](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/rowClick.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowClick') event.

[note]**cellClick** fires before **rowClick**.