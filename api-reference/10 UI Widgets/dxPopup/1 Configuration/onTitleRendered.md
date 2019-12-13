---
id: dxPopup.Options.onTitleRendered
type: function(e)
default: null
EventForAction: dxPopup.titleRendered
---
---
##### shortDescription
A function that is executed when the widget's [title](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/title.md '{basewidgetpath}/Configuration/#title') is rendered.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.titleElement): dxElement
#include common-ref-elementparam with { element: "title" }

---
