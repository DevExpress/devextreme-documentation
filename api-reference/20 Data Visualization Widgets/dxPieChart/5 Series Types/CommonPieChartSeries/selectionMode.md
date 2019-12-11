---
default: 'onlyPoint'
acceptValues: 'none' | 'onlyPoint'
type: String
---
---
##### shortDescription
<p>Specifies the chart elements to highlight when the series is selected.</p>

---
<p>The **PieChart** widget comes with an API that allows you to select a series or a particular point in code. Use the <b>selectionMode</b> property to specify which series elements to select when the series is selected.</p>

<ul>
<li><b>onlyPoint</b><br/>
Changes the appearance of the selected point only.
</li>
<li><b>none</b><br/>
The appearance of the selected series is not changed.
</li>
</ul>

<p>To set custom options for the 'selected' style (which is applied when a series is selected), use the <b>selectionStyle</b> configuration object.</p>

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `PieChartSeriesInteractionMode` enum. This enum accepts the following values: `OnlyPoint` and `None`.