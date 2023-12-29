---
id: dxNumberBox.Options.onValueChanged
type: function(e)
---
---
##### shortDescription
A function that is executed after the UI component's [value](/api-reference/10%20UI%20Components/dxNumberBox/1%20Configuration/value.md '{basewidgetpath}/Configuration/#value') is changed.

##### param(e): ui/number_box:ValueChangedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam This field is **undefined** if the value is changed programmatically.

##### field(e.previousValue): Object
The UI component's previous value.

##### field(e.value): Object
The UI component's new value.

---
<!-- Description goes here -->