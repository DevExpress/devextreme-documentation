---
type: eventType
---
---
##### shortDescription
Fires when a tree view item is collapsed.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the collapsed item.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): Number
Specifies the index of the collapsed item.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

##### field(e.node): dxtreeviewnode
The collapsed item node.

---
Instead, you can use the [onItemCollapsed](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/onItemCollapsed.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemCollapsed') option to handle the event.

#####See Also#####
#include common-link-handleevents