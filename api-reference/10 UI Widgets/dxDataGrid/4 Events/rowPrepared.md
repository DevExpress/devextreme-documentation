---
type: event
---
---
##### shortDescription
Fires after a row has been rendered.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.data): object
The object of a data source represented by the prepared row.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in a <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource">data source</a>, the whole data object is considered the key.

##### field(e.values): any
Values of the current row as they exist in the data source.

##### field(e.columns): array
Grid columns. Each column in this array is represented by an object with column settings. The order of columns in this array and columns in the <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/">columns</a> array coincides.

##### field(e.rowIndex): number
The <i>visible</i> index of the prepared row. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that <a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Group_Rows">group cells</a> are also counted as rows and, thus, have row indexes. For further information about row indexes, see the <a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Rows">Grid Rows</a> topic.

##### field(e.rowType): string
The type of the prepared row. This field can be set to one of the following values: <i>"data"</i>, <i>"detail"</i>, <i>"group"</i>, <i>"groupFooter"</i>, <i>"header"</i>, <i>"filter"</i> or <i>"totalFooter"</i>. Use this field to distinguish rows by type.

##### field(e.groupIndex): number
The <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex">group index</a> of the current row. This field is useful if the <b>rowType</b> field is <i>'group'</i>.

##### field(e.isSelected): boolean
Indicates whether the prepared row is <a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Selection/">selected</a>.

##### field(e.isExpanded): boolean
Indicates whether the prepared row is expanded.

##### field(e.rowElement): jQuery
The element of the hovered row.

---
Instead, you can use the [onRowPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onRowPrepared.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowPrepared') option to handle the event.

When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the prepared row.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')