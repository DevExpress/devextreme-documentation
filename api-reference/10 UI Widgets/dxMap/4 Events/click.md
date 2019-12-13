---
id: dxMap.click
type: eventType
---
---
##### shortDescription
Raised when any location on the map is clicked.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution (if a static google provider is used). Deprecated in favor of the **event** field.

##### field(e.location): Object
The clicked point's location on the map (if the "google" or "bing" provider is used).

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
Main article: [onClick](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onClick')

#####See Also#####
#include common-link-handleevents