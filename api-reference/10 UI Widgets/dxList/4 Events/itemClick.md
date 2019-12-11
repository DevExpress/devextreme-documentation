---
type: eventType
---
---
##### shortDescription
Fires when a list item is clicked.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.itemData): object
The data that is bound to the clicked item.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.itemIndex): number | object
The clicked item's index. In a grouped list, the index represents an object defining group and item indexes: { group: 0, item: 0 }.

---
Instead, you can use the [onItemClick](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onItemClick.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onItemClick') option to handle the event.

[note] This event fires only if the [selectionMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectionMode') option is set to *'none'*.

#####See Also#####
- [List - Universal Actions](/concepts/05%20Widgets/List/45%20End-User%20Interaction/05%20Universal%20Actions.md '/Documentation/Guide/Widgets/List/End-User_Interaction/Universal_Actions/')
#include common-link-handleevents