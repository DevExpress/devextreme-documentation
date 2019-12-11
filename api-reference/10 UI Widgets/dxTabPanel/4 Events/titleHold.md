---
type: eventType
---
---
##### shortDescription
Fires when the widget item title is being held for the time period specified by the [itemHoldTimeout](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemHoldTimeout.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#itemHoldTimeout') option.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.itemData): object
The data of the item whose title is held.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

---
Instead, you can use the [onTitleHold](/api-reference/10%20UI%20Widgets/dxTabPanel/1%20Configuration/onTitleHold.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#onTitleHold') option to handle the event.

#####See Also#####
#include common-link-handleevents