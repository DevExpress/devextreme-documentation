---
type: eventType
---
---
##### shortDescription
Fires after the [value](/api-reference/10%20UI%20Widgets/dxProgressBar/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#value') option value has reached the [max](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/max.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#max') option value.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

---
Instead, you can use the [onComplete](/api-reference/10%20UI%20Widgets/dxProgressBar/1%20Configuration/onComplete.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#onComplete') option to handle the event.

#####See Also#####
#include common-link-handleevents