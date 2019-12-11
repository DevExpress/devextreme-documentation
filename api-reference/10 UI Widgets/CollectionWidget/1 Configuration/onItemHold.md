---
EventForAction: ..\4 Events\itemHold.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [itemHold](/api-reference/10%20UI%20Widgets/CollectionWidget/4%20Events/itemHold.md '{basewidgetpath}/Events/#itemHold') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.itemData): Object
The data of the item being held.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.itemIndex): Number
The item's index.

---
Assign a function to perform a custom action when the widget's collection item is being held for a specified time period (see the **itemHoldTimeout** option).