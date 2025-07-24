---
id: dxChartSeriesTypes.CommonSeries.barPadding
type: Number | undefined
default: undefined
---
---
##### shortDescription
Controls the padding and consequently the width of all bars in a series using relative units. Ignored if the [barWidth](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/barWidth.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#barWidth') property is set.

##### propertyOf
dxChartSeriesTypes.BarSeries,dxChartSeriesTypes.StackedBarSeries,dxChartSeriesTypes.FullStackedBarSeries,dxChartSeriesTypes.RangeBarSeries

---
This property accepts a ratio between bar width and empty space (from 0 to 1). For instance, when **barPadding** is 0, the component displays full-width bars. When the property is 0.5, Chart displays half-width bars.

[note] Bar and padding widths depend on the allocated space of each bar. Properties such as [ignoreEmptyPoints](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/#ignoreEmptyPoints) can change this allocated space.

#####See Also#####
- [Specify the Bar Width](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/20%20Bar%20Series/05%20Specify%20the%20Bar%20Width '/Documentation/Guide/UI_Components/Chart/Series_Types/Bar_Series/#Specify_the_Bar_Width')
- [barGroupPadding](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/barGroupPadding.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#barGroupPadding')
- **series**.[minBarSize](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/minBarSize.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#minBarSize')