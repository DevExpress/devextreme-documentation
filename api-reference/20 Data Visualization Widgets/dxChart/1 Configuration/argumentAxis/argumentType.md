---
default: undefined
acceptValues: 'datetime' | 'numeric' | 'string'
type: String
---
---
##### shortDescription
Casts arguments to a specified data type.

---
If your data source stores, for example, numbers as strings, specify the proper data type using the **argumentType** option.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `ChartDataType` enum. This enum accepts the following values: `Numeric`, `DateTime` and `String`.

#####See Also#####
- **valueAxis**.[valueType](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/valueType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType') - casts values to a specified data type.
- **argumentAxis**.[type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#type') - specifies the axis type.
- **dataPrepareSettings**.[checkTypeForAllData](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/dataPrepareSettings/checkTypeForAllData.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/dataPrepareSettings/#checkTypeForAllData') - validates the type of each value coming from the data source.
- **dataPrepareSettings**.[convertToAxisDataType](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/dataPrepareSettings/convertToAxisDataType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/dataPrepareSettings/#convertToAxisDataType') - allows you to disable the type cast in favour of the widget performance.