---
##### shortDescription
Sets the coordinates of the map center.

##### param(centerCoordinates): array
New coordinates for the map center. Pass <i>null</i> to reset the coordinates.

---
To change the coordinates of the map center, pass an array of two values in the [*longitude*, *latitude*] form as the argument to the **center(centerCoordinates)** method.

In addition, you can get the current coordinates of the map center by calling the same method without arguments. Moreover, you can perform specific actions when the center coordinates are changed. For this purpose, implement a callback function and assign it to the [onCenterChanged](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/onCenterChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onCenterChanged') option.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapzoomingandcentering/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>