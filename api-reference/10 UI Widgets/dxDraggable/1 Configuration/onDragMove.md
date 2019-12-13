---
id: dxDraggable.Options.onDragMove
type: function(e)
default: null
EventForAction: dxDraggable.dragMove
---
---
##### shortDescription
A function that is called every time a draggable item is moved.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel the gesture.

##### field(e.component): {WidgetName}
The widget that raised the event.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fromComponent): dxSortable | dxDraggable
The instance of the item's source widget.

##### field(e.fromData): any
Custom [data](/api-reference/10%20UI%20Widgets/DraggableBase/1%20Configuration/data.md '{basewidgetpath}/Configuration/#data') associated with the source widget.

##### field(e.itemData): any
The dragged element's data.

##### field(e.itemElement): dxElement
#include draganddrop-ref-itemelementparam

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.toComponent): dxSortable | dxDraggable
The instance of the item's target widget.

##### field(e.toData): any
Custom [data](/api-reference/10%20UI%20Widgets/DraggableBase/1%20Configuration/data.md '{basewidgetpath}/Configuration/#data') associated with the target widget.

---
<!-- Description goes here -->