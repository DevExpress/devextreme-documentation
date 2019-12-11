---
EventForAction: ..\4 Events\contextMenuPreparing.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **contextMenuPreparing** event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.items): Array
An array of items to be displayed by the context menu. The item objects must have the fields that are used by the <b>ContextMenu</b> <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template">default item template</a>.

##### field(e.area): String
The clicked <a href="/Documentation/16_2/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area">area</a> type.

##### field(e.cell): PivotGridCell
The cell that has been clicked to invoke the context menu.<br />
<b>NOTE: </b>Unavailable for fields in the <a href="/Documentation/16_2/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel">field panel</a>.

##### field(e.cellElement): jQuery
The clicked cell's container.<br />
<b>NOTE: </b>Unavailable for fields in the <a href="/Documentation/16_2/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel">field panel</a>.

##### field(e.columnIndex): Number
The index of the column to which the clicked cell belongs.<br />
<b>NOTE: </b>Unavailable for fields in the <a href="/Documentation/16_2/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel">field panel</a>.

##### field(e.rowIndex): Number
The index of the row to which the clicked cell belongs.<br />
<b>NOTE: </b>Unavailable for fields in the <a href="/Documentation/16_2/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel">field panel</a>.

##### field(e.dataFields): Array
Fields in the 'data' area.

##### field(e.rowFields): Array
Fields in the 'row' area.

##### field(e.columnFields): Array
Fields in the 'column' area.

##### field(e.field): Object
Options of the clicked field.<br />
<b>NOTE: </b>Available for fields in the <a href="/Documentation/16_2/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel">field panel</a> only.

---
Assign a function to perform a custom action before a context menu is displayed in the grid. For instance, you can change the set of items in the menu.