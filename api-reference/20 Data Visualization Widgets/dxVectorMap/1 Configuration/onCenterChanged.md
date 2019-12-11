---
EventForAction: ..\4 Events\centerChanged.md
default: null
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [centerChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/4%20Events/centerChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#centerChanged') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.center): Array<Number>
The updated geographical coordinates of the center.

---
If you need to perform specific actions when the coordinates of the map center are changed, handle the **centerChanged** event. One of the ways to do this is to assign a function to the **onCenterChanged** option. This function will be called every time a user moves the map or when the center is being changed in code by calling the [center(centerCoordinates)](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/3%20Methods/center(centerCoordinates).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#centercenterCoordinates') or [viewport(viewportCoordinates)](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/3%20Methods/viewport(viewportCoordinates).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#viewportviewportCoordinates') method. When implementing this function, use the object passed to it as its parameter. Among the fields of this object, you can find the updated center coordinates.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapviewport/"
}