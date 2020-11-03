---
id: dxChartValueAxis.valueType
acceptValues: 'datetime' | 'numeric' | 'string'
type: String
default: undefined
---
---
##### shortDescription
Casts values to a specified data type.

---
If your data source stores numbers or dates as strings, specify the proper data type using this option. Make sure the dates have a <a href="http://www.w3schools.com/js/js_date_formats.asp" target="_blank">valid format</a>.

#include common-ref-enum with {
    enum: "`ChartDataType`",
    values: "`Numeric`, `DateTime`, and `String`"
}

#####See Also#####
- **argumentAxis**.[argumentType](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/argumentType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#argumentType') - casts arguments to a proper data type.
- **valueAxis**.[type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#type') - specifies the axis type.
- **dataPrepareSettings**.[checkTypeForAllData](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/dataPrepareSettings/checkTypeForAllData.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/dataPrepareSettings/#checkTypeForAllData') - validates the type of each value coming from the data source.
- **dataPrepareSettings**.[convertToAxisDataType](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/dataPrepareSettings/convertToAxisDataType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/dataPrepareSettings/#convertToAxisDataType') - allows you to disable the type cast in favour of the widget performance.