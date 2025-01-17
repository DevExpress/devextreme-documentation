---
id: dxPieChart.Options.series
type: Object | Array<PieChartSeries> | undefined
inherits: PieChartSeries
default: undefined
hideDefaults: true
inheritAll: 
---
---
##### shortDescription
Specifies properties for the series of the PieChart UI component.

---
A series represents a group of related data points. To configure a series, assign an object to the **series** property. If PieChart must contain several series, assign an array of such objects to the same property. Refer to the [Series Overview](/concepts/05%20UI%20Components/PieChart/10%20Series/00%20Overview.md '/Documentation/Guide/UI_Components/PieChart/Series/Overview/') topic to learn the basics of what a series is, what it does, and how it helps.

The definitive characteristic of a series is its type. The PieChart UI component provides two series types - *Pie* and *Doughnut*.

When you have a multi-series pie, settings that are common for all series can be specified all together. Use the [commonSeriesSettings](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/commonSeriesSettings/') object to do this.