---
##### shortDescription
Returns visible series points.

##### return: Array<basePointObject>
Visible points.

---
Use this method to get points that lay within the visible range defined by the [min](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/min.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#min') and [max](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/max.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#max') options of an axis. This method is also useful if you need to obtain the points displayed when [data aggregation](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/useAggregation.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#useAggregation') is applied.

[note] If a chart series or its points are not displayed as hidden from code, the **getVisiblePoints()** method called for this series still returns points that lay within the visible range as if these points were visible.