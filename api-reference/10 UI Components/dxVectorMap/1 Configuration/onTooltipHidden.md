---
id: dxVectorMap.Options.onTooltipHidden
type: function(e)
default: null
EventForAction: dxVectorMap.tooltipHidden
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a tooltip becomes hidden.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): MapLayerElement | dxVectorMapAnnotationConfig
The layer element whose tooltip is hidden; described in the [Layer Element](/api-reference/10%20UI%20Components/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/') section.

---
