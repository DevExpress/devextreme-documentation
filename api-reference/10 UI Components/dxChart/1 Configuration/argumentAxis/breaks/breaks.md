---
id: dxChart.Options.argumentAxis.breaks
type: Array<ScaleBreak>
inherits: ScaleBreak
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
Declares a scale break collection. Applies only if the axis' [type](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#type') is *"continuous"* or *"logarithmic"*.

---
A scale break allows breaking off a part of the axis to improve the readability of a chart with high amplitude values.

![DevExtreme HTML5 JavaScript Charts Scale Breaks](/images/ChartJS/visual_elements/scale-breaks_arg-axis.png)

Each object in the **breaks** array configures a single scale break. We recommend that a scale break range exceeds the tick interval at least twice. Otherwise, the scale break might not be visible.

#####See Also#####
- [breakStyle](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/breakStyle '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/breakStyle/')
