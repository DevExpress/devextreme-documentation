---
type: eventType
---
---
##### shortDescription
Fires before displaying a context menu that is invoked on one of the grid's header or row cells.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.items): array
An array of items to be displayed by the context menu. The item objects must have the fields that are used by the <b>ContextMenu</b> <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxMenu/Default_Item_Template">default item template</a>.

##### field(e.target): string
The name of the grid element on which the context menu is invoked: 'header', 'content' or 'footer'.

##### field(e.targetElement): jQuery
The cell that has been clicked to invoke the context menu.

##### field(e.columnIndex): number
The current index of the column to which the clicked cell belongs. For more information on how this index is calculated, refer to the <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Calculating_the_Column_Index">Calculating the Column Index</a> topic.

##### field(e.column): object
The <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/">settings of the column</a> to which the clicked cell belongs.

##### field(e.rowIndex): number
The <i>visible</i> index of the row to which the clicked cell belongs. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows">group cells</a> are also counted as rows and, thus, have row indexes. For further information about row indexes, see the <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows">Grid Rows</a> topic.

##### field(e.row): dxDataGridRowObject
The settings of the row to which the clicked cell belongs.

---
Instead, you can use the [onContextMenuPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onContextMenuPreparing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onContextMenuPreparing') option to handle the event.

Handle this event to change the set of items in a context menu before it is displayed.

#####See Also#####
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')