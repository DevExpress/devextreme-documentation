---
uid: viz/funnel:Tooltip.contentTemplate
type: template | undefined
default: undefined
---
---
##### shortDescription
Specifies a custom template for a tooltip.

##### param(info): Object
Information on the funnel item being pressed or hovered over.

##### field(info.item): dxFunnelItem
The [Item](/api-reference/10%20UI%20Components/dxFunnel/6%20Item '/Documentation/ApiReference/UI_Components/dxFunnel/Item/') object.

##### field(info.percent): Number
The item's percentage value.

##### field(info.percentText): String
The item's [formatted](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/label/format.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/label/#format') percentage value converted to a string.

##### field(info.value): Number
The raw item value.

##### field(info.valueText): String
The item's [formatted](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/label/format.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/label/#format') value converted to a string.

##### param(element): DxElement
#include common-ref-elementparam with { element: "tooltip" }

##### return: String | Element | jQuery
#include common-template-return-value

---
