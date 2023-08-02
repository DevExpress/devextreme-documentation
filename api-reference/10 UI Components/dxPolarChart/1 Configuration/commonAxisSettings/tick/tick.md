---
id: dxPolarChart.Options.commonAxisSettings.tick
type: viz/polar_chart:CommonAxisSettingsTick
inheritsType: viz/polar_chart:CommonAxisSettingsTick
---
---
##### shortDescription
An object defining the configuration properties for [axis ticks](/concepts/05%20UI%20Components/PolarChart/10%20Visual%20Elements/060%20Axis%20Ticks/01%20Axis%20Ticks.md '/Documentation/Guide/UI_Components/PolarChart/Visual_Elements/#Axis_Ticks').

---
Ticks divide an axis into equal sections by a step whose value is determined automatically, or by the **tickInterval** and **axisDivisionFactor** properties of an axis. Ticks improve the readability of charts, but are not visible in the PolarChart UI component by default. To set up tick configuration properties, define the **tick** object within the **argumentAxis** or **valueAxis** configuration object. To set common properties for all ticks in a chart, define the **tick** object within the **commonAxisSettings** configuration object. Note that the values that are set for an individual axis override the corresponding common values.