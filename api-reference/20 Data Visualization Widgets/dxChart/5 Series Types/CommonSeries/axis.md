---
id: dxChartSeriesTypes.CommonSeries.axis
type: String
default: undefined
---
---
##### shortDescription
Binds the series to a value axis.

---
When there are multiple value axes in a chart, series need to know exactly which axis they are bound to. By default, all of them are bound to the first axis in the [valueAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/') array. To bind a series to another axis, assign the [name](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/name.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#name') of the axis to the **axis** series property.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/MultipleAxes/"
}