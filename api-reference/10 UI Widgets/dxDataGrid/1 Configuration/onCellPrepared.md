---
EventForAction: ..\4 Events\cellPrepared.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [cellPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/cellPrepared.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#cellPrepared') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.data): Object
The object of a data source represented by the row to which the prepared cell belongs. This field is unavailable if the <b>rowType</b> field is set to <i>"header"</i>, <i>"filter"</i> or <i>"totalFooter"</i>.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in a <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource">data source</a>, the whole data object is considered the key. This field is unavailable if the <b>rowType</b> field is set to <i>"header"</i>, <i>"filter"</i> or <i>"totalFooter"</i>.

##### field(e.value): any
The value of the prepared cell as it is specified in the data source.

##### field(e.displayValue): String
The value displayed by the prepared cell. Differs from the <b>value</b> field only when the column to which the prepared cell belongs uses <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/">lookup</a>.

##### field(e.text): String
The value of the current cell in a string format. Use this field to get the value with applied <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format">format</a>.

##### field(e.columnIndex): Number
The index of the column to which the prepared cell belongs. For more information on how this index is calculated, refer to the <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Calculating_the_Column_Index">Calculating the Column Index</a> topic.

##### field(e.column): Object
The <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/">settings of the column</a> to which the prepared cell belongs.

##### field(e.rowIndex): Number
The <i>visible</i> index of the clicked row. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows">group rows</a> are also counted and, thus, have row indexes. For further information about row indexes, see the <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows">Grid Rows</a> topic.

##### field(e.rowType): String
The type of the row to which the prepared cell belongs. This field can be set to one of the following values: <i>"data"</i>, <i>"detail"</i>, <i>"group"</i>, <i>"groupFooter"</i>, <i>"header"</i>, <i>"filter"</i> or <i>"totalFooter"</i>. Use this field to distinguish rows by type.

##### field(e.row): dxDataGridRowObject
The settings of the row to which the cell belongs.

##### field(e.isSelected): Boolean
Indicates whether the prepared row is selected. This field is useful if the <b>rowType</b> field is set to <i>"data"</i>

##### field(e.isExpanded): Boolean
Indicates whether or not the <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows">group cell</a> is expanded.  This field is unavailable if the <b>rowType</b> field is set to <i>"header"</i>, <i>"filter"</i> or <i>"totalFooter"</i>.

##### field(e.cellElement): jQuery
The element of the prepared cell.

---
The **cellPrepared** event fires after a cell has been rendered. When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the prepared cell.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridtemplatescellpreparedtemplate/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>