---
id: dxChart.Options.series
type: Object | Array<ChartSeries> | undefined
inherits: ChartSeries
default: undefined
hideDefaults: true
inheritAll: 
notUsedInTheme: 
---
---
##### shortDescription
Specifies properties for Chart UI component series.

---
A series represents a grouping of related data points. The most important characteristic of a series is its type, which determines a particular visual representation of data. You can find more details on each series type in the corresponding topics in the [Series](/concepts/05%20UI%20Components/Chart/10%20Series/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Series/Overview/') help section.

To define a single series, assign an object defining the series to the **series** configuration object. In the series' object, specify the series type, data source fields, the appearance of the series points and other properties.

To show several series, specify **series** as an array of objects defining series. If you need to set similar values to properties of several series, use the [commonSeriesSettings](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/') configuration object. It exposes the properties that can be specified for all series at once and for all series of a particular type at once. Note that the values specified for a series individually (in the **series** array) override the values that are specified for all series (in the **commonSeriesSettings** object).

[note] This property is necessary. If you do not need to specify any of the properties within the **series** object (e.g., when you have specified them within the **commonSeriesSettings** object), assign at least an empty object to the **series** field.