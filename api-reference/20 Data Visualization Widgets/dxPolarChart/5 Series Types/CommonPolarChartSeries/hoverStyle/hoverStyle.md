---
id: dxPolarChartSeriesTypesCommonPolarChartSeries.hoverStyle
type: Object
---
---
##### shortDescription
An object defining configuration options for a hovered series.

##### propertyOf
dxPolarChartSeriesTypes.areapolarseries,dxPolarChartSeriesTypes.barpolarseries,dxPolarChartSeriesTypes.stackedbarpolarseries,dxPolarChartSeriesTypes.linepolarseries

---
To set a custom 'hover' style for all series at once, use the **hoverStyle** object within the **commonSeriesSettings** configuration object.

If you have several series of one type, you can set hover style options to the values specific to this type using the corresponding object (**area**, **line** or another) within the **commonSeriesSettings** configuration object. The values that are set within series-type-specific configuration objects override the corresponding common values.

In case you have to set a hover style option for an individual series, use the **hoverStyle** object within the series object of the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/') array. The values that are set individually override corresponding common values.