---
id: dxChartSeriesTypes.CommonSeries.barWidth
type: Number | undefined
default: undefined
---
---
##### shortDescription
Specifies a fixed width for all bars in a series, measured in pixels. Takes precedence over the [barPadding](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/barPadding.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#barPadding') property.

##### propertyOf
dxChartSeriesTypes.BarSeries,dxChartSeriesTypes.StackedBarSeries,dxChartSeriesTypes.FullStackedBarSeries,dxChartSeriesTypes.RangeBarSeries

---
A bar's maximum width is limited. In single-series charts, it cannot be greater than the interval between two [major ticks](/concepts/05%20UI%20Components/Chart/20%20Axes/07%20Axis%20Ticks.md '/Documentation/Guide/UI_Components/Chart/Axes/Axis_Ticks/'). In multi-series charts, it depends on the number of bars in the parent group and this group's actual width. See the [Specify the Bar Width](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/20%20Bar%20Series/05%20Specify%20the%20Bar%20Width '/Documentation/Guide/UI_Components/Chart/Series_Types/Bar_Series/#Specify_the_Bar_Width') article for more information.


#####See Also#####
- [barGroupWidth](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/barGroupWidth.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#barGroupWidth')
- **series**.[minBarSize](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/minBarSize.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#minBarSize')
