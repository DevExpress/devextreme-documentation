---
default: undefined
acceptValues: 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'
type: number | object | string
inherits: ..\..\..\..\VizTimeInterval\VizTimeInterval.md
---
---
##### shortDescription
Specifies the interval between [minor ticks](/concepts/20%20Data%20Visualization/10%20Charts/10%20Chart%20Elements/080%20Axis%20Ticks/02%20Minor%20Ticks.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Axis_Ticks/Minor_Ticks').

---
To divide a lengthy chart axis into shorter segments, major and minor ticks are used. [Major ticks](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/1%20Configuration/valueAxis/tick '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/tick/') are accompanied with [axis labels](/concepts/20%20Data%20Visualization/10%20Charts/352%20PolarChart%20Elements/070%20Axis%20Labels.md '/Documentation/Guide/Data_Visualization/Charts/PolarChart_Elements/#Axis_Labels'). Between each pair of neighboring major ticks, several minor ticks reside. Minor ticks are required when major ticks are far from each other. To set a custom minor tick interval, use the **minorTickInterval** option. If this option is not set, minor ticks are arranged automatically.

In case your axis displays numbers, assign a numeric value to this option. If the axis displays dates, assign one of the predefined string values. To set the interval to several days, hours, etc., assign an object with the corresponding field specified (**days**, **hours** or another field). Note that this object must contain only one of the fields described in this section.

[note]The **minorTickInterval** option can be applied to a *[continuous](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#type')* axis only. For logarithmic axes, use the [minorTickCount](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/1%20Configuration/valueAxis/minorTickCount.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#minorTickCount') option.