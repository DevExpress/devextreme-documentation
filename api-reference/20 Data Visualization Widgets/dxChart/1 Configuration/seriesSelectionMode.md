---
id: dxChart.Options.seriesSelectionMode
acceptValues: 'multiple' | 'single'
type: String
default: 'single'
---
---
##### shortDescription
Specifies whether a single series or multiple series can be selected in the chart.

---
To set the series elements to highlight when a series is selected, set the series [selectionMode](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/selectionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#selectionMode') option.

To learn how to select a point, refer to the [Selection Handling](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/90%20Charts%20-%20End-User%20Interaction/4%20Selection%20Handling '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Selection_Handling') topic.

#include common-ref-enum with {
    enum: "`ChartElementSelectionMode`",
    values: "`Single` and `Multiple`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/MultipleSeriesSelection/"
}