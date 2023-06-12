---
id: dxLookup.Options.onScroll
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed on each scroll gesture performed on the drop-down item list.

##### param(e): Object
Information about the event.

##### field(e.component): dxLookup
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.reachedBottom): Boolean
Indicates whether the container's bottom boundary is reached.

##### field(e.reachedLeft): Boolean
Indicates whether the container's left boundary is reached.

##### field(e.reachedRight): Boolean
Indicates whether the container's right boundary is reached.

##### field(e.reachedTop): Boolean
Indicates whether the container's top boundary is reached.

##### field(e.scrollOffset): Object
The current scroll offset in the following format { top: topOffset, left: leftOffset }.

---
