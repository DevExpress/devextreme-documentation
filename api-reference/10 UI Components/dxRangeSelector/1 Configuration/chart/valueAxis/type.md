---
id: dxRangeSelector.Options.chart.valueAxis.type
acceptValues: 'continuous' | 'logarithmic'
type: String
default: undefined
---
---
##### shortDescription
Specifies the type of the value axis.

---
The *'continuous'* type is set when numeric or date-time values are specified in the series data source. The continuous axis is divided into intervals automatically.

The *'logarithmic'* type can be set when numeric values are specified in the series data source. The logarithmic axis is useful when you visualize a dataset of rapidly-growing values. Each axis tick represents a particular value that is raised to the next power in turn. This particular value is specified by the [logarithmBase](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/chart/valueAxis/logarithmBase.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/chart/valueAxis/#logarithmBase') option. For example, if you set this option to 5, the following ticks will be generated: 5<sup>0</sup>, 5<sup>1</sup>, 5<sup>2</sup>, 5<sup>3</sup>, etc.

In addition, you can use the scale of a logarithmic [type](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#type') to display series arguments.

#include common-ref-enum with {
    enum: "`RangeSelectorChartAxisScaleType`",
    values: "`Logarithmic` and `Continuous`"
}