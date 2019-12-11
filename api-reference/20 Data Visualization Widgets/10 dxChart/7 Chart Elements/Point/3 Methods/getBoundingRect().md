---
##### shortDescription
Gets the parameters of the point's [minimum bounding rectangle](https://en.wikipedia.org/wiki/Minimum_bounding_rectangle) (MBR).

##### return: object
An object with the following content: <i>{ x: numeric, y: numeric, height: numeric, width: numeric }</i>.

---
The object returned by this method contains the X and Y coordinates of the upper-left corner of the MBR. These coordinates are relative to the client area (widget's container). Additionally, the returned object contains the height and width of the MBR.

[note]This method is not supported for the [rangeBar](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/RangeBarSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeBarSeries/') and [rangeArea](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/RangeAreaSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeAreaSeries/') series points.