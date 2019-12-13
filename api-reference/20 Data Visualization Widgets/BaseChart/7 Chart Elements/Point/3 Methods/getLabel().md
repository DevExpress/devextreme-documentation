---
id: basePointObject.getLabel()
---
---
##### shortDescription
Allows you to obtain the label(s) of the series point.

##### return: baseLabelObject | Array<baseLabelObject>
The point label(s).

---
This method returns an array of two [Label](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Label '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Label/') objects if a series point has two labels, like in a _[range bar](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/RangeBarSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeBarSeries/')_ or _[range area](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/RangeAreaSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeAreaSeries/')_ series. Otherwise, it returns a single **Label** object.