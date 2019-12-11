---
EventForAction: ..\4 Events\itemClick.md
default: null
type: function(e) | String
---
---
##### shortDescription
A handler for the **itemClick** event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.itemData): Object
The clicked item's data.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.itemIndex): Number
The item's index.

---
Assign a function to perform a custom action when the menu item is clicked.

To navigate to a specific URL when the **itemClick** event fires, assign that URL or the anchor part (#) of that URL directly to this option as a string.