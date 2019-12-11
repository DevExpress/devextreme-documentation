---
id: dxChart.Options.dataPrepareSettings.convertToAxisDataType
type: Boolean
default: true
---
---
##### shortDescription
Converts data coming from a data source into a data type supported by the axis.

---
If this option is set to **true**, all data will be converted into a data type supported by the axis. You can specify this data type using the **argumentAxis**.[argumentType](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/argumentType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#argumentType') and **valueAxis**.[valueType](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/valueType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType') options. Otherwise, it will be determined automatically on the base of the first data source value.

[note]We recommend you to keep this option set to **true** in order to prevent the chart from behaving incorrectly. However, since the type conversion affects widget performance, it may be useful to set this option to **false** if you have a vast data source with values of the same type, and this type is known beforehand.