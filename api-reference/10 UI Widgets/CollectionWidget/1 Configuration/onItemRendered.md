---
EventForAction: ..\4 Events\itemRendered.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [itemRendered](/api-reference/10%20UI%20Widgets/CollectionWidget/4%20Events/itemRendered.md '{basewidgetpath}/Events/#itemRendered') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.itemData): Object
The current item's data.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.itemIndex): Number
The current item's index.

---
Assign a function to perform a custom action after a collection item is rendered.