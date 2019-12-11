---
hideDefaults: true
default: undefined
type: Object | Array
inherits: ..\..\5 Series Types\CommonPieChartSeries\CommonPieChartSeries.md
inheritAll: 
---
---
##### shortDescription
Specifies options for the series of the **PieChart** widget.

---
A series represents a group of related data points. To configure a series, assign an object to the **series** option. If **PieChart** must contain several series, assign an array of such objects to the same option. Refer to the [Series](/concepts/05%20Widgets/PieChart/10%20Visual%20Elements/010%20Series.md '/Documentation/Guide/Widgets/PieChart/Visual_Elements/#Series') topic to learn the basics of what a series is, what it does, and how it helps.

The definitive characteristic of a series is its type. The **PieChart** widget provides two series types - *Pie* and *Doughnut*. In the [PieChart Series Types](c:\content\05 Widgets\PieChart\20 Series Types\Series Types.htm '/Documentation/Guide/Widgets/PieChart/Series_Types/') guide, you can find information about distinctive features of both series types.

When you have a multi-series pie, settings that are common for all series can be specified all together. Use the [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/commonSeriesSettings/') object to do this.