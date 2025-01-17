---
uid: viz/bar_gauge:Tooltip.contentTemplate
type: template | undefined
default: undefined
---
---
##### shortDescription
Specifies a custom template for a tooltip.

##### param(scaleValue): Object
Information on the bar value.

##### field(scaleValue.index): Number
The index of the bar being pressed or hovered over. 0 for the bar closest to the gauge's center, 1 for the bar over it, etc.

##### field(scaleValue.value): Number
The raw value.

##### field(scaleValue.valueText): String
The [formatted](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/tooltip/format.md '{basewidgetpath}/Configuration/tooltip/#format') value converted to a string.

##### param(element): DxElement
#include common-ref-elementparam with { element: "tooltip" }

##### return: String | Element | jQuery
#include common-template-return-value

---
