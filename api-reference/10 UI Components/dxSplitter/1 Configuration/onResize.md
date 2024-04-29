---
id: dxSplitter.Options.onResize
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed each time an item (pane) is resized by one pixel.

##### param(e): ui/splitter:ResizeEvent
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the resize operation.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.handleElement): DxElement
A resize handle element.

---
<!-- Description goes here -->