---
EventForAction: ..\4 Events\selectionChanged.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **selectionChanged** event. Raised after an item is selected or unselected.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.addedItems): Array<any>
The data of the items that have been selected.

##### field(e.removedItems): Array<any>
The data of the items whose selection has been canceled.

---
Assign a function to perform a custom action after a collection item is selected or unselected.