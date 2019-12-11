---
type: eventType
---
---
##### shortDescription
Fires when the widget's collection item is being held for the time period specified by the **itemHoldTimeout** option.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the item being held.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): number
Specifies the index of the item being held.

---
Instead, you can use the [onItemHold](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onItemHold.md '{basewidgetpath}/Configuration/#onItemHold') option to handle the event.

#####See Also#####
#include common-link-handleevents