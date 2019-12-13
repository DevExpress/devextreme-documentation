---
id: dxLookup.Options.onPullRefresh
type: function(e)
default: null
EventForAction: dxLookup.pullRefresh
---
---
##### shortDescription
A function that is executed when the "pull to refresh" gesture is performed on the drop-down item list. Supported in mobile themes only.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
