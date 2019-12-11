---
default: 'onlyPoint'
acceptValues: 'none' | 'onlyPoint'
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

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `PieChartSeriesInteractionMode` enum. This enum accepts the following values: `OnlyPoint` and `None`.