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

##### field(e.target): Point
The series point whose tooltip becomes hidden.

---
The point's tooltip becomes invisible when a user hovers the mouse cursor over another series point. In addition, you can hide a tooltip in code, using the **hideTooltip()** method of the chart or point.

When a tooltip is made hidden, you can perform specific actions by handling the **tooltipHidden** event. To do this, implement a handling function and assign it to the **onTooltipHidden** option. When implementing this function, use the object passed to it as its parameter. Among the fields of this object, you can find the series point whose tooltip becomes hidden.