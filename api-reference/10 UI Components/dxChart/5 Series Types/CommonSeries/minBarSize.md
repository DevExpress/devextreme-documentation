---
id: dxChartSeriesTypes.CommonSeries.minBarSize
type: Number | undefined
default: undefined
---
---
##### shortDescription
Specifies the minimal possible height (or length if the chart is [rotated](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/rotated.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#rotated')) of a bar in pixels. Applies only to bar-like series.

##### propertyOf
dxChartSeriesTypes.StackedBarSeries,dxChartSeriesTypes.FullStackedBarSeries,dxChartSeriesTypes.BarSeries,dxChartSeriesTypes.RangeBarSeries

---
If the disparity between the smallest and largest values in the data source is considerable, small values are visualized by tiny bars that may be difficult to interact with. In this case, specify the minimal possible height (or length if the chart is rotated) for bars using the **minBarSize** property.

#####See Also#####
- [barPadding](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/barPadding.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#barPadding')
- [barWidth](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/barWidth.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#barWidth')