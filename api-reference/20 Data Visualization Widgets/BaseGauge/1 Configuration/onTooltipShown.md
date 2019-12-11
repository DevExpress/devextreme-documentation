---
EventForAction: ..\4 Events\tooltipShown.md
default: null
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A handler for the **tooltipShown** event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): Object
Information on the (sub)value indicator being pressed or hovered over with the mouse pointer. Contains the **type** (*"value-indicator"* or *"subvalue-indicator"*) and **index** (**undefined** for value indicators) fields.

---
The tooltip appears when a user hovers the mouse cursor over an indicator. 

When a tooltip appears, you can perform specific actions by handling the **tooltipShown** event. To do this, implement a handling function and assign it to this option. When implementing this function, use the object passed to it as its parameter. This object will provide you with the widget instance, its container and the object describing the hovered indicator. You can use its **index** field to get the index of the hovered **subvalue** indicator (the index of the main value indicator is **undefined**).