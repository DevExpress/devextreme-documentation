---
id: dxPolarChart.Options.argumentAxis.minorTickInterval
inherits: VizTimeInterval
---
---
##### shortDescription
Specifies the interval between minor ticks.

---
To divide a lengthy chart axis into shorter segments, major and minor ticks are used. [Major ticks](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/argumentAxis/tick '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/argumentAxis/tick/') are accompanied with [axis labels](/concepts/05%20UI%20Components/PolarChart/10%20Visual%20Elements/070%20Axis%20Labels.md '/Documentation/Guide/UI_Components/PolarChart/Visual_Elements/#Axis_Labels'). Between each pair of neighboring major ticks, several minor ticks reside. Minor ticks are required when major ticks are far from each other. To set a custom minor tick interval, use the **minorTickInterval** property. If this property is not set, minor ticks are arranged automatically.

In case your axis displays numbers, assign a numeric value to this property. If the axis displays dates, assign one of the predefined string values. To set the interval to several days, hours, etc., assign an object with the corresponding field specified (**days**, **hours** or another field). Note that this object must contain only one of the fields described in this section.

[note]The **minorTickInterval** property can be applied to a *[continuous](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/argumentAxis/#type')* axis only. For logarithmic axes, use the [minorTickCount](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/argumentAxis/minorTickCount.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/argumentAxis/#minorTickCount') property.
