---
id: dxChart.Options.argumentAxis.axisDivisionFactor
---
---
##### shortDescription
Specifies the minimum distance between two neighboring major ticks in pixels. Applies only to the axes of the *"continuous"* and *"logarithmic"* [types](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#type').

---
For axes displaying numbers, the distance between major ticks depends on two interconnected properties: **axisDivisionFactor** and [tickInterval](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/tickInterval '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/tickInterval/'). Consider that you have specified both these properties. If the specified tick interval leads the pixel distance between two ticks to being less than the **axisDivisionFactor** value, this tick interval will be ignored.

Use the **axisDivisionFactor** property only if you need to set the distance between ticks not knowing the axis values. Otherwise, use the **tickInterval** property.