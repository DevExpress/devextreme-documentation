---
type: eventType
---
---
##### shortDescription
Fires before displaying a context menu that is invoked on one of the pivot grid's header or row cells.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.items): array
An array of items to be displayed by the context menu. The item objects must have the fields that are used by the **ContextMenu** [default item template](/api-reference/10%20UI%20Widgets/dxContextMenu/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template').

##### field(e.area): string
The clicked [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') type.

##### field(e.cell): PivotGridCell
The cell that has been clicked to invoke the context menu.  
**NOTE:** Unavailable for fields in the [field panel](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel').

##### field(e.cellElement): jQuery
The clicked cell's container.   
**NOTE:** Unavailable for fields in the [field panel](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel').

##### field(e.columnIndex): number
The index of the column to which the clicked cell belongs.   
**NOTE:** Unavailable for fields in the [field panel](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel').

##### field(e.rowIndex): number
The index of the row to which the clicked cell belongs.   
**NOTE:** Unavailable for fields in the [field panel](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel').

##### field(e.dataFields): array
Fields in the 'data' area.

##### field(e.rowFields): array
Fields in the 'row' area.

##### field(e.columnFields): array
Fields in the 'column' area.

##### field(e.field): object
Options of the clicked field.   
**NOTE:** Available for fields in the [field panel](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel') only.

---
Instead, you can use the [onContextMenuPreparing](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/onContextMenuPreparing.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#onContextMenuPreparing') option to handle the event.

Handle this event to change the set of items in a context menu before it is displayed.

#####See Also#####
#include common-link-handleevents