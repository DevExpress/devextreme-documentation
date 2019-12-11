---
EventForAction: ..\4 Events\selectionChanged.md
default: null
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A handler for the **selectionChanged** event. Executed after a funnel item's selection state is changed in the UI or programmatically.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.item): dxFunnelItem
The [Item](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/6%20Item '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/') object.

---
See [onItemClick](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/onItemClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onItemClick') to learn how to implement selection.

#####See Also#####
- [selectionMode](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/selectionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#selectionMode')
- **item**.[selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/item/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/item/selectionStyle/')