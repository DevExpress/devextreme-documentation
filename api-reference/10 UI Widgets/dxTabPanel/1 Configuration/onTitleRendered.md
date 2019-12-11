---
EventForAction: ..\4 Events\titleRendered.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [titleRendered](/api-reference/10%20UI%20Widgets/dxTabPanel/4%20Events/titleRendered.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Events/#titleRendered') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.itemData): Object
The data of the item whose title is rendered.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

---
Assign a function to perform a custom action after a collection item title is rendered.