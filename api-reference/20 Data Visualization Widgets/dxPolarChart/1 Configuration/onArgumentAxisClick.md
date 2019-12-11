---
EventForAction: ..\4 Events\argumentAxisClick.md
default: null
type: function(e) | String
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [argumentAxisClick](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/4%20Events/argumentAxisClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Events/#argumentAxisClick') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/Types/#Event) when you use jQuery.

##### field(e.argument): Date|Number|String
The clicked label's value.

---
When implementing a handling function, use the object passed to it as the parameter. You can find the value of the clicked label among fields of this object.

Alternatively, you can navigate to a specific URL when the **argumentAxisClick** event fires. For this purpose, assign this URL to the **onArgumentAxisClick** option.