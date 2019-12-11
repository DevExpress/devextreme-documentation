---
dep: ..\tickInterval\tickInterval.md
default: undefined
acceptValues: 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'
type: number | object | string
---
---
##### deprecated
Use the **tickInterval** option instead.

##### shortDescription
Specifies an interval between major ticks.

---
Major ticks are those that are accompanied by labels that display corresponding scale values. Use this property to divide the scale by major ticks in a specified interval. If this property is not set, major ticks are automatically arranged so that labels do not overlap each other.

In the case of a numeric scale, assign a numeric value to this property. If the scale is of the date-time type, assign one of the predefined string values. To set an interval to several days, hours, etc., assign an object with the corresponding field specified (**days**, **hours** or another field). Note that this object should contain only one of the fields described in this section.

[note]Setting a major tick interval is unavailable for a discrete scale.

[note] The specified tick interval can be changed internally if its value leads to label overlap. If you need to prohibit automatic tick arrangement in this situation, set the scale's [useTicksAutoArrangement](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/1%20Configuration/scale/useTicksAutoArrangement.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#useTicksAutoArrangement') property to *false*.