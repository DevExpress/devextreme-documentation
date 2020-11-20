---
id: dxPieChartSeriesTypesCommonPieChartSeries.selectionMode
acceptValues: 'none' | 'onlyPoint'
type: String
default: 'onlyPoint'
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

#include common-ref-enum with {
    enum: "`PieChartSeriesInteractionMode`",
    values: "`OnlyPoint` and `None`"
}