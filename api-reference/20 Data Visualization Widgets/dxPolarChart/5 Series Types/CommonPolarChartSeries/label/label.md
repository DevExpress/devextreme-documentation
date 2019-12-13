---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.label
type: Object
---
---
##### shortDescription
An object defining the [label](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/030%20Series%20Point%20Labels.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Point_Labels') configuration options.

---
Each [series point](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/point '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/point/') can be accompanied by a text label that represents data related to the point. These are called series point labels. Use the **label** object's properties to set label options for all chart series at once.

Specify the **label** object's properties within the **commonSeriesSettings** configuration object to set label options for all chart series at once.

If you have several series of a single type, you can set label options to the values specific to this series type using the corresponding object (**area**, **line**, etc.) within the **commonSeriesSettings** configuration object. The values that are set within series-type-specific configuration objects override the corresponding common values.

If you need to set a label option for an individual series, use the **label** object within the series object of the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/') array. The values that are set individually override the corresponding common values.