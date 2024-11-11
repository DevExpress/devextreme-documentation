---
id: BaseChart.Options.series
type: any | Array<any> | undefined
default: undefined
hideDefaults: true
notUsedInTheme: 
---
---
##### shortDescription
Specifies properties for series.

---
A Series represents a grouping of related data points. The most important characteristic of a series is its type, which determines a particular visual representation of data. You can find more details on each series type in the corresponding topics in the [Series](/concepts/05%20Widgets/Chart/10%20Series/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Series/Overview/') help section.

To define a single series, assign an object defining the series to the **series** configuration object. In the series' object, specify the series type and data source fields. In addition, you can specify the appearance of the series points and other properties.

To show several series, specify **series** as an array of objects. Each object will define a series. If you need to set similar values to properties of several series, use the **commonSeriesSettings** configuration object. It exposes the properties that can be specified for all series at once and for all series of a particular type at once. Note that the values specified for a series individually (in the **series** array) override the values that are specified for all series (in the **commonSeriesSettings** object).