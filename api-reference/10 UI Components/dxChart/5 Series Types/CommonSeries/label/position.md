---
id: dxChartSeriesTypes.CommonSeries.label.position
type: Enums.RelativePosition
default: 'outside'
---
---
##### shortDescription
Specifies whether to display point labels inside or outside of series points. Applies only to bubble, range-like and bar-like series.

##### propertyOf
dxChartSeriesTypes.BarSeries,dxChartSeriesTypes.StackedBarSeries,dxChartSeriesTypes.FullStackedBarSeries,dxChartSeriesTypes.RangeBarSeries,dxChartSeriesTypes.RangeAreaSeries,dxChartSeriesTypes.BubbleSeries

---
[note]

- The default value for [*full-stacked bar*](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/FullStackedBarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/FullStackedBarSeries/') and [*stacked bar*](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/StackedBarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/StackedBarSeries/') series is *"inside"*.
- If **valueAxis**.**label**.[position](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/label/position.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/label/#position') is *"outside"* and the series type is [*bar*](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/BarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/BarSeries/') or [*stacked bar*](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/StackedBarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/StackedBarSeries/'), the component may position labels of the highest bars inside. To ensure Chart always displays labels outside, increase [maxValueMargin](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/maxValueMargin.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/#maxValueMargin').

[/note]
