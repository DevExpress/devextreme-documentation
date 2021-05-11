---
id: dxFunnel.Options.onLegendClick
type: function(e) | String
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a [legend item](/concepts/05%20UI%20Components/Funnel/35%20Legend/00%20Overview.md '/Documentation/Guide/UI_Components/Funnel/Legend/Overview/') is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): dxFunnel
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.item): dxFunnelItem
The [Item](/api-reference/10%20UI%20Components/dxFunnel/6%20Item '/Documentation/ApiReference/UI_Components/dxFunnel/Item/') object.

##### field(e.model): any
The model data. Available only if you use Knockout.

---
#####See Also#####
- [legend](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/legend '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/legend/')