---
type: eventType
---
---
##### shortDescription
Fires when a user clicks a grid row.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance').

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
Grid columns. Each column in this array is represented by an object with column settings. The order of columns in this array and columns in the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') array coincides.

##### field(e.rowIndex): number
The *visible* index of the clicked row. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that group rows are also counted and, thus, have row indexes. For further information about row indexes, see the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.

##### field(e.rowType): string
The type of the clicked row. This field equals *'data'* for data rows, *'group'* for group rows or *'detail'* for [detail sections](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/masterDetail '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail'). Use this field to distinguish rows by type.

##### field(e.isSelected): boolean
Indicates whether the clicked row is [selected](/concepts/05%20Widgets/DataGrid/50%20Selection '/Documentation/Guide/Widgets/DataGrid/Selection/').

##### field(e.isExpanded): boolean
Indicates whether or not the group row is expanded. This field is useful if the **rowType** field is *'group'*.

##### field(e.groupIndex): number
The [group index](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/groupIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex') of the clicked row. This field is useful if the **rowType** field is *'group'*.

##### field(e.rowElement): jQuery
The clicked row; provides access to [element-related jQuery operations](https://api.jquery.com/?s=element).

##### field(e.handled): boolean
Indicates if the grid has already handled the row click event.

---
Instead, you can use the [onRowClick](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onRowClick.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowClick') option to handle the event.

When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the clicked row.

[note]If there are any internal grid handlers for the row click, the **rowClick** event fires only after these handlers are executed. In this case, the **handled** field of the handler parameter is set to **true**.

In addition, you can perform certain actions when a user clicks a cell. For this purpose, handle the [cellClick](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/cellClick.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#cellClick') event. Note that the **cellClick** fires before the **rowClick**.

[note] When the clicked row is in the editing state, or switches to the editing state, the **rowClick** event will not fire. Instead, you can use the **cellClick**.

#####See Also#####
#include common-link-handleevents