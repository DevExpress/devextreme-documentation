---
hideDefaults: true
default: undefined
type: object | array
inherits: ..\..\5 Series Types\CommonPieChartSeries\CommonPieChartSeries.md
inheritAll: 
---
---
##### shortDescription
Specifies options for the series of the **PieChart** widget.

---
A series represents a group of related data points. To configure a series, assign an object to the **series** option. If **PieChart** must contain several series, assign an array of such objects to the same option. Refer to the [Series](/concepts/20%20Data%20Visualization/10%20Charts/30%20PieChart%20Elements/010%20Series.md '/Documentation/Guide/Data_Visualization/Charts/PieChart_Elements/#Series') topic to learn the basics of what a series is, what it does, and how it helps.

The definitive characteristic of a series is its type. The **PieChart** widget provides two series types - *Pie* and *Doughnut*. In the [PieChart Series Type](/Documentation/Guide/Data_Visualization/Charts/PieChart_Series_Types/#PieChart_Series_Types) guide, you can find information about distinctive features of both series types.

When you have a multi-series pie, settings that are common for all series can be specified all together. Use the [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/15%20dxPieChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/commonSeriesSettings/') object to do this.