---
id: dxScrollable.Options.onUpdated
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed each time the UI component is updated.

##### param(e): ui/scroll_view/ui.scrollable:ScrollEventInfo
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

---
