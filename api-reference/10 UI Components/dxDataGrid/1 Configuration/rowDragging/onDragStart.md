---
id: dxDataGrid.Options.rowDragging.onDragStart
type: function(e)
---
---
##### shortDescription
A function that is called when a drag gesture is initialized.

##### param(e): ui/data_grid:RowDraggingStartEvent
Information about the event.

##### field(e.cancel): Boolean
Set this field to **true** to cancel the drag gesture.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fromData): any
Custom [data](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#data) associated with the source UI component. Works only for element drag and drop between components.

##### field(e.fromIndex): Number
The row's original position. If the row is dragged from another UI component, the value is **-1**.

##### field(e.itemData): any
The row's data before the drag operation.

##### field(e.itemElement): DxElement
#include draganddrop-ref-itemelementparam

---
Use this handler to check whether users can drag a row. Set **e.cancel** to **true** to prevent the drag gesture. Use **e.itemData** to check the row's data.