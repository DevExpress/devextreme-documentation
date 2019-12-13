---
id: dxSortable.Options.onRemove
type: function(e)
default: null
EventForAction: dxSortable.remove
---
---
##### shortDescription
A function that is called when a draggable item is removed.

##### param(e): Object
Information about the event that caused the function's execution.

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

##### field(e.fromIndex): Number
The item's original position. If the item is dragged from another widget, the value is **-1**.

##### field(e.itemData): any
The dragged item's data.

##### field(e.itemElement): dxElement
#include draganddrop-ref-itemelementparam

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.toComponent): dxSortable | dxDraggable
The instance of the item's target widget.

##### field(e.toData): any
Custom [data](/api-reference/10%20UI%20Widgets/DraggableBase/1%20Configuration/data.md '{basewidgetpath}/Configuration/#data') associated with the target widget.

##### field(e.toIndex): Number
The position in which the item is placed. If the item is dragged away from the widget, the value is **-1**.

---
<!-- Description goes here -->
