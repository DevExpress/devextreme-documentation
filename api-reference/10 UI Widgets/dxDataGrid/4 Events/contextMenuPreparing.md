---
type: eventType
---
---
##### shortDescription
Fires before displaying a context menu that is invoked on one of the grid's header or row cells.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.items): array
An array of items to be displayed by the context menu. The item objects must have the fields that are used by the **ContextMenu** [default item template](/api-reference/10%20UI%20Widgets/dxMenu/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxMenu/Default_Item_Template').

##### field(e.target): string
The name of the grid element on which the context menu is invoked: 'header', 'content' or 'footer'.

##### field(e.targetElement): jQuery
The cell that has been clicked to invoke the context menu.

##### field(e.columnIndex): number
The current index of the column to which the clicked cell belongs. For more information on how this index is calculated, refer to the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.

##### field(e.column): object
The [settings of the column](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') to which the clicked cell belongs.

##### field(e.rowIndex): number
The *visible* index of the row to which the clicked cell belongs. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that group cells are also counted as rows and, thus, have row indexes. For further information about row indexes, see the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.

##### field(e.row): dxDataGridRowObject
The settings of the row to which the clicked cell belongs.

---
Instead, you can use the [onContextMenuPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onContextMenuPreparing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onContextMenuPreparing') option to handle the event.

Handle this event to change the set of items in a context menu before it is displayed.

#####See Also#####
#include common-link-handleevents