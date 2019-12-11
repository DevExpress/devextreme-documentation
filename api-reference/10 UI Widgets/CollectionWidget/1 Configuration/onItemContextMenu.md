---
EventForAction: ..\4 Events\itemContextMenu.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [itemContextMenu](/api-reference/10%20UI%20Widgets/CollectionWidget/4%20Events/itemContextMenu.md '{basewidgetpath}/Events/#itemContextMenu') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the item.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): number
Specifies the index of the item.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

---
Assign a function to perform a custom action when the right mouse button is clicked when the pointer is over a widget item, or when the "sustained" (also known as a long press) touch action is performed.