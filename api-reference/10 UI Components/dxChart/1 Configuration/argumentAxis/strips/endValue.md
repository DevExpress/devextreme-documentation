---
id: dxChart.Options.argumentAxis.strips.endValue
type: Number | Date | String
default: undefined
---
---
##### shortDescription
Defines the strip end value.

---

When **argumentAxis**.[type](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#type) is *"linear"* or *"logarithmic"*, **endValue** specifies exactly where the strip ends. When **argumentAxis**.**type** is *"discrete"*, **endValue** defines which discrete argument the strip ends at. In discrete axes, strips start and end at the edges of discrete argument areas.

To align discrete axis strips with ticks, set **argumentAxis**.[discreteAxisDivisionMode](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#discreteAxisDivisionMode) to *"betweenLabels"*. To align strips with ticks when **discreteAxisDivisionMode** is *"crossLabels"*, implement an [area series](/Documentation/Guide/UI_Components/Chart/Series_Types/Area_Series/) instead of a strip. The following image demonstrates the effect of **discreteAxisDivisionMode** on an argument axis strip:

<img src="/images/ChartJS/argumentaxis-strip.png" alt="Two DevExtreme Chart components displaying argument axis strips. The two charts implement different discrete axis division modes. The top chart places argument axis ticks between labels. The bottom chart aligns argument axis ticks with labels." style="border-radius: 16px;"></img>

1. [Start value](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/strips/#startValue)
2. Strip area
3. End value
