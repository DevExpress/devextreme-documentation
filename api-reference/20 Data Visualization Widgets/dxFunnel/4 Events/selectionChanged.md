---
id: dxFunnel.selectionChanged
type: eventType
notUsedInTheme: 
---
---
##### shortDescription
Raised when a funnel item is selected or selection is canceled.

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
Main article: [onSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onSelectionChanged')

#####See Also#####
#include common-link-handleevents