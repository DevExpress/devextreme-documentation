---
id: dxPolarChartSeriesTypesCommonPolarChartSeriesPoint.image
type: String | Object
default: undefined
---
---
##### shortDescription
An object specifying the parameters of an image that is used as a point marker.

##### propertyOf
dxPolarChartSeriesTypes.linepolarseries,dxPolarChartSeriesTypes.areapolarseries,dxPolarChartSeriesTypes.scatterpolarseries

---
In a common case, chart points are represented by default point markers. However, you can use a custom image as a point marker. To do this, specify the options of the **image** object. Assign a URL leading to your image to the **url** option. If the size of your image does not correspond to your needs, specify the **width** and **height** options.

[note] If you do not need to resize your image, you can assign an image URL directly to the **image** field.