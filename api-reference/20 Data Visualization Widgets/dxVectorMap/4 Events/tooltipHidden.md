---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when a tooltip of an area or marker becomes hidden.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.target): MapLayerElement
The layer element whose tooltip is hidden; described in the [Layer Element](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/') section.

---
The tooltip becomes invisible when a user hovers the mouse cursor over another marker/area or moves it outside the widget.

When a tooltip is made hidden, you can perform specific actions by handling this event. To do this, implement a handling function and assign it to the [onTooltipHidden](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/onTooltipHidden.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onTooltipHidden') option. When implementing this function, use the object passed to it as its parameter. Among the fields of this object, you can find the area or marker whose tooltip becomes hidden.

#####See Also#####
#include common-link-handleevents