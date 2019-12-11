---
EventForAction: ..\4 Events\tooltipHidden.md
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A handler for the **tooltipHidden** event.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget instance.

##### field(e.element): object
The widget's container.

---
The sparkline's tooltip becomes invisible when a user moves the mouse cursor outside of the widget.

When a tooltip is made hidden, you can perform specific actions by handling the **tooltipHidden** event. To do this, implement a handling function and assign it to this option. When implementing a handling function, use the object passed to it as its parameter. This object will provide you with the widget instance and its container.