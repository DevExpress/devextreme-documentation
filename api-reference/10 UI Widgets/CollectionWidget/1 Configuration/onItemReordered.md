---
EventForAction: ..\4 Events\itemReordered.md
hidden: 
default: null
type: function
---
---
##### shortDescription
A handler for the [itemReordered]({basewidgetpath}/Events/#itemReordered) event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the reordered item.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): number | object
Specifies the current index of the item after reordering. This field holds the same value as <b>toIndex</b>.

##### field(e.fromIndex): number
Specifies the previous index of the item.

##### field(e.toIndex): number
Specifies the current index of the item.

---
Assign a function to perform a custom action when a list item is moved to another position.