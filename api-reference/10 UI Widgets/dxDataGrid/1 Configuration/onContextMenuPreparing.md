---
EventForAction: ..\4 Events\contextMenuPreparing.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **contextMenuPreparing** event.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.items): array
An array of items to be displayed by the context menu. The item objects must have the fields that are used by the <b>ContextMenu</b> <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxMenu/Default_Item_Template">default item template</a>.

##### field(e.target): string
The name of the grid element on which the context menu is invoked: 'headerPanel', 'header', 'content' or 'footer'.

##### field(e.targetElement): jQuery
The cell that has been clicked to invoke the context menu.

##### field(e.columnIndex): number
The current index of the column to which the clicked cell belongs. For more information on how this index is calculated, refer to the <a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Columns/Calculating_the_Column_Index">Calculating the Column Index</a> topic.

##### field(e.column): object
The <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/">settings of the column</a> to which the clicked cell belongs.

##### field(e.rowIndex): number
The <i>visible</i> index of the row to which the clicked cell belongs. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that <a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Group_Rows">group cells</a> are also counted as rows and, thus, have row indexes. For further information about row indexes, see the <a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Rows">Grid Rows</a> topic.

##### field(e.row): dxDataGridRowObject
The settings of the row to which the clicked cell belongs.

---
Assign a function to perform a custom action before a context menu is displayed in the grid. For instance, you can change the set of items in the menu.