---
id: dxScrollView.Options.onScroll
type: function(e)
---
---
##### shortDescription
A function that is executed on each scroll gesture.

##### param(e): ui/scroll_view:ScrollEvent
Information about the event.

##### field(e.reachedBottom): Boolean
Indicates whether the container's bottom boundary is reached.

##### field(e.reachedLeft): Boolean
Indicates whether the container's left boundary is reached.

##### field(e.reachedRight): Boolean
Indicates whether the container's right boundary is reached.

##### field(e.reachedTop): Boolean
Indicates whether the container's top boundary is reached.

##### field(e.scrollOffset): any
The current scroll offset in the following format: { top: topOffset, left: leftOffset }.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): any
Model data. Available only if Knockout is used.

---
<!-- Description goes here -->