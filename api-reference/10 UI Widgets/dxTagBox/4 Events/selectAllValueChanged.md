---
type: eventType
---
---
##### shortDescription
Fires when the select all check box value changes.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.value): boolean
The "Select All" check box's state.

---
Instead, you can use the [onSelectAllValueChanged](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/onSelectAllValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#onSelectAllValueChanged') option to handle the event.

[note]This event fires only if the [showSelectionControls](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/showSelectionControls.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#showSelectionControls') option is set to **true**.

#####See Also#####
#include common-link-handleevents