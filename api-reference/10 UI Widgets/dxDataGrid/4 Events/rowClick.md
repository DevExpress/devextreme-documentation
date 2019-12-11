---
type: eventType
---
---
##### shortDescription
Fires when a user clicks a [grid row](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/020%20Grid%20Rows.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows').

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event.

##### field(e.data): object
The object of the data source represented by the clicked row.

##### field(e.key): any
The key value of the clicked row.

##### field(e.values): array
Values of the clicked row as they exist in the data source.

##### field(e.columns): array
Grid columns. Each column in this array is represented by an object with column settings. The order of columns in this array and columns in the <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/">columns</a> array coincides.

##### field(e.rowIndex): number
The <i>visible</i> index of the clicked row. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows">group rows</a> are also counted and, thus, have row indexes. For further information about row indexes, see the <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows">Grid Rows</a> topic.

##### field(e.rowType): string
The type of the clicked row. This field equals <i>'data'</i> for <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows">ordinary rows</a>, <i>'group'</i> for <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows">group rows</a> or <i>'detail'</i> for <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/">detail sections</a>. Use this field to distinguish rows by type.

##### field(e.isSelected): boolean
Indicates whether the clicked row is <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Selection/">selected</a>.

##### field(e.isExpanded): boolean
Indicates whether or not the <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows">group row</a> is expanded. This field is useful if the <b>rowType</b> field is <i>'group'</i>.

##### field(e.groupIndex): number
The <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex">group index</a> of the clicked row. This field is useful if the <b>rowType</b> field is <i>'group'</i>.

##### field(e.rowElement): jQuery
The clicked row; provides access to <a href="http://api.jquery.com/?s=element">element-related jQuery operations</a>.

##### field(e.handled): boolean
Indicates if the grid has already handled the row click event.

---
Instead, you can use the [onRowClick](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onRowClick.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowClick') option to handle the event.

When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the clicked row.

[note]If there are any internal grid handlers for the row click, the **rowClick** event fires only after these handlers are executed. In this case, the **handled** field of the handler parameter is set to *true*.

In addition, you can perform certain actions when a user clicks a cell. For this purpose, handle the [cellClick](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/cellClick.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#cellClick') event. Note that the **cellClick** fires before the **rowClick**.

[note] When the clicked row is in the editing state, or switches to the editing state, the **rowClick** event will not fire. Instead, you can use the **cellClick**.

#####See Also#####
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')