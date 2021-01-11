---
id: dxVectorMap.Options.onTooltipHidden
type: function(e)
default: null
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
The layer element whose tooltip is hidden; described in the [Layer Element](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/') section.

---
