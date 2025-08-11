---
id: dxChart.Options.argumentAxis.strips.startValue
type: Number | Date | String
default: undefined
---
---
##### shortDescription
Defines the strip start value.

---

When **argumentAxis**.[type](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#type) is *"linear"* or *"logarithmic"*, **startValue** specifies exactly where the strip starts. When **argumentAxis**.**type** is *"discrete"*, **startValue** defines which discrete argument the strip starts at. In discrete axes, strips start and end at the edges of discrete argument areas.

TBA: image

To align discrete axis strips with ticks, set **argumentAxis**.[discreteAxisDivisionMode](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#discreteAxisDivisionMode) to *"betweenLabels"*. To align strips with ticks when **discreteAxisDivisionMode** is *"crossLabels"*, implement an [area series](/Documentation/Guide/UI_Components/Chart/Series_Types/Area_Series/) instead of a strip.