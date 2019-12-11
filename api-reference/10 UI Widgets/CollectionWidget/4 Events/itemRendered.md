---
type: eventType
---
---
##### shortDescription
Fires after a collection item is rendered.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.itemData): object
The current item's data.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.itemIndex): number
The current item's index.

---
Instead, you can use the [onItemRendered](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onItemRendered.md '{basewidgetpath}/Configuration/#onItemRendered') option to handle the event.

#####See Also#####
#include common-link-handleevents