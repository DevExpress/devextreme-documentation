---
default: 'single'
acceptValues: 'single' | 'multiple'
type: String
---
---
##### shortDescription
Specifies whether a single series or multiple series can be selected in the chart.

---
To set the series elements to highlight when a series is selected, set the series [selectionMode](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/selectionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/#selectionMode') option.

To learn how to select a point, refer to the [Selection Handling](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/90%20Charts%20-%20End-User%20Interaction/4%20Selection%20Handling '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Selection_Handling') topic.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `ChartElementSelectionMode` enum. This enum accepts the following values: `Single` and `Multiple`.