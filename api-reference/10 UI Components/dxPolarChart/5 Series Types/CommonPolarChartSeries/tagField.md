---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.tagField
type: String
default: 'tag'
notUsedInTheme: 
---
---
##### shortDescription
Specifies the name of the data source field that provides data about a point.

---
When setting a common data source via the **dataSource** property, you can pass information about a point. For this purpose, add a separate field to the data source in addition to the argument and value fields. To set the specified data to the point instance, set the series' **tagField** property to the name of the field with the information. In this instance, when clicking a point in the chart, you can access the data associated with this point using the point's instance.

When defining series using the **series** configuration object, set the **tagField** property to the corresponding field from the data source for each series individually. If the field that supplies data about points is called similarly in several series, there is no need to set its name for each series individually. Instead, set it for the **tagField** property of the **commonSeriesSettings** configuration object.

You can also associate data with a series instance. To learn how to do this, refer to the description of the **tag** property of the **series** configuration object.