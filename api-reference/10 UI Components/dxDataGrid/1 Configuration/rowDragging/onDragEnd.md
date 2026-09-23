---
id: dxDataGrid.Options.rowDragging.onDragEnd
type: function(e)
---
---
##### shortDescription
A function that is called when the drag gesture is finished.

##### param(e): ui/data_grid:RowDraggingEndEvent
Information about the event.

##### field(e.cancel): Boolean
Set this field to **true** to cancel the drag gesture.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.dropInsideItem): Boolean
Indicates if the dragged row is dropped inside another row. Available only for the TreeList UI component.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fromComponent): Sortable | Draggable
The instance of the row's source UI component. Works only for element drag and drop between components.

##### field(e.fromData): any
Custom [data](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#data) associated with the source UI component. Works only for element drag and drop between components.

##### field(e.fromIndex): Number
The row's original position. If the row is dragged from another UI component, the value is **-1**.

##### field(e.itemData): any
The row's data before the drag operation.

##### field(e.itemElement): DxElement
#include draganddrop-ref-itemelementparam

##### field(e.toComponent): Sortable | Draggable
The instance of the row's target UI component. Works only for element drag and drop between components.

##### field(e.toData): any
Custom [data](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#data) associated with the target UI component. Works only for element drag and drop between components.

##### field(e.toIndex): Number
The position in which a row is placed. If the row is dragged away from the UI component, the value is **-1**.

---
Check the result of a drag gesture in this handler. Set **e.cancel** to **true** to cancel the gesture. To update the data source after a drop, implement [onReorder](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#onReorder) for row reordering or [onAdd](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#onAdd) and [onRemove](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#onRemove) for transfers between components.