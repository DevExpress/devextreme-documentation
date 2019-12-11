---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when a user clicks on any place on the map.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution extended by the **x** and **y** fields. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/Types/#Event) when you use jQuery.

##### field(e.target): MapLayerElement
The [Layer Element](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/') object (if available).

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the object that represents the jQuery event extended by the following fields.

* **x**        
Contains the X coordinate of the clicked point.
* **y**        
Contains the Y coordinate of the clicked point.

[note] The coordinates are calculated relatively to the client area, i.e., the widget container. To convert them into map coordinates, use the [convertCoordinates(x,y)](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/3%20Methods/convertCoordinates(x_y).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#convertCoordinatesx_y') method.

#####See Also#####
#include common-link-handleevents