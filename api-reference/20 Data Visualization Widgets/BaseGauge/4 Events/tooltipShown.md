---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when an indicator's tooltip appears.

##### param(e): object
Information about the event.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): object
The widget's container.

##### field(e.target): object
The object containing the hovered indicator's index.

---
The tooltip appears when a user hovers the mouse cursor over an indicator. 

When a tooltip appears, you can perform specific actions by handling this event. To do this, implement a handling function and assign it to the **onTooltipShown** option. When implementing this function, use the object passed to it as its parameter. This object will provide you with the widget instance, its container and the object describing the hovered indicator. You can use its **index** field to get the index of the hovered **subvalue** indicator (the index of the main value indicator is **undefined**).

#####See Also#####
#include common-link-handleevents