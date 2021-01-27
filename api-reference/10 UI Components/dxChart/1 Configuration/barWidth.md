---
id: dxChart.Options.barWidth
type: Number
dep: dxChartSeriesTypes.CommonSeries.barPadding
---
---
##### shortDescription
Controls the width of bars in the UI component. Applies only to bar-like series and when the [equalBarWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/equalBarWidth.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#equalBarWidth') property is **true**.

---
This property accepts values from 0 to 1 excluding 0. The assigned value specifies the correlation between a bar and the empty space around it. A value close to 0 makes the bar very thin leaving a lot of space, and 1, conversely, makes the bar very thick leaving no space.

[note]When adapting to the small screen or container size, the UI component may ignore this property.