---
id: chartPointObject.getBoundingRect()
---
---
##### shortDescription
Gets the parameters of the point's <a href="http://en.wikipedia.org/wiki/Minimum_bounding_rectangle" target="_blank">minimum bounding rectangle</a> (MBR).

##### return: Object
An object with the following content: *{ x: numeric, y: numeric, height: numeric, width: numeric }*.

---
The object returned by this method contains the X and Y coordinates of the upper-left corner of the MBR. These coordinates are relative to the client area (UI component's container). Additionally, the returned object contains the height and width of the MBR.

[note]This method is not supported for the [rangeBar](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/RangeBarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeBarSeries/') and [rangeArea](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/RangeAreaSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeAreaSeries/') series points.