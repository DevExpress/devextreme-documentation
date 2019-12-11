---
EventForAction: ..\4 Events\selectAllValueChanged.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [selectAllValueChanged](/api-reference/10%20UI%20Widgets/dxTagBox/4%20Events/selectAllValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Events/#selectAllValueChanged') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.value): Boolean
The "Select All" check box's state.

---
Assign a function to perform a custom action when the select all check box value is changed.

Note that this event fires only if the [showSelectionControls](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/showSelectionControls.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#showSelectionControls') option is set to **true**.