---
id: BaseGauge.Options.scale.scaleDivisionFactor
---
---
##### shortDescription
Specifies the minimum distance between two neighboring [major ticks](/api-reference/10%20UI%20Components/BaseGauge/1%20Configuration/scale/tick '{basewidgetpath}/Configuration/scale/tick/') in pixels.

---
The distance between major ticks depends on two interrelated properties: **scaleDivisionFactor** and [tickInterval](/api-reference/10%20UI%20Components/BaseGauge/1%20Configuration/scale/tickInterval.md '{basewidgetpath}/Configuration/scale/#tickInterval'). If the specified tick interval results in a pixel distance between two ticks that is less than the **scaleDivisionFactor** value, this tick interval is ignored.

Use the **scaleDivisionFactor** property only if you want to set the distance between ticks when the scale's measurement units are unknown. Otherwise, utilize **tickInterval**.