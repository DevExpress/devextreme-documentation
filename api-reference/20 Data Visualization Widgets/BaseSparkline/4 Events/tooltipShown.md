---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when a sparkline tooltip appears.

##### param(e): object
Information about the event.

##### field(e.component): object
The [widget instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): object
The widget's container.

---
The sparkline tooltip appears when a user hovers the mouse cursor over it. 

When a tooltip appears, you can perform specific actions by handling this event. To do this, implement a handling function and assign it to the *onTooltipShown** option. When implementing this function, use the object passed to it as its parameter. This object will provide you with the widget instance and its container.

#####See Also#####
#include common-link-handleevents