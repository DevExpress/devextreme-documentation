---
EventForAction: ..\4 Events\rowPrepared.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [rowPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/rowPrepared.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowPrepared') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.data): Object
The object of a data source represented by the prepared row. This field is unavailable if the <b>rowType</b> field is set to <i>"header"</i>, <i>"filter"</i> or <i>"totalFooter"</i>.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in a <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource">data source</a>, the whole data object is considered the key. This field is unavailable if the <b>rowType</b> field is set to <i>"header"</i>, <i>"filter"</i> or <i>"totalFooter"</i>.

##### field(e.values): any
Values of the current row as they exist in the data source.

##### field(e.columns): Array
Grid columns. Each column in this array is represented by an object with column settings. The order of columns in this array and columns in the <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/">columns</a> array coincides.

##### field(e.rowIndex): Number
The <i>visible</i> index of the prepared row. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows">group cells</a> are also counted as rows and, thus, have row indexes. For further information about row indexes, see the <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows">Grid Rows</a> topic.

##### field(e.rowType): String
The type of the prepared row. This field can be set to one of the following values: <i>"data"</i>, <i>"detail"</i>, <i>"group"</i>, <i>"groupFooter"</i>, <i>"header"</i>, <i>"filter"</i> or <i>"totalFooter"</i>. Use this field to distinguish rows by type.

##### field(e.groupIndex): Number
The <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex">group index</a> of the current row. This field is useful if the <b>rowType</b> field is <i>'group'</i>.

##### field(e.isSelected): Boolean
Indicates whether the prepared row is <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Selection/">selected</a>. This field is useful if the <b>rowType</b> field is set to <i>"data"</i>

##### field(e.isExpanded): Boolean
Indicates whether the prepared row is expanded. This field is unavailable if the <b>rowType</b> field is set to <i>"header"</i>, <i>"filter"</i> or <i>"totalFooter"</i>.

##### field(e.rowElement): jQuery
The element of the hovered row.

---
The **rowPrepared** event fires after a row has been rendered. When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the prepared row.