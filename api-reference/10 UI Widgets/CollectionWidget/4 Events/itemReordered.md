---
hidden: 
type: eventType
---
---
##### shortDescription
Fires when a list item is moved to another position.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.itemData): object
The reordered item's data.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.itemIndex): number | object
The index of the item after reordering. This field holds the same value as **toIndex**.

##### field(e.fromIndex): number
The item's previous index.

##### field(e.toIndex): number
The item's current index.

---
Instead, you can use the [onItemReordered]({basewidgetpath}/Configuration/#onItemReordered) option to handle the event.

#####See Also#####
#include common-link-handleevents