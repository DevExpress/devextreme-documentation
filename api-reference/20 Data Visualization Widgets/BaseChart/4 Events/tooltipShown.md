---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when a point's tooltip appears.

##### param(e): object
Information about the event.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): object
The widget's container.

##### field(e.target): Point
The series point whose tooltip appears.

---
The point's tooltip appears when a user hovers the mouse cursor over the point. In addition, you can show a tooltip in code, using the **showTooltip()** method of the chart or point.

When a tooltip appears, you can perform specific actions by handling the **tooltipShown** event. To do this, implement a handling function and assign it to the **onTooltipShown** option. When implementing this function, use the object passed to it as its parameter. Among the fields of this object, you can find the series point whose tooltip appears.

#####See Also#####
#include common-link-handleevents