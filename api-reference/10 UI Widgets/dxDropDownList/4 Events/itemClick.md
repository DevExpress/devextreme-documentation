---
type: eventType
---
---
##### shortDescription
Fires when a widget item is clicked.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.itemData): object
The clicked item's data.

##### field(e.itemElement): object
The item's container.

##### field(e.itemIndex): number | object
The clicked item's index. If the widget items are grouped, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

---
Instead, you can use the [onItemClick](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/onItemClick.md '{basewidgetpath}/Configuration/#onItemClick') option to handle the event.

#####See Also#####
#include common-link-handleevents