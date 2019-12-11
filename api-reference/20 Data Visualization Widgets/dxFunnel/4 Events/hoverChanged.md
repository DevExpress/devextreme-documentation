---
id: dxFunnel.hoverChanged
type: eventType
notUsedInTheme: 
---
---
##### shortDescription
Raised after the pointer enters or leaves a [funnel item](/concepts/05%20Widgets/Funnel/14%20Funnel%20Items/00%20Overview.md '/Documentation/Guide/Widgets/Funnel/Funnel_Items/Overview/').

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.item): dxFunnelItem
The [Item](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/6%20Item '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/') object.

##### field(e.model): Object
The model data. Available only if you use Knockout.

---
Main article: [onHoverChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/onHoverChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onHoverChanged')

#####See Also#####
#include common-link-handleevents