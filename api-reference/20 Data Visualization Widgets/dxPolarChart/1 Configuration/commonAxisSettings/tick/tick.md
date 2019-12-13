---
id: dxPolarChart.Options.commonAxisSettings.tick
type: Object
---
---
##### shortDescription
An object defining the configuration options for [axis ticks](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/060%20Axis%20Ticks/01%20Axis%20Ticks.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axis_Ticks').

---
Ticks divide an axis into equal sections by a step whose value is determined automatically, or by the **tickInterval** and **axisDivisionFactor** options of an axis. Ticks improve the readability of charts, but are not visible in the **PolarChart** widget by default. To set up tick configuration options, define the **tick** object within the **argumentAxis** or **valueAxis** configuration object. To set common options for all ticks in a chart, define the **tick** object within the **commonAxisSettings** configuration object. Note that the values that are set for an individual axis override the corresponding common values.