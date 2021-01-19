---
id: dxPolarChart.Options.barGroupWidth
type: Number
default: undefined
---
---
##### shortDescription
Specifies a fixed angular width for groups of bars with the same argument, measured in degrees. Takes precedence over the [barGroupPadding](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/barGroupPadding.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#barGroupPadding') option.

##### propertyOf
dxPolarChartSeriesTypes.barpolarseries,dxPolarChartSeriesTypes.stackedbarpolarseries

---
A bar's maximum width is limited. In single-series charts, it cannot be greater than the interval between two [major ticks](/concepts/05%20Widgets/Chart/20%20Axes/07%20Axis%20Ticks.md '/Documentation/Guide/Widgets/Chart/Axes/Axis_Ticks/'). In multi-series charts, it depends on the number of bars in the parent group and this group's actual width. See the [Specify the Bar Width](/concepts/05%20Widgets/Chart/11%20Series%20Types/20%20Bar%20Series/05%20Specify%20the%20Bar%20Width '/Documentation/Guide/Widgets/Chart/Series_Types/Bar_Series/#Specify_the_Bar_Width') article for more information.


#####See Also#####
- [barWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/barWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/#barWidth')
