---
id: dxChart.Options.argumentAxis.strips.endValue
type: Number | Date | String
default: undefined
---
---
##### shortDescription
Defines the strip's end value.

---

When **argumentAxis**.[type](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#type') is *"linear"* or *"logarithmic"*, **endValue** specifies the strip's end. When **argumentAxis**.**type** is *"discrete"*, **endValue** defines at which discrete argument the strip ends. In discrete axes, strips start and end at the edges of discrete argument areas.

To align discrete axis strips with ticks, set **argumentAxis**.[discreteAxisDivisionMode](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/discreteAxisDivisionMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#discreteAxisDivisionMode') to *"betweenLabels"*. To align strips with ticks when **discreteAxisDivisionMode** is *"crossLabels"*, implement an [area series](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/30%20Area%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Area_Series/') instead of a strip. The following image demonstrates the effect of **discreteAxisDivisionMode** on an argument axis strip:

<img src="/images/ChartJS/argumentaxis-strip.png" alt="Two DevExtreme Chart components displaying argument axis strips. The two charts implement different discrete axis division modes. The top chart places argument axis ticks between labels. The bottom chart aligns argument axis ticks with labels." style="border-radius: 16px;"></img>

1. [Start value](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/strips/startValue.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/strips/#startValue')
2. Strip area
3. End value
