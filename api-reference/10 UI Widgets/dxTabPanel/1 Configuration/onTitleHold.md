---
EventForAction: ..\4 Events\titleHold.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [titleHold](/api-reference/10%20UI%20Widgets/dxTabPanel/4%20Events/titleHold.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Events/#titleHold') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.itemData): Object
The data of the item whose title is held.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

---
Assign a function to perform a custom action when the widget's collection item title is being held for a specified time period (see the [itemHoldTimeout](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemHoldTimeout.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#itemHoldTimeout') option).