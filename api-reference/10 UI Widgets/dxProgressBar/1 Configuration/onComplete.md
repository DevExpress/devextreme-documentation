---
EventForAction: ..\4 Events\complete.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [complete](/api-reference/10%20UI%20Widgets/dxProgressBar/4%20Events/complete.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Events/#complete') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/Types/#Event) when you use jQuery.

---
Assign a function to perform a custom action when the [value](/api-reference/10%20UI%20Widgets/dxProgressBar/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#value') option value reaches the [max](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/max.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#max') option value.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/ProgressBar/Overview/jQuery/Light/"
}