---
id: dxVectorMap.Options.onTooltipShown
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a tooltip appears.

##### param(e): viz/vector_map:TooltipShownEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.target): MapLayerElement | dxVectorMapAnnotationConfig
The layer element whose tooltip is shown; described in the [Layer Element](/api-reference/10%20UI%20Components/dxVectorMap/6%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/') section.

---
