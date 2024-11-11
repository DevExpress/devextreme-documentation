---
uid: viz/polar_chart:ValueAxis.maxValueMargin
type: Number | undefined
default: undefined
---
---
##### shortDescription
Specifies a coefficient that determines the spacing between the maximum series point and the axis.

---
<!--
When [margins are enabled](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/valueAxis/valueMarginsEnabled.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/valueAxis/#valueMarginsEnabled') in a chart, the value axis extends slightly beyond its start and end values. It is required for preventing the cutting off of parts of the minimum and maximum series points.

By default, margins are calculated automatically and equal to half of an axis' [tick interval](/concepts/05%20UI%20Components/PolarChart/10%20Visual%20Elements/050%20Axes/30%20Axis%20Ticks%20Arrangement.md '/Documentation/Guide/UI_Components/PolarChart/Visual_Elements/#Axes/Axis_Ticks_Arrangement'). If you need to specify custom margins, use the **minValueMargin** and **maxValueMargin** properties. These properties accept coefficients that are used to calculate the actual start and end values for an axis with applied margins using the following formulas:

    startAxisValue = minDataValue - (maxDataValue - minDataValue) * minValueMargin
    endAxisValue = maxDataValue + (maxDataValue - minDataValue) * maxValueMargin

For example, consider that `minDataValue` is 1960 and `maxDataValue` is 2010. If you set the **minValueMargin** and **maxValueMargin** properties to 0.1, the axis will start in 1955 and end in 2015.

    startAxisValue = 1960 - (2010 - 1960) * 0.1 = 1960 - 50 * 0.1 = 1960 - 5 = 1955
    endAxisValue = 2010 + (2010 - 1960) * 0.1 = 2010 + 50 * 0.1 = 2010 + 5 = 2015

![Value Margins ChartJS](/images/ChartJS/PolarValueMargins.png)


[note]Margins can be added to axes of the continuous or logarithmic type only.
-->