---
id: dxPieChart.Options.series
type: Object | Array<PieChartSeries>
inherits: PieChartSeries
default: undefined
hideDefaults: true
inheritAll: 
---
---
##### shortDescription
Specifies options for the series of the **PieChart** widget.

---
A series represents a group of related data points. To configure a series, assign an object to the **series** option. If **PieChart** must contain several series, assign an array of such objects to the same option. Refer to the [Series Overview](/concepts/05%20Widgets/PieChart/10%20Series/00%20Overview.md '/Documentation/Guide/Widgets/PieChart/Series/Overview/') topic to learn the basics of what a series is, what it does, and how it helps.

The definitive characteristic of a series is its type. The **PieChart** widget provides two series types - *Pie* and *Doughnut*.

When you have a multi-series pie, settings that are common for all series can be specified all together. Use the [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/commonSeriesSettings/') object to do this.