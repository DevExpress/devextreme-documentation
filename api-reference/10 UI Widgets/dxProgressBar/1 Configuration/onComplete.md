---
EventForAction: ..\4 Events\complete.md
default: null
type: function
---
---
##### shortDescription
A handler for the [complete](/api-reference/10%20UI%20Widgets/dxProgressBar/4%20Events/complete.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Events/#complete') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

---
Assign a function to perform a custom action when the [value](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#value') option value reaches the [max](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/max.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#max') option value.