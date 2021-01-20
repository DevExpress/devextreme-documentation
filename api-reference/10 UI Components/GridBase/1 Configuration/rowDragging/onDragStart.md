---
id: GridBase.Options.rowDragging.onDragStart
type: function(e)
---
---
##### shortDescription
A function that is called when the drag gesture is initialized.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel the gesture.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fromData): any
Custom [data](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/rowDragging/data.md '{basewidgetpath}/Configuration/rowDragging/#data') associated with the source UI component.

##### field(e.fromIndex): Number
The row's original position. If the row is dragged from another UI component, the value is **-1**.

##### field(e.itemData): any
The data object of the row being dragged.

##### field(e.itemElement): dxElement
#include draganddrop-ref-itemelementparam

---
<!-- Description goes here -->
