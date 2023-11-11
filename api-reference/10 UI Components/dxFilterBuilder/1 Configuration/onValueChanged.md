---
id: dxFilterBuilder.Options.onValueChanged
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after the UI component's [value](/api-reference/10%20UI%20Components/dxFilterBuilder/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/#value') is changed.

##### param(e): ui/filter_builder:ValueChangedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's [instance](/api-reference/10%20UI%20Components/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Methods/#instance').

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.previousValue): Object
The UI component's previous value.

##### field(e.value): Object
The UI component's new value.

---
