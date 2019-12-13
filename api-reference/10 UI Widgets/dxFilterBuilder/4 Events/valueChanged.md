---
id: dxFilterBuilder.valueChanged
type: eventType
---
---
##### shortDescription
Raised after the widget's [value](/api-reference/10%20UI%20Widgets/dxFilterBuilder/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#value') is changed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Methods/#instance').

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.previousValue): Object
The widget's previous value.

##### field(e.value): Object
The widget's new value.

---
Main article: [onValueChanged](/api-reference/10%20UI%20Widgets/dxFilterBuilder/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#onValueChanged')

#####See Also#####
#include common-link-handleevents