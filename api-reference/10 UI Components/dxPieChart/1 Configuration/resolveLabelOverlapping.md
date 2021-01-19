---
id: dxPieChart.Options.resolveLabelOverlapping
acceptValues: 'hide' | 'none' | 'shift'
type: String
default: 'none'
---
---
##### shortDescription
Specifies how a chart must behave when [point labels](/concepts/05%20Widgets/PieChart/15%20Point%20Labels/00%20Overview.md '/Documentation/Guide/UI_Components/PieChart/Point_Labels/Overview/') overlap.

---
Series point labels display series point values. If the series in your pie chart contains a large number of points, point labels may overlap. In this case, specify how the chart must resolve overlapping using the **resolveLabelOverlapping** property. To hide certain labels, set this property to *'hide'*. Labels to be hidden will be determined automatically. To resolve overlapping by shifting labels from their positions, set the **resolveLabelOverlapping** property to *'shift'*. In this case, it is recommended that you display label [connectors](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/connector '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/connector/') so that pie segments are connected with their labels. If there is not enough space for all labels after they are shifted, labels with the smallest values will be hidden.

[note] If the [position](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/position.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#position') property is set to *"inside"*, the *"shift"* mode in label overlapping is not available.

#include common-ref-enum with {
    enum: "`PieChartResolveLabelOverlapping`",
    values: "`None`, `Hide`, and `Shift`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PieWithResolvedLabelOverlapping/"
}