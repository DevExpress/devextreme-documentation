---
id: dxPolarChart.Options.valueAxis
type: Object
inherits: dxPolarChart.Options.commonAxisSettings
---
---
##### shortDescription
Specifies [value axis](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/050%20Axes/20%20Value%20Axis.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axes/Value_Axis') options for the **PolarChart** widget.

---
For charting, the polar coordinate system is used to determine each point uniquely on a plane through two numbers, the argument and the value of the point. A circular and straight lines (the axis of arguments and the axis of values) are specified to define the coordinates. To define the argument axis, use the [argumentAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/') configuration object. To define the value axis, use the **valueAxis** configuration object.

To set the properties of all axes to a common value, use the [commonAxisSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/') configuration object. It exposes properties that can be specified for all axes simultaneously. Note that the value specified for an axis individually (in the **argumentAxis** or **valueAxis** object) overrides the value that specified in the **commonAxisSettings** object.