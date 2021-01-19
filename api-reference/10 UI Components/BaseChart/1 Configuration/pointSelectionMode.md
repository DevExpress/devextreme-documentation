---
id: BaseChart.Options.pointSelectionMode
acceptValues: 'multiple' | 'single'
type: String
default: 'single'
---
---
##### shortDescription
Specifies whether a single point or multiple points can be selected in the chart.

---
To set the points to highlight along with the selected point, set the **series**.**point**.[selectionMode](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/point/selectionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/point/#selectionMode') option.

To learn how to select a point, refer to the [Selection Handling](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/90%20Charts%20-%20End-User%20Interaction/4%20Selection%20Handling '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Selection_Handling') topic.

#include common-ref-enum with {
    enum: "`ChartElementSelectionMode`",
    values: "`Single` and `Multiple`"
}

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/MultiplePointSelection/",
    name: "Multiple Point Selection"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/APISelectAPoint/",
    name: "API - Select a Point"
}