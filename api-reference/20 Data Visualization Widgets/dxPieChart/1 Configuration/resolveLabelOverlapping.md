---
default: 'none'
acceptValues: 'none' | 'hide' | 'shift'
type: String
---
---
##### shortDescription
Specifies how a chart must behave when [series point labels](/concepts/05%20Widgets/PieChart/10%20Visual%20Elements/030%20Series%20Point%20Labels.md '/Documentation/Guide/Widgets/PieChart/Visual_Elements/#Series_Point_Labels') overlap.

---
Series point labels display series point values. If the series in your pie chart contains a large number of points, point labels may overlap. In this case, specify how the chart must resolve overlapping using the **resolveLabelOverlapping** option. To hide certain labels, set this option to *'hide'*. Labels to be hidden will be determined automatically. To resolve overlapping by shifting labels from their positions, set the **resolveLabelOverlapping** option to *'shift'*. In this case, it is recommended that you display label [connectors](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/connector '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/connector/') so that pie segments are connected with their labels. If there is not enough space for all labels after they are shifted, labels with the smallest values will be hidden.

[note] If the [position](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/position.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#position') option is set to *"inside"*, the *"shift"* mode in label overlapping is not available.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `PieChartResolveLabelOverlapping` enum. This enum accepts the following values: `None`, `Hide` and `Shift`.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartspieseriespiewithoverlappinglabels/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>