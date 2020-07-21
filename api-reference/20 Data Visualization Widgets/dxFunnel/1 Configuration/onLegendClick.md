---
id: dxFunnel.Options.onLegendClick
type: function(e) | String
default: null
EventForAction: dxFunnel.legendClick
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a [legend item](/concepts/05%20Widgets/Funnel/35%20Legend/00%20Overview.md '/Documentation/Guide/Widgets/Funnel/Legend/Overview/') is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.item): dxFunnelItem
The [Item](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/6%20Item '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/') object.

##### field(e.model): Object
The model data. Available only if you use Knockout.

---
#####See Also#####
- [legend](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/legend '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/legend/')