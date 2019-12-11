---
EventForAction: ..\4 Events\tooltipShown.md
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A handler for the **tooltipShown** event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget instance.

##### field(e.element): Object
The widget's container.

##### field(e.target): Object
The object containing the hovered bar's index.

---
The tooltip appears when a user hovers the mouse cursor over a bar. 

When a tooltip appears, you can perform specific actions by handling the **tooltipShown** event. To do this, implement a handling function and assign it to this option. When implementing this function, use the object passed to it as its parameter. This object will provide you with the widget instance, its container and the object describing the hovered bar. You can use its **index** field to get the index of the hovered bar.