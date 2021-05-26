---
id: dxFunnel.Options.onHoverChanged
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed after the pointer enters or leaves a [funnel item](/concepts/05%20UI%20Components/Funnel/14%20Funnel%20Items/00%20Overview.md '/Documentation/Guide/UI_Components/Funnel/Funnel_Items/Overview/').

##### param(e): Object
Information about the event.

##### field(e.component): dxFunnel
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.item): dxFunnelItem
The [Item](/api-reference/10%20UI%20Components/dxFunnel/6%20Item '/Documentation/ApiReference/UI_Components/dxFunnel/Item/') object.

##### field(e.model): any
The model data. Available only if you use Knockout.

---
To identify whether the pointer has entered or left the funnel item, call the item's [isHovered()](/api-reference/10%20UI%20Components/dxFunnel/6%20Item/3%20Methods/isHovered().md 'Documentation/ApiReference/UI_Components/dxFunnel/Item/Methods/#isHovered') method.