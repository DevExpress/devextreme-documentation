---
EventForAction: ..\4 Events\zoomFactorChanged.md
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [zoomFactorChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/4%20Events/zoomFactorChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#zoomFactorChanged') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#instance').

##### field(e.element): Object
The widget's container.

##### field(e.zoomFactor): Number
The updated zoom factor.

---
If you need to perform specific actions when the map zoom factor is changed, handle the **zoomFactorChanged** event. One of the ways to do this is to assign a function to the **onZoomFactorChanged** option. This function will be called every time a user zooms the map or when the zoom factor is changed from code by calling the [zoomFactor(zoomFactor)](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/3%20Methods/zoomFactor(zoomFactor).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#zoomFactorzoomFactor') or [viewport(viewportCoordinates)](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/3%20Methods/viewport(viewportCoordinates).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#viewportviewportCoordinates') method. When implementing this function, use the object passed to it as the parameter. Among the fields of this object, you can find the updated zoom factor.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapviewport/"
}