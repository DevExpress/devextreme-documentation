---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when a tooltip of an area or marker appears.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget's instance.

##### field(e.element): object
The widget's container.

##### field(e.target): object
The area or marker for which a tooltip is displayed.

---
The tooltip appears when a user hovers the mouse cursor over a marker or area. 

When a tooltip appears, you can perform specific actions by handling this event. To do this, implement a handling function and assign it to the [onTooltipShown](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/onTooltipShown.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onTooltipShown') option. When implementing this function, use the object passed to it as its parameter. Among the fields of this object, you can find the area or marker whose tooltip appears.

#####See Also#####
#include common-link-handleevents