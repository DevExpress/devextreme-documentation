---
id: dxChart.Options.autoHidePointMarkers
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether to hide [series point markers](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/point/symbol.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/point/#symbol') automatically to reduce visual clutter.

---
Point markers are hidden when:

- In a single-series chart, at least half of all point markers overlap adjacent markers.
- In a multi-series chart, all point markers of a series overlap adjacent markers and other series markers.

The following image demonstrates the effect of **autoHidePointMarkers**:

<img src="/images/ChartJS/chart-autohidepointmarkers-example.png" style="width: 700px;" />

1. `false`
2. `true`

#####See Also#####
- **series**.[aggregation](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/aggregation '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/aggregation/')