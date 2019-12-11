---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when a sparkline's tooltip becomes hidden.

##### param(e): object
Information about the event.

##### field(e.component): object
The [widget instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): object
The widget's container.

---
The sparkline's tooltip becomes invisible when a user moves the mouse cursor outside of the widget.

When a tooltip is made hidden, you can perform specific actions by handling this event. To do this, implement a handling function and assign it to the **onTooltipHidden** option. When implementing a handling function, use the object passed to it as its parameter. This object will provide you with the widget instance and its container.

#####See Also#####
#include common-link-handleevents