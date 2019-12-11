---
EventForAction: ..\4 Events\itemTitleClick.md
default: null
type: function(e) | String
---
---
##### shortDescription
A handler for the [itemTitleClick](/api-reference/10%20UI%20Widgets/dxAccordion/4%20Events/itemTitleClick.md '/Documentation/ApiReference/UI_Widgets/dxAccordion/Events/#itemTitleClick') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.itemData): Object
The clicked item's data.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.itemIndex): Number
The clicked item's index.

---
