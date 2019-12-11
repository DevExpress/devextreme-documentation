---
type: event
---
---
##### shortDescription
Fires when the hover state of a cell is changed.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.eventType): string
Identifies whether the cell has been hovered over or hovered out. This field equals either <i>"mouseover"</i> or <i>"mouseout"</i>.

##### field(e.data): object
The object of the data source presented by the row to which the current cell belongs.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in a <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource">data source</a>, the whole data object is considered the key.

##### field(e.value): any
The value of the current cell as it is specified in the data source.

##### field(e.text): string
The value of the current cell in a string format. Use this field to get the value with an applied <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format">format</a>.

##### field(e.displayValue): string
The value displayed by the current cell. Differs from the <b>value</b> field only when the column to which the current cell belongs uses <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/">lookup</a>.

##### field(e.columnIndex): number
The index of the column to which the current cell belongs. For more information on how this index is calculated, refer to the <a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Columns/Calculating_the_Column_Index">Calculating the Column Index</a> topic.

##### field(e.rowIndex): number
The index of the row to which the current cell belongs. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that <a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Group_Rows">group cells</a> are also counted as rows and, thus, have row indexes. For further information about row indexes, see the <a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Rows">Grid Rows</a> topic.

##### field(e.column): object
The <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/">settings of the column</a> to which the current cell belongs.

##### field(e.rowType): string
The type of the row to which the current cell belongs. This field equals <i>'data'</i> for <a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Rows">ordinary rows</a> or <i>'group'</i> for <a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Group_Rows">group rows</a>. Use this field to distinguish rows by type.

##### field(e.cellElement): jQuery
The element of the hovered cell.

##### field(e.row): dxDataGridRowObject
The settings of the row to which the cell belongs.

---
Instead, you can use the [onCellHoverChanged](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onCellHoverChanged.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onCellHoverChanged') option to handle the event.

When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the cell whose hover state has been changed. For example, to identify whether a cell has been hovered over or hovered out, check the value of the **eventType** field.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')