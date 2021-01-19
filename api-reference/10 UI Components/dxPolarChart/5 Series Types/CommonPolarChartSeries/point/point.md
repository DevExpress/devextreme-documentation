---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.point
type: Object
---
---
##### shortDescription
An object defining configuration options for [points](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/020%20Series%20Points/10%20Series%20Points.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Points') in line and area series.

##### propertyOf
dxPolarChartSeriesTypes.linepolarseries,dxPolarChartSeriesTypes.areapolarseries,dxPolarChartSeriesTypes.scatterpolarseries

---
To specify point options for all line and area series at once, use the properties of the **point** object defined within the **commonSeriesSettings** configuration object.

If you have several series of a single type, you can set point options to the values specific to this series type using the corresponding object (**area**, **line** etc.) within the **commonSeriesSettings** configuration object. The values that are set within series-type-specific configuration objects override their corresponding common values.

If you need to set a point option for an individual series, use the **point** object within the series object of the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/') array. The values that are set individually override their corresponding common values.