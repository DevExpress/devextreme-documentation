---
id: dxPolarChartArgumentAxis.axisDivisionFactor
type: Number
default: 50
---
---
##### shortDescription
Specifies the minimum distance between two neighboring major ticks in pixels. Applies only to the axes of the *"continuous"* and *"logarithmic"* [types](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#type').

---
For axes displaying numbers, the distance between major ticks depends on two interconnected options: **axisDivisionFactor** and [tickInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/tickInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/tickInterval/'). Consider that you have specified both these options. If the specified tick interval leads the pixel distance between two ticks to being less than the **axisDivisionFactor** value, this tick interval will be ignored.

Use the **axisDivisionFactor** option only if you need to set the distance between ticks not knowing the axis values. Otherwise, use the **tickInterval** option.