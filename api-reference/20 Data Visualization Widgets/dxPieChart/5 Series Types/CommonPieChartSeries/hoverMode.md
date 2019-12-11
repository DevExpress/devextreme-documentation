---
default: 'onlyPoint'
acceptValues: 'onlyPoint' | 'none'
type: String
---
---
##### shortDescription
Specifies the chart elements to highlight when a series is hovered over.

---
<p>The following values are available.</p>

<ul>
<li><b>onlyPoint</b><br/>
Changes the appearance of the hovered point only.
</li>
<li><b>none</b><br/>
The appearance of the hovered series is not changed.
</li>
</ul>

<p>To set custom options for the 'hover' style (which is applied when a series is hovered over), use the <b>hoverStyle</b> configuration object.</p>

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `PieChartSeriesInteractionMode` enum. This enum accepts the following values: `OnlyPoint` and `None`.