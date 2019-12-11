---
EventForAction: ..\4 Events\itemReordered.md
hidden: 
default: null
type: function(e)
---
---
##### shortDescription
A function that is executed after a collection item is moved to another position.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.itemData): Object
The reordered item's data.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.itemIndex): Number | Object
The index of the item after reordering. This field holds the same value as **toIndex**.

##### field(e.fromIndex): Number
The item's previous index.

##### field(e.toIndex): Number
The item's current index.

---
