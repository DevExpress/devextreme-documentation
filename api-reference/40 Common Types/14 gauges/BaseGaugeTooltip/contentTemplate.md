---
uid: viz/gauges/base_gauge:BaseGaugeTooltip.contentTemplate
type: template | undefined
default: undefined
---
---
##### shortDescription
Specifies a custom template for a tooltip.

##### param(scaleValue): Object
Information on the scale value.

##### field(scaleValue.value): Number
The raw value.

##### field(scaleValue.valueText): String
The [formatted](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/tooltip/format.md '{basewidgetpath}/Configuration/tooltip/#format') value converted to a string.

##### param(element): DxElement
#include common-ref-elementparam with { element: "tooltip" }

##### return: String | Element | jQuery
#include common-template-return-value

---
