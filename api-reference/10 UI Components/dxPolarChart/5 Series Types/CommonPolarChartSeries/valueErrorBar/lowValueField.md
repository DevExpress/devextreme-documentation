---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.valueErrorBar.lowValueField
type: String
default: undefined
---
---
##### shortDescription
Specifies the data field that provides data for low error values.

---
If you need to generate error bars from concrete values, specify the **lowValueField** option with the name of the field that provides them. These values will be displayed on a chart as the lower end of error bars. To provide data for the higher end of error bars, specify the **highValueField** option.

[note]If you generate error bars from concrete values, do not specify the **valueErrorBar**.**type** option.