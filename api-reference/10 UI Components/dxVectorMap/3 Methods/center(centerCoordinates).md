---
id: dxVectorMap.center(centerCoordinates)
---
---
##### shortDescription
Sets the map center coordinates.

##### param(centerCoordinates): Array<Number>
New map center coordinates. Pass **null** to reset the coordinates.

---
To change the coordinates of the map center, pass an array of two values in the [*longitude*, *latitude*] form as the argument to the **center(centerCoordinates)** method.

In addition, you can get the current coordinates of the map center by calling the same method without arguments. Moreover, you can perform specific actions when the center coordinates are changed. For this purpose, implement a callback function and assign it to the [onCenterChanged](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/onCenterChanged.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/#onCenterChanged') property.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/ZoomingAndCentering/"
}

#####See Also#####
#include common-link-callmethods