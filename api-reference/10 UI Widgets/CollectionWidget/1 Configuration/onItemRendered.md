---
EventForAction: ..\4 Events\itemRendered.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [itemRendered](/api-reference/10%20UI%20Widgets/CollectionWidget/4%20Events/itemRendered.md '{basewidgetpath}/Events/#itemRendered') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the item to be rendered.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): number
Specifies the index of the rendered item.

---
Assign a function to perform a custom action after a collection item is rendered.