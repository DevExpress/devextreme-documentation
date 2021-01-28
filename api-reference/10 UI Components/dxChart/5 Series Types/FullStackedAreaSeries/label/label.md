---
id: dxChartSeriesTypes.FullStackedAreaSeries.label
type: Object
---
---
##### shortDescription
An object defining the label configuration properties.

---
Each [series point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/point '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/point/') can be accompanied by a text label that represents data related to the point. These are called series point labels. Use the **label** object's properties to set label properties for all chart series at once.

Specify the **label** object's properties within the **commonSeriesSettings** configuration object to set label properties for all chart series at once.

If you have several series of a single type, you can set label properties to the values specific to this series type using the corresponding object (**area**, **line**, etc.) within the **commonSeriesSettings** configuration object. The values that are set within series-type-specific configuration objects override the corresponding common values.

If you need to set a label property for an individual series, use the **label** object within the series object of the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/') array. The values that are set individually override the corresponding common values.