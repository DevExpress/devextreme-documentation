---
id: Widget.Options.onContentReady
type: function(e)
default: null
EventForAction: Widget.contentReady
---
---
##### shortDescription
A function that is executed when the widget's content is ready and each time the content is changed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only when using Knockout.

---
