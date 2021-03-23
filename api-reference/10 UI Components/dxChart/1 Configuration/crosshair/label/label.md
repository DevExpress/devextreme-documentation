---
id: dxChart.Options.crosshair.label
type: Object
---
---
##### shortDescription
Configures the crosshair labels.

---
Crosshair labels appear on the chart axes when a user pauses on a series point. They display the argument and the value of this series point.

![DevExtreme HTML5 Charts CrosshairLabels](/images/ChartJS/visual_elements/crosshair_labels.png)

There are two crosshair labels on a chart - one for each crosshair line, and the **label** object described here configures both. If you need to set properties individually for each label, use the **label** object within the **crosshair**.[horizontalLine](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/crosshair/horizontalLine '/Documentation/ApiReference/UI_Components/dxChart/Configuration/crosshair/horizontalLine/') or **crosshair**.[verticalLine](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/crosshair/verticalLine '/Documentation/ApiReference/UI_Components/dxChart/Configuration/crosshair/verticalLine/') object. Individual settings override common ones.

Because the crosshair labels are hidden by default, assign **true** to the **label**.**visible** field if you need them to be shown.