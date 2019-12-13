---
id: dxDeferRendering.Options.onRendered
type: function(e)
default: null
EventForAction: dxDeferRendering.rendered
---
---
##### shortDescription
A function that is executed when the content is rendered but not yet displayed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
