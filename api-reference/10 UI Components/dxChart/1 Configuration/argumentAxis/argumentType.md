---
id: dxChart.Options.argumentAxis.argumentType
acceptValues: 'datetime' | 'numeric' | 'string'
type: String
default: undefined
---
---
##### shortDescription
Casts arguments to a specified data type.

---
If your data source stores numbers or dates as strings, specify the proper data type using this property. Make sure the dates have a <a href="http://www.w3schools.com/js/js_date_formats.asp" target="_blank">valid format</a>.

#include common-ref-enum with {
    enum: "`ChartDataType`",
    values: "`Numeric`, `DateTime`, and `String`"
}

#####See Also#####
- **valueAxis**.[valueType](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#valueType) - casts values to a specified data type.
- **argumentAxis**.[type](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#type) - specifies the axis type.
- **dataPrepareSettings**.[checkTypeForAllData](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/dataPrepareSettings/checkTypeForAllData.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/dataPrepareSettings/#checkTypeForAllData') - validates the type of each value coming from the data source.
- **dataPrepareSettings**.[convertToAxisDataType](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/dataPrepareSettings/convertToAxisDataType.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/dataPrepareSettings/#convertToAxisDataType') - allows you to disable the type cast in favour of the UI component performance.