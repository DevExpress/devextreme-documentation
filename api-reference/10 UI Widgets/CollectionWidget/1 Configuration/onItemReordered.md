---
EventForAction: ..\4 Events\itemReordered.md
hidden: 
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [itemReordered]({basewidgetpath}/Events/#itemReordered) event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the [widget's instance]({basewidgetpath}/Methods/#instance).

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the reordered item.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): number | object
Specifies the current index of the item after reordering. This field holds the same value as **toIndex**.

##### field(e.fromIndex): number
Specifies the previous index of the item.

##### field(e.toIndex): number
Specifies the current index of the item.

---
Assign a function to perform a custom action when a list item is moved to another position.