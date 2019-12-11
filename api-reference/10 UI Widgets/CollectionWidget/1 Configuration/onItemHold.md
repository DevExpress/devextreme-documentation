---
EventForAction: ..\4 Events\itemHold.md
default: null
type: function
---
---
##### shortDescription
A handler for the [itemHold](/api-reference/10%20UI%20Widgets/CollectionWidget/4%20Events/itemHold.md '{basewidgetpath}/Events/#itemHold') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

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
Assign a function to perform a custom action when the widget's collection item is being held for a specified time period (see the **itemHoldTimeout** option).