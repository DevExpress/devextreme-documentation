---
uid: viz/polar_chart:ValueAxis.valueType
type: Enums.ChartsDataType | undefined
default: undefined
---
---
##### shortDescription
Specifies the desired type of axis values.

---
<!--
The type of the axis values is determined based on the type of the values specified in the corresponding data source field of the chart's series. If numeric values are specified in the series data source, the axis values will also be of the numeric type. The same logic is used when string or date-time values are specified in the data source.

In some scenarios, you may need the type of the values that are specified in the data source to be converted to another type. In this instance, specify the desired type for the axis values using the **valueType** property.

[note]If dates in your data source are stored as strings, make sure that they have a &lt;a href="http://www.w3schools.com/js/js_date_formats.asp" target="_blank"&gt;valid format&lt;/a&gt;.

-->