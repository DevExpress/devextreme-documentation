---
id: dxPolarChart.Options.commonSeriesSettings
type: Object
inherits: dxPolarChartSeriesTypes.CommonPolarChartSeries
hideDefaults: true
inheritAll: 
---
---
##### shortDescription
An object defining the configuration options that are common for all series of the **PolarChart** widget.

---
Use this object's properties to set options for all chart series at once. These can be options common to all series types and options specific to series types.

If you have several series of one type, you can set options to the values specific to this series type using the corresponding object (**area**, **line** or another) within the **commonSeriesSettings** configuration object. The values that are set within type-specific configuration objects override the corresponding common values.

In case you have to set an option for an individual series, use the corresponding **series** object within the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/') array. The values that are set individually override the corresponding common values.