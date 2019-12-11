---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Raised after the pointer enters or leaves a [funnel item](/concepts/05%20Widgets/Funnel/14%20Funnel%20Items/00%20Overview.md '/Documentation/Guide/Widgets/Funnel/Funnel_Items/Overview/').

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.item): dxFunnelItem
The [Item](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/6%20Item '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/') object.

---
Main article: [onHoverChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/onHoverChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onHoverChanged')

#####See Also#####
#include common-link-handleevents