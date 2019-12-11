---
default: null
type: function(e) | String
---
---
##### shortDescription
A handler for the [click](/api-reference/10%20UI%20Widgets/dxButton/4%20Events/click.md '/Documentation/ApiReference/UI_Widgets/dxButton/Events/#click') event raised for the button representing the given action sheet button.

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
Assign a function to perform a custom action when a button representing an action sheet item is clicked.

To navigate to a specific URL when the **click** event fires for action sheet buttons, assign that URL directly to this option.