---
id: dxRangeSelector.Options.scale.breaks
type: Array<ScaleBreak>
inherits: ScaleBreak
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
Declares a scale break collection. Applies only if the scale's [type](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale/type.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/#type') is *"continuous"* or *"logarithmic"*.

---
A scale break is an area across an axis that is displayed instead of a section of an axis range. Scale breaks improve the readability of chart sections with large gaps in their ranges.

![DevExtreme HTML5 JavaScript Charts Scale Breaks](/images/ChartJS/visual_elements/scale-breaks_range-selector.png)

Each object in the **breaks** array configures a single scale break.A scale break range should be at least two tick intervals. Otherwise, the break might not be visible.

#####See Also#####
- [breakStyle](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale/breakStyle '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/breakStyle/')