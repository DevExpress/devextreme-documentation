---
id: BaseGauge.Options.scale
type: viz\gauges\base_gauge:BaseGaugeScale
inheritsType: viz\gauges\base_gauge:BaseGaugeScale
---
---
##### shortDescription
Specifies properties of the gauge's scale.

---
To divide a scale, set its **startValue** and **endValue** properties. The scale's major and minor ticks will be calculated automatically, so that the tick labels do not overlap each other. Major ticks will be shown by default. To show minor ticks, set their [visible](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/scale/minorTick/visible.md '/Documentation/ApiReference/UI_Components/dxCircularGauge/Configuration/scale/minorTick/#visible') property to **true**. You can set custom major and minor tick intervals, show custom major and minor ticks, and format tick labels. These and other scale properties are available in the **scale** configuration object.