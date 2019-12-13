---
id: dxVectorMap.tooltipHidden
type: eventType
notUsedInTheme: 
---
---
##### shortDescription
Raised when a tooltip becomes hidden.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): MapLayerElement
The layer element whose tooltip is hidden; described in the [Layer Element](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/') section.

---
Main article: [onTooltipHidden](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/onTooltipHidden.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onTooltipHidden')

#####See Also#####
#include common-link-handleevents