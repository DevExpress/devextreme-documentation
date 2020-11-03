---
id: dxPolarChartSeriesTypesCommonPolarChartSeries.argumentField
type: String
default: 'arg'
notUsedInTheme: 
---
---
##### shortDescription
Specifies the data source field that provides arguments for series points.

---
When defining series using the **series** configuration object, set the **argumentField** property to the corresponding field from the data source for each series individually. If the field that supplies arguments for data points is called in a similar way for several series, there is no need to set the field name for each series individually. Instead, set the field name for the **argumentField** property of the **commonSeriesSettings** configuration object at once.