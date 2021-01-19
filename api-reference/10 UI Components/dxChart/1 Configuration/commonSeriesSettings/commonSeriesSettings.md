---
id: dxChart.Options.commonSeriesSettings
type: Object
inherits: dxChartSeriesTypes.CommonSeries
hideDefaults: true
inheritAll: 
---
---
##### shortDescription
Specifies settings common for all series in the chart.

---
There are three ways to configure a series.

- The **commonSeriesSettings** object     
Specifies settings for all series in a chart.

- The **commonSeriesSettings**.**%seriesType%** (**[area](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings/area.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#area')**, **[line](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings/line.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#line')**, etc.) object        
Specifies settings for all series of the **seriesType**.

- An object in the **[series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/')** array        
Specifies settings for an individual series.

[note]You can use these objects together, but note that individual settings override type-specific settings, which in their turn, override common settings.