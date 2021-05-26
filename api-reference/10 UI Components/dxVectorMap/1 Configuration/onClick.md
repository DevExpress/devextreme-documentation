---
id: dxVectorMap.Options.onClick
type: function(e) | String
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when any location on the map is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): dxVectorMap
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
The event that caused the handler execution extended by the **x** and **y** fields. It is a [EventObject](/api-reference/50%20Common/Object%20Structures/EventObject '/Documentation/ApiReference/Common/Object_Structures/EventObject/') or a <a href="http://api.jquery.com/category/events/event-object/" target="_blank">jQuery.Event</a> when you use jQuery.

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.target): MapLayerElement
The [Layer Element](/api-reference/10%20UI%20Components/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/') object (if available).

---
The clicked point's coordinates are available in the **event** field's **x** and **y** properties. The coordinates are calculated relatively to the client area which is the UI component's container. To convert them into map coordinates, use the [convertCoordinates(x,y)](/api-reference/10%20UI%20Components/dxVectorMap/3%20Methods/convertCoordinates(x_y).md '/Documentation/ApiReference/UI_Components/dxVectorMap/Methods/#convertCoordinatesx_y') method.