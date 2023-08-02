---
uid: viz/chart:ValueAxis.multipleAxesSpacing
type: Number
default: 5
---
---
##### shortDescription
Adds a pixel-measured empty space between two side-by-side value axes. Applies if several value axes are [located on one side](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/position.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#position') of the chart.

---
<!--
The order of axes in the **valueAxis** array plays a significant role when you specify this property. When you need to add an empty space between two side-by-side axes, set the **multipleAxesSpacing** property for the axis declared last in the **valueAxis** array. For example, to add space between the second and the third axes, set the **multipleAxesSpacing** property for the third axis.

[note]Obviously, setting this property for the first axis takes no effect, because this axis is never the last one in any pair of axes.
-->