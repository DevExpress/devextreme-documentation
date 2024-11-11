---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.valueErrorBar.highValueField
type: String | undefined
default: undefined
---
---
##### shortDescription
Specifies the data field that provides data for high error values.

---
If you need to generate error bars from concrete values, specify the **highValueField** property with the name of the field that provides them. These values will be displayed on a chart as the higher end of error bars. To provide data for the lower end of error bars, specify the **lowValueField** property.

[note]If you generate error bars from concrete values, do not specify the **valueErrorBar**.**type** property.