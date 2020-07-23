---
id: BaseGauge.Options.tooltip.contentTemplate
type: template
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
The [formatted](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/format.md '{basewidgetpath}/Configuration/tooltip/#format') value converted to a string.

##### param(element): dxElement
#include common-ref-elementparam with { element: "tooltip" }

##### return: String | Element | jQuery
#include common-template-return-value

---
