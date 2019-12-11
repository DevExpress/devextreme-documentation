---
EventForAction: ..\4 Events\titleClick.md
default: null
type: function(e) | String
---
---
##### shortDescription
A handler for the [titleClick](/api-reference/10%20UI%20Widgets/dxTabPanel/4%20Events/titleClick.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Events/#titleClick') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.itemData): Object
The data of the item whose title is clicked.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

---
Assign a function to perform a custom action when a widget item title is clicked.