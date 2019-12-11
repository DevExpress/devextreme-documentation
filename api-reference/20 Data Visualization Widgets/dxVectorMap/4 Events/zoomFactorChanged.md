---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when the map zoom factor is changed.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.zoomFactor): number
The updated zoom factor.

---
If you need to perform specific actions when the map zoom factor is changed, implement a function that handles the **zoomFactorChanged** event. This function will be called every time a user zooms the map or when the zoom factor is changed in code by calling the [zoomFactor(zoomFactor)](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/3%20Methods/zoomFactor(zoomFactor).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#zoomFactorzoomFactor') or [viewport(viewportCoordinates)](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/3%20Methods/viewport(viewportCoordinates).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#viewportviewportCoordinates') method. When implementing this function, use the object passed to it as its parameter. Among the fields of this object, you can find the updated zoom factor.

#####See Also#####
#include common-link-handleevents