---
type: eventType
---
---
##### shortDescription
Fires when a widget item title is clicked.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.itemData): object
The clicked item's data.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.itemIndex): number
The clicked item's index.

---
Instead, you can use the [onItemTitleClick](/api-reference/10%20UI%20Widgets/dxAccordion/1%20Configuration/onItemTitleClick.md '/Documentation/ApiReference/UI_Widgets/dxAccordion/Configuration/#onItemTitleClick') option to handle the event.

#####See Also#####
#include common-link-handleevents