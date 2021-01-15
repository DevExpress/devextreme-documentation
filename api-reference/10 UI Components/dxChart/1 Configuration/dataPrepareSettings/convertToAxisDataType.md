---
id: dxChart.Options.dataPrepareSettings.convertToAxisDataType
type: Boolean
default: true
---
---
##### shortDescription
Converts data coming from a data source into a data type supported by the axis.

---
If this property is set to **true**, all data will be converted into a data type supported by the axis. You can specify this data type using the **argumentAxis**.[argumentType](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#argumentType) and **valueAxis**.[valueType](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#valueType) properties. Otherwise, it will be determined automatically on the base of the first data source value.

[note]We recommend you to keep this property set to **true** in order to prevent the chart from behaving incorrectly. However, since the type conversion affects UI component performance, it may be useful to set this property to **false** if you have a vast data source with values of the same type, and this type is known beforehand.