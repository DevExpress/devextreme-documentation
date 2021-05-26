---
id: GridBase.Options.rowDragging.onDragChange
type: function(e)
---
---
##### shortDescription
A function that is called when the dragged row's position is changed.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel the gesture.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.dropInsideItem): Boolean
Indicates if the dragged row is dropped inside another row. Available only for the TreeList UI component.

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fromComponent): dxSortable | dxDraggable
The instance of the row's source UI component.

##### field(e.fromData): any
Custom [data](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/rowDragging/data.md '{basewidgetpath}/Configuration/rowDragging/#data') associated with the source UI component.

##### field(e.fromIndex): Number
The row's original position. If the row is dragged from another UI component, the value is **-1**.

##### field(e.itemData): any
The dragged row's data.

##### field(e.itemElement): DxElement
#include draganddrop-ref-itemelementparam

##### field(e.toComponent): dxSortable | dxDraggable
The instance of the row's target UI component.

##### field(e.toData): any
Custom [data](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/rowDragging/data.md '{basewidgetpath}/Configuration/rowDragging/#data') associated with the target UI component.

##### field(e.toIndex): Number
The position in which the row is placed. If the row is dragged away from the UI component, the value is **-1**.

---
