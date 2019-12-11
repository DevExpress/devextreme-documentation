---
hidden: 
type: eventType
---
---
##### shortDescription
Fires when a list item is moved to another position.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the [widget's instance]({basewidgetpath}/Methods/#instance).

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
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
Instead, you can use the [onItemReordered]({basewidgetpath}/Configuration/#onItemReordered) option to handle the event.

#####See Also#####
#include common-link-handleevents