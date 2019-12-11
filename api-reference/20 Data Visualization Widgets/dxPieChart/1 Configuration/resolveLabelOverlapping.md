---
default: 'none'
acceptValues: 'hide' | 'none' | 'shift'
type: String
---
---
##### shortDescription
Specifies how a chart must behave when [point labels](/concepts/05%20Widgets/PieChart/15%20Point%20Labels/00%20Overview.md '/Documentation/Guide/Widgets/PieChart/Point_Labels/Overview/') overlap.

---
Series point labels display series point values. If the series in your pie chart contains a large number of points, point labels may overlap. In this case, specify how the chart must resolve overlapping using the **resolveLabelOverlapping** option. To hide certain labels, set this option to *'hide'*. Labels to be hidden will be determined automatically. To resolve overlapping by shifting labels from their positions, set the **resolveLabelOverlapping** option to *'shift'*. In this case, it is recommended that you display label [connectors](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/connector '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/connector/') so that pie segments are connected with their labels. If there is not enough space for all labels after they are shifted, labels with the smallest values will be hidden.

[note] If the [position](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/position.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#position') option is set to *"inside"*, the *"shift"* mode in label overlapping is not available.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `PieChartResolveLabelOverlapping` enum. This enum accepts the following values: `None`, `Hide` and `Shift`.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartspieseriespiewithoverlappinglabels/"
}