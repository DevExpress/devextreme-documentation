---
EventForAction: ..\4 Events\hoverChanged.md
default: null
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A function that is executed after the pointer enters or leaves a [funnel item](/concepts/05%20Widgets/Funnel/14%20Funnel%20Items/00%20Overview.md '/Documentation/Guide/Widgets/Funnel/Funnel_Items/Overview/').

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
To identify whether the pointer has entered or left the funnel item, call the item's [isHovered()](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/6%20Item/3%20Methods/isHovered().md 'Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/Methods/#isHovered') method.