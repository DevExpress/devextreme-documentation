---
id: dxRangeSelector.Options.scale.breaks
type: Array<ScaleBreak>
inherits: ScaleBreak
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
Declares a scale break collection. Applies only if the scale's [type](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#type') is *"continuous"* or *"logarithmic"*.

---
A scale break allows breaking off a part of the scale to improve the readability of a range selector with high amplitude values.

![DevExtreme HTML5 JavaScript Charts Scale Breaks](/images/ChartJS/visual_elements/scale-breaks_range-selector.png)

Each object in the **breaks** array configures a single scale break. Note that a scale break is visible only if its range exceeds the tick interval.

#####See Also#####
- [breakStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/breakStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/breakStyle/')