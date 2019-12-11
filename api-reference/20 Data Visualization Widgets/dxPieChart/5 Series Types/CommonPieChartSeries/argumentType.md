---
id: dxPieChartSeriesTypes.CommonPieChartSeries.argumentType
acceptValues: 'datetime' | 'numeric' | 'string'
type: String
default: undefined
---
---
##### shortDescription
Specifies the required type for series arguments.

---
By default, the series arguments have the same type as the values of a corresponding data source field. If the data source field values are numeric, the series arguments will also be numeric, etc. However, you can convert the data source values to another type. In this instance, specify the required type using the **argumentType** option.

#include common-ref-enum with {
    enum: "`ChartDataType`",
    values: "`Numeric`, `DateTime`, and `String`"
}