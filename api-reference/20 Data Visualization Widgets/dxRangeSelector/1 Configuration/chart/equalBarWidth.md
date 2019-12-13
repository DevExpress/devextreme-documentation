---
id: dxRangeSelector.Options.chart.equalBarWidth
type: Boolean
dep: dxChartSeriesTypes.CommonSeries.ignoreEmptyPoints
---
---
##### shortDescription
Specifies whether all bars in a series must have the same width, or may have different widths if any points in other series are missing.

---
If some values for a series are set to zero or not specified, bars that represent these values will be missing from the chart. To fill the empty area by extending the width of the neighboring bars, set the **equalBarWidth** property to **false**. The bars will have different widths, but there will be no empty areas.

To set a custom width for bars, as well as the spacing between bars, use the [barWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/barWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#barWidth') option.

If the widget's container is not large enough to contain bars of the specified width along with the specified spacing between them, the spacing will be ignored.