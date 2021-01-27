---
id: dxPolarChart.Options.dataPrepareSettings.convertToAxisDataType
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether or not to convert the values from a data source into the data type of an axis.

---
If this property is set to **true**, all data source values will be converted from their initial type into the data type of an axis. To specify the axis data type, use the [argumentType](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis/argumentType.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/argumentAxis/#argumentType') or [valueType](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/valueType.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/valueAxis/#valueType') property of the **argumentAxis** or **valueAxis** object respectively. If the axis data type is not specified explicitly, it will be determined automatically on the base of the first data source value.

It is recommended to set this property to **true** in order to prevent the chart from behaving incorrectly. However, since conversion between types affects performance, it is useful to set this property to **false** when you have a vast data source with values of the same type, with this type known beforehand.