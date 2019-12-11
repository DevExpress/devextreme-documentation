---
type: eventType
---
---
##### shortDescription
Fires before displaying a context menu that is invoked on one of the pivot grid's header or row cells.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.items): array
An array of items to be displayed by the context menu. The item objects must have the fields that are used by the <b>ContextMenu</b> <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template">default item template</a>.

##### field(e.area): string
The clicked <a href="/Documentation/16_2/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area">area</a> type.

##### field(e.cell): PivotGridCell
The cell that has been clicked to invoke the context menu.<br />
<b>NOTE: </b>Unavailable for fields in the <a href="/Documentation/16_2/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel">field panel</a>.

##### field(e.cellElement): jQuery
The clicked cell's container.<br />
<b>NOTE: </b>Unavailable for fields in the <a href="/Documentation/16_2/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel">field panel</a>.

##### field(e.columnIndex): number
The index of the column to which the clicked cell belongs.<br />
<b>NOTE: </b>Unavailable for fields in the <a href="/Documentation/16_2/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel">field panel</a>.

##### field(e.rowIndex): number
The index of the row to which the clicked cell belongs.<br />
<b>NOTE: </b>Unavailable for fields in the <a href="/Documentation/16_2/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel">field panel</a>.

##### field(e.dataFields): array
Fields in the 'data' area.

##### field(e.rowFields): array
Fields in the 'row' area.

##### field(e.columnFields): array
Fields in the 'column' area.

##### field(e.field): object
Options of the clicked field.<br />
<b>NOTE: </b>Available for fields in the <a href="/Documentation/16_2/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel">field panel</a> only.

---
Instead, you can use the [onContextMenuPreparing](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/onContextMenuPreparing.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#onContextMenuPreparing') option to handle the event.

Handle this event to change the set of items in a context menu before it is displayed.

#####See Also#####
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')