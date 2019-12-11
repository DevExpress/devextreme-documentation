---
##### shortDescription
Sets the value of the map zoom factor.

##### param(zoomFactor): number
A new value of the zoom factor. Pass <i>null</i> to reset the zoom factor.

---
To change the zoom factor, pass an numeric value as the argument to the **zoomFactor(zoomFactor)** method.

In addition, you can get the current value of the map zoom factor by calling the same method without arguments. Moreover, you can perform specific actions when the zoom factor is changed. For this purpose, implement a callback function and assign it to the [onZoomFactorChanged](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/onZoomFactorChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onZoomFactorChanged') option.