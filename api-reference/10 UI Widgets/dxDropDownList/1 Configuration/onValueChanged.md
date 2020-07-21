---
id: dxDropDownList.Options.onValueChanged
type: function(e)
default: null
EventForAction: dxDropDownList.valueChanged
---
---
##### shortDescription
A function that is executed after the widget's [value](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/value.md '{basewidgetpath}/Configuration/#value') is changed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam This field is **undefined** if the value is changed programmatically.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.previousValue): Object
The widget's previous value.

##### field(e.value): Object
The widget's new value.

---
