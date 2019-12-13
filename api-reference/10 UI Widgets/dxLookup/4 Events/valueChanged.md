---
id: dxLookup.valueChanged
type: eventType
---
---
##### shortDescription
Raised after the widget's [value](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#value') is changed.

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
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.previousValue): Object
The widget's previous value.

##### field(e.value): Object
The widget's new value.

---
Main article: [onValueChanged](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#onValueChanged')

#####See Also#####
#include common-link-handleevents