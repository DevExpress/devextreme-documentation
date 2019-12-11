---
type: object
inherits: ..\commonAxisSettings\commonAxisSettings.md
---
---
##### shortDescription
Specifies [argument axis](/concepts/20%20Data%20Visualization/10%20Charts/352%20PolarChart%20Elements/050%20Axes/10%20Argument%20Axis.md '/Documentation/Guide/Data_Visualization/Charts/PolarChart_Elements/#Axes/Argument_Axis') options for the **PolarChart** widget.

---
For charting, the polar coordinate system is used to determine each point uniquely on a plane through two numbers, the argument and the value of the point. A circular and straight lines (the axis of arguments and the axis of values) are specified to define the coordinates. To define the argument axis, use the **argumentAxis** configuration object. To define the value axis, use the [valueAxis](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/1%20Configuration/valueAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/') configuration object. To set the properties of all axes to a common value, use the [commonAxisSettings](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/1%20Configuration/commonAxisSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/') configuration object. This object exposes the properties that can be specified for all axes simultaneously. Note that the value specified for an axis individually (in the **argumentAxis** or **valueAxis** object) overrides the value specified in the **commonAxisSettings** object.