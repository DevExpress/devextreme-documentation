---
id: basePointObject.getLabel()
---
---
##### shortDescription
Allows you to obtain the label(s) of the series point.

##### return: baseLabelObject | Array<baseLabelObject>
The point label(s).

---
This method returns an array of two [Label](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Label '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Label/') objects if a series point has two labels, like in a _[range bar](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/RangeBarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeBarSeries/')_ or _[range area](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/RangeAreaSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeAreaSeries/')_ series. Otherwise, it returns a single **Label** object.