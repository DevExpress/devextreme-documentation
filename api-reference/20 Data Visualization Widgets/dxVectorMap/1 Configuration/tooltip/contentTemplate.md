---
id: dxVectorMap.Options.tooltip.contentTemplate
type: template
default: undefined
---
---
##### shortDescription
Specifies a custom template for a tooltip.

##### param(info): MapLayerElement
Information on the area or marker being pressed or hovered over. To distinguish between areas and markers, use the **info**.**layer**.[type](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Layer/2%20Fields/type.md '/Documentation//ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer/Fields/#type') field.

##### param(element): dxElement
#include common-ref-elementparam with { element: "tooltip" }

##### return: String | Element | jQuery
#include common-template-return-value

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/TooltipHTMLSupport/"
}