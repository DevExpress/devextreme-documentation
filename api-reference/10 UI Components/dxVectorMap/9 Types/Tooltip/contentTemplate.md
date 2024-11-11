---
uid: viz/vector_map:Tooltip.contentTemplate
type: template | undefined
default: undefined
---
---
##### shortDescription
Specifies a custom template for a tooltip.

##### param(info): MapLayerElement
Information on the area or marker being pressed or hovered over. To distinguish between areas and markers, use the **info**.**layer**.[type](/api-reference/10%20UI%20Components/dxVectorMap/7%20Map%20Elements/Layer/2%20Fields/type.md '/Documentation//ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer/Fields/#type') field.

##### param(element): DxElement
#include common-ref-elementparam with { element: "tooltip" }

##### return: String | Element | jQuery
#include common-template-return-value

---
