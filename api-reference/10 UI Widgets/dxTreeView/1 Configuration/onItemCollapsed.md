---
EventForAction: ..\4 Events\itemCollapsed.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [itemCollapsed](/api-reference/10%20UI%20Widgets/dxTreeView/4%20Events/itemCollapsed.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemCollapsed') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the clicked item.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): Number
Specifies the index of the collapsed item.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

##### field(e.node): dxtreeviewnode
The collapsed item node.

---
Assign a function to perform a custom action when a tree view item is collapsed.