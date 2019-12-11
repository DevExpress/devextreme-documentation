---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when a bar's tooltip appears.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.target): object
Information on the bar being pressed or hovered over with the mouse pointer. Contains the **index** field.

---
The tooltip appears when a user hovers the mouse cursor over a bar. 

When a tooltip appears, you can perform specific actions by handling this event. To do this, implement a handling function and assign it to the [onTooltipShown](/api-reference/20%20Data%20Visualization%20Widgets/dxBarGauge/1%20Configuration/onTooltipShown.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/#onTooltipShown') option. When implementing this function, use the object passed to it as its parameter. This object will provide you with the widget instance, its container and the object describing the hovered bar. You can use its **index** field to get the index of the hovered bar.

#####See Also#####
#include common-link-handleevents