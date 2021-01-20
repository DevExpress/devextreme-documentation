---
id: dxChart.Options.equalBarWidth
type: Boolean
dep: dxChartSeriesTypes.CommonSeries.ignoreEmptyPoints
---
---
##### shortDescription
Specifies whether all bars should have equal width, even if some values are missing from a series. Applies only to bar-like series.

---
If a value in a series equals to zero or is undefined, the bar visualizing this value will not be displayed on the chart making an empty space. If you need to fill this space by extending the neighbouring bars, set the **equalBarWidth** option to **false**.