---
id: dxPolarChartSeriesTypesCommonPolarChartSeries.selectionStyle
type: Object
---
---
##### shortDescription
An object defining configuration options for a selected series.

##### propertyOf
dxPolarChartSeriesTypes.areapolarseries,dxPolarChartSeriesTypes.barpolarseries,dxPolarChartSeriesTypes.stackedbarpolarseries,dxPolarChartSeriesTypes.linepolarseries

---
The **PolarChart** widget comes with API members that allow you to select a series in code. To set a custom 'selected' style for all series at once, use the **selectionStyle** object within the **commonSeriesSettings** configuration object.

If you have several series of one type, you can set selection style options to the values specific to this type using the corresponding object (**area**, **line** or another) within the **commonSeriesSettings** configuration object. The values that are set within series-type-specific configuration objects override the corresponding common values.

In case you have to set a selection style option for an individual series, use the **selectionStyle** object within the series object of the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPOlarChart/Configuration/series/') array. The values that are set individually override corresponding common values.