---
default: 'single'
acceptValues: 'single' | 'multiple'
type: String
---
---
##### shortDescription
Specifies whether a single point or multiple points can be selected in the chart.

---
To set the points to highlight along with the selected point, set the **series** | **point** | [selectionMode](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/point/selectionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/point/#selectionMode') option.

To learn how to select a point, refer to the [Selection Handling](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/90%20Charts%20-%20End-User%20Interaction/4%20Selection%20Handling '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Selection_Handling') topic.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `ChartElementSelectionMode` enum. This enum accepts the following values: `Single` and `Multiple`.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeaturesmiltiplepointselection/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>