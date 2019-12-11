---
EventForAction: ..\4 Events\itemHold.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [itemHold](/api-reference/10%20UI%20Widgets/CollectionWidget/4%20Events/itemHold.md '{basewidgetpath}/Events/#itemHold') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the item being held.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): number
Specifies the index of the item being held.

---
Assign a function to perform a custom action when the widget's collection item is being held for a specified time period (see the **itemHoldTimeout** option).