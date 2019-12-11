---
type: eventType
---
---
##### shortDescription
Fires after the [value](/api-reference/10%20UI%20Widgets/dxProgressBar/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#value') option value has reached the [max](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/max.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#max') option value.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/Types/#Event) when you use jQuery.

---
Instead, you can use the [onComplete](/api-reference/10%20UI%20Widgets/dxProgressBar/1%20Configuration/onComplete.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#onComplete') option to handle the event.

#####See Also#####
#include common-link-handleevents