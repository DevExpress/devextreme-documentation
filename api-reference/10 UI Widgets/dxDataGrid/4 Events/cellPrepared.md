---
type: eventType
---
---
##### shortDescription
Fires after a cell has been rendered.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.data): object
The object of a data source represented by the row to which the prepared cell belongs.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in a <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource">data source</a>, the whole data object is considered the key.

##### field(e.value): any
The value of the prepared cell as it is specified in the data source.

##### field(e.displayValue): string
The value displayed by the prepared cell. Differs from the <b>value</b> field only when the column to which the prepared cell belongs uses <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/">lookup</a>.

##### field(e.text): string
The value of the prepared cell in a string format. Use this field to get the value with applied <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format">format</a>.

##### field(e.columnIndex): number
The index of the column to which the prepared cell belongs. For more information on how this index is calculated, refer to the <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Calculating_the_Column_Index">Calculating the Column Index</a> topic.

##### field(e.column): object
The <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/">settings of the column</a> to which the prepared cell belongs.

##### field(e.rowIndex): number
The index of the row to which the prepared cell belongs. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows">group cells</a> are also counted as rows and thus have row indexes. For further information about row indexes, see the <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows">Grid Rows</a> topic.

##### field(e.rowType): string
The type of the row to which the prepared cell belongs. This field can be set to one of the following values: <i>"data"</i>, <i>"detail"</i>, <i>"group"</i>, <i>"groupFooter"</i>, <i>"header"</i>, <i>"filter"</i> or <i>"totalFooter"</i>. Use this field to distinguish rows by type.

##### field(e.row): dxDataGridRowObject
The settings of the row to which the cell belongs.

##### field(e.isSelected): boolean
Indicates whether or not the current row is selected.

##### field(e.isExpanded): boolean
Indicates whether or not the <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows">group cell</a> is expanded. This field is useful if the <b>rowType</b> field is <i>'group'</i>.

##### field(e.cellElement): jQuery
The element of the prepared cell.

---
Instead, you can use the [onCellPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onCellPrepared.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onCellPrepared') option to handle the event.

When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the prepared cell.

#####See Also#####
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')