---
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
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.value): Object
The widget's new value.

##### field(e.previousValue): Object
The widget's previous value.

---
Main article: [onValueChanged](/api-reference/10%20UI%20Widgets/dxFilterBuilder/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#onValueChanged')

#####See Also#####
#include common-link-handleevents