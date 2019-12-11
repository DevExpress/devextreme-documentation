---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when a tooltip of an area or marker becomes hidden.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget's instance.

##### field(e.element): object
The widget's container.

##### field(e.target): object
The area or marker for which a tooltip was displayed.

---
The tooltip becomes invisible when a user hovers the mouse cursor over another marker/area or moves it outside the widget.

When a tooltip is made hidden, you can perform specific actions by handling this event. To do this, implement a handling function and assign it to the [onTooltipHidden](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/onTooltipHidden.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onTooltipHidden') option. When implementing this function, use the object passed to it as its parameter. Among the fields of this object, you can find the area or marker whose tooltip becomes hidden.

#####See Also#####
#include common-link-handleevents