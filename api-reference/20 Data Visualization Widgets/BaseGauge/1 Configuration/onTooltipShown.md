---
EventForAction: ..\4 Events\tooltipShown.md
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A handler for the **tooltipShown** event.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget instance.

##### field(e.element): object
The widget's container.

##### field(e.target): object
The object containing the hovered indicator's index.

---
The tooltip appears when a user hovers the mouse cursor over an indicator. 

When a tooltip appears, you can perform specific actions by handling the **tooltipShown** event. To do this, implement a handling function and assign it to this option. When implementing this function, use the object passed to it as its parameter. This object will provide you with the widget instance, its container and the object describing the hovered indicator. You can use its **index** field to get the index of the hovered **subvalue** indicator (the index of the main value indicator is *undefined*).