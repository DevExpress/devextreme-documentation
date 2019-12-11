---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when the coordinates of the map center are changed.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.center): Array<number>
The updated geographical coordinates of the center.

---
If you need to perform specific actions when the coordinates of the map center are changed, implement a function that handles the **centerChanged** event. This function will be called every time a user moves the map or when the center is being changed in code by calling the [center(centerCoordinates)](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/3%20Methods/center(centerCoordinates).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#centercenterCoordinates') or [viewport(viewportCoordinates)](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/3%20Methods/viewport(viewportCoordinates).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#viewportviewportCoordinates') method. When implementing this function, use the object passed to it as its parameter. Among the fields of this object, you can find the updated center coordinates.

#####See Also#####
#include common-link-handleevents