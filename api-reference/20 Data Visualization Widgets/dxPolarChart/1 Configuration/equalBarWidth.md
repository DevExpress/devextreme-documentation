---
id: dxPolarChart.Options.equalBarWidth
type: Boolean
dep: dxPolarChartSeriesTypes.CommonPolarChartSeries.ignoreEmptyPoints
---
---
##### shortDescription
Specifies whether or not all bars in a series must have the same angle, or may have different angles if any points in other series are missing.

---
If some values for a series are set to zero or not specified, bars that represent these values will be missing from the chart. To fill the empty area by extending the angle of the neighboring bars, set the **equalBarWidth** property to **false**. The bars will have different angles, but there will be no empty areas.

To set a custom angle for bars, as well as the spacing between bars, use the [barWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/barWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#barWidth') option.

If the widget's container is not large enough to contain bars of the specified width along with the specified spacing between them, the spacing will be ignored.