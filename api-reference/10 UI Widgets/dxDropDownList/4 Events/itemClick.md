---
type: eventType
---
---
##### shortDescription
Fires when a widget item is clicked.

##### param(e): object
Provides function parameters.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the clicked item.

##### field(e.itemElement): object
An HTML element of the item.

##### field(e.itemIndex): number | object
The index of the clicked item. If the widget items are grouped, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

---
Instead, you can use the [onItemClick](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/onItemClick.md '{basewidgetpath}/Configuration/#onItemClick') option to handle the event.

#####See Also#####
#include common-link-handleevents