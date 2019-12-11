---
type: eventType
---
---
##### shortDescription
Fires when the menu item is clicked.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the clicked item.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): number
The index of the clicked item.

---
Instead, you can use the [onItemClick]({basewidgetpath}/Configuration/#onItemClick) option to handle the event.

#####See Also#####
#include common-link-handleevents