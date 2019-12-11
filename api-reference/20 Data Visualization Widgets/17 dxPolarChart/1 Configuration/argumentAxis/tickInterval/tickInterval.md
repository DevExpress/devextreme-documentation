---
default: undefined
acceptValues: 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'
type: number | object | string
inherits: ..\..\..\..\VizTimeInterval\VizTimeInterval.md
---
---
##### shortDescription
Specifies an interval between axis ticks/grid lines.

---
Use this option to divide the scale by ticks in a specified interval one from another. If this option is not set, ticks are automatically arranged so that their labels do not overlap each other.

In case of a numeric axis, assign a numeric value to this option.

If the axis is of the date-time type, assign one of the predefined string values or an object to this option. The object's fields specify the number of days, hours, etc.

When you use a [logarithmic axis](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#type'), ticks are generated on a base of powers. For example, assume that the [logarithm base](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/1%20Configuration/argumentAxis/logarithmBase.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#logarithmBase') is 10. Then, if the tick interval is 1, ticks are generated at 0.01, 0.1, 1, 10, 100, 1000, 10000, etc. If the tick interval is 2, ticks are generated at 0.1, 10, 1000, etc.

[note]The specified tick interval can be changed internally if its value leads to label overlapping. If you need to prohibit an automatic tick arrangement in this situation, specify the **argumentAxis** | **label** | [overlappingBehavior](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/1%20Configuration/commonAxisSettings/label/overlappingBehavior.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/label/#overlappingBehavior') option.

To set the **tickInterval** option for several axes at once, use the [commonAxisSettings](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/1%20Configuration/commonAxisSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/') configuration object. To set this option for an individual axis, use the **argumentAxis** or [valueAxis](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/1%20Configuration/valueAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/') configuration object.