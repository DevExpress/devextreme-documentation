---
id: dxPolarChart.Options.valueAxis
type: viz/polar_chart:dxPolarChartValueAxis
inherits: dxPolarChart.Options.commonAxisSettings
inheritsType: viz/polar_chart:dxPolarChartValueAxis
---
---
##### shortDescription
Specifies [value axis](/concepts/05%20UI%20Components/PolarChart/10%20Visual%20Elements/050%20Axes/20%20Value%20Axis.md '/Documentation/Guide/UI_Components/PolarChart/Visual_Elements/#Axes/Value_Axis') properties for the PolarChart UI component.

---
For charting, the polar coordinate system is used to determine each point uniquely on a plane through two numbers, the argument and the value of the point. A circular and straight lines (the axis of arguments and the axis of values) are specified to define the coordinates. To define the argument axis, use the [argumentAxis](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/argumentAxis '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/argumentAxis/') configuration object. To define the value axis, use the **valueAxis** configuration object.

To set the properties of all axes to a common value, use the [commonAxisSettings](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonAxisSettings/') configuration object. It exposes properties that can be specified for all axes simultaneously. Note that the value specified for an axis individually (in the **argumentAxis** or **valueAxis** object) overrides the value that specified in the **commonAxisSettings** object.