---
id: dxLookup.Options.onTitleRendered
type: function(e)
default: null
EventForAction: dxLookup.titleRendered
---
---
##### shortDescription
A function that is executed when the drop-down list's title is rendered.

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
#####See Also#####
- [showPopupTitle](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/showPopupTitle.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#showPopupTitle')