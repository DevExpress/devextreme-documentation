---
type: eventType
---
---
##### shortDescription
Fires when the widget's collection item is being held for the time period specified by the **itemHoldTimeout** option.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.itemData): object
The data of the item being held.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.itemIndex): number
The item's index.

---
Instead, you can use the [onItemHold](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onItemHold.md '{basewidgetpath}/Configuration/#onItemHold') option to handle the event.

#####See Also#####
#include common-link-handleevents