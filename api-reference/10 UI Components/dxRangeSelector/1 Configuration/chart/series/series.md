---
id: dxRangeSelector.Options.chart.series
type: Object | Array<ChartSeries> | undefined
inherits: ChartSeries
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
An object defining the chart's series.

---
If you are going to display several series in the range selector's chart, assign an array of objects defining these series to this property. If a single series must be displayed in the chart, assign an object defining this series to this property. The properties of the **series** configuration object represent the properties that can be set to define the series. To get information on all the properties of the **series** configuration object, refer to its description in the **chartOptions** reference section: [series](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/'). Note that the RangeSelector UI component may have its own default values for the **series** properties.

If you display several series on the chart, utilize the [commonSeriesSettings](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/chart/commonSeriesSettings.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/chart/#commonSeriesSettings') configuration object. This object allows you to set values that are common for all series in the chart.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSelector/ChartOnBackground/"
}