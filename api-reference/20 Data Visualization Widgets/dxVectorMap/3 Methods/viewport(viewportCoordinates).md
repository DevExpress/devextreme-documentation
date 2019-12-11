---
id: dxVectorMap.viewport(viewportCoordinates)
---
---
##### shortDescription
Sets the map viewport coordinates.

##### param(viewportCoordinates): Array<Number>
New viewport coordinates. Pass **null** to reset the viewport.

---
To change the coordinates of the map viewport, pass an array of four values in the [*minLongitude*, *maxLatitude*, *maxLongitude*, *minLatitude*] form as the argument to the **viewport(viewportCoordinates)** method. If the passed coordinates do not fit the aspect ratio of the widget container precisely, either the latitude or longitude will be applied depending on the largest range.

In addition, you can get the current coordinates of the map viewport by calling the same method without arguments.

If you have implemented the [onCenterChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/onCenterChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onCenterChanged') or [onZoomFactorChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/onZoomFactorChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onZoomFactorChanged') callback functions, they will be triggered when the viewport coordinates are changed using the **viewport(viewportCoordinates)** method.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/DynamicViewport/"
}

#####See Also#####
#include common-link-callmethods