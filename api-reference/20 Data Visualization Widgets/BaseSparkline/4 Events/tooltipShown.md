---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when a sparkline tooltip appears.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

---
The sparkline tooltip appears when a user hovers the mouse cursor over it. 

When a tooltip appears, you can perform specific actions by handling this event. To do this, implement a handling function and assign it to the *onTooltipShown** option. When implementing this function, use the object passed to it as its parameter. This object will provide you with the widget instance and its container.

#####See Also#####
#include common-link-handleevents