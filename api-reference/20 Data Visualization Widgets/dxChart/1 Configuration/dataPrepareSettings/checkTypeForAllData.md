---
id: dxChart.Options.dataPrepareSettings.checkTypeForAllData
type: Boolean
default: false
---
---
##### shortDescription
Validates the type of each value coming from the data source.

---
Use this option when values in your data source are of a different type, and you need all of them to be visualized on a single axis.

If this option is set to **true**, the type of each value is checked, and the [axis type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#type') is chosen optimally to display all the values. Otherwise, only the type of the first value is checked, and the axis type is chosen according to the type of this value. In this case, the values that cannot be cast to a data type supported by the axis will be ignored.

[note]Because the type check affects widget performance, keep this option set to **false** when you have a vast data source with values of the same type, and this type is known beforehand.

#####See Also#####
- **argumentAxis**.[argumentType](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/argumentType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#argumentType') - casts arguments to a specified data type.
- **valueAxis**.[valueType](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/valueType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType') - casts values to a specified data type.