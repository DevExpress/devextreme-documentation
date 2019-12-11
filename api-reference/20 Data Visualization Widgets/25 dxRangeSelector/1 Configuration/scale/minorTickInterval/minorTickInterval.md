---
default: undefined
acceptValues: 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'
type: number | object | string
inherits: ..\..\..\..\VizTimeInterval\VizTimeInterval.md
---
---
##### shortDescription
Specifies an interval between minor ticks.

---
Major ticks are those that are accompanied by labels, which display the corresponding scale values. Minor ticks are the intermediate ticks between major ticks. Minor ticks are required when major ticks are far from each other due to label overlap. To set a custom minor tick interval, use the **minorTickInterval** property. If this property is not set, minor ticks are arranged automatically.

In the case of a numeric scale, assign a numeric value to this property. If the scale is of the date-time type, assign one of the predefined string values. To set an interval to several days, hours, etc., assign an object with the corresponding field specified (**days**, **hours** or another field). Note that this object should contain only one of the fields described in this section.

[note]Minor ticks are unavailable for a discrete and semi-discrete scale.

When the [snapToTicks](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/1%20Configuration/behavior/snapToTicks.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/behavior/#snapToTicks') property is set to *true*, sliders are docked to both major and minor ticks.

To prohibit the display of minor ticks, set the scale's **showMinorTicks** property to *false*.

To set a custom tick interval between major ticks, use the scale's **tickInterval** property.