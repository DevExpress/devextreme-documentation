---
id: dxChart.Options.maxBubbleSize
type: Number
default: 0.2
---
---
##### shortDescription
Specifies a coefficient determining the diameter of the largest bubble.

##### propertyOf
dxChartSeriesTypes.BubbleSeries

---
When defining a bubble series, you are required to specify a [size field](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/sizeField.md '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/BubbleSeries/#sizeField'). The largest size value will be represented on the chart by the largest bubble. Its visual diameter will be calculated by the following formula.

*d = maxBubbleSize \* min(height, width)*

Normally, the *height* and *width* from this formula equal the size of the UI component container. However, when several [panes](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/panes '/Documentation/ApiReference/UI_Components/dxChart/Configuration/panes/') are used in the UI component, the *height* and *width* equal the pane size.