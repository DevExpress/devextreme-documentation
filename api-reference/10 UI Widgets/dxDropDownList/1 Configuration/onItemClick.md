---
EventForAction: ..\4 Events\itemClick.md
default: null
type: function(e)
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

##### field(e.itemElement): Object
The item's container.

##### field(e.itemIndex): Number|Object
The clicked item's index. If the widget items are grouped, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

---
Assign a function to perform a custom action when a widget item is clicked.

To navigate to a specific URL when the **itemClick** event fires, assign that URL directly to this option.