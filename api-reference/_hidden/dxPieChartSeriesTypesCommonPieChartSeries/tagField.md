---
id: dxPieChartSeriesTypesCommonPieChartSeries.tagField
type: String
default: 'tag'
---
---
##### shortDescription
<p>Specifies the name of the data source field that provides data about a point.</p>

---
When setting a data source, you can pass extra information about a point. For this purpose, add a separate field to the data source in addition to the argument and value fields. To set specified data to the point instance, set the series' **tagField** property to the name of the field with the information. In this instance, when clicking/hovering/selecting a point in the chart, you can access the data associated with this point using the point's instance.