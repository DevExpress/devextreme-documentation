---
EventForAction: ..\4 Events\selectionChanged.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [selectionChanged](/api-reference/10%20UI%20Widgets/dxTagBox/4%20Events/selectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Events/#selectionChanged') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.addedItems): Array<String, Number, Object>
The data of the items that have been selected.

##### field(e.removedItems): Array<String, Number, Object>
The data of the items whose selection has been canceled.

---
Assign a function to perform a custom action when the selection changes.