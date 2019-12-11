---
EventForAction: ..\4 Events\itemCollapsed.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [itemCollapsed](/api-reference/10%20UI%20Widgets/dxTreeView/4%20Events/itemCollapsed.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemCollapsed') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.itemData): Object
The collapsed item's data.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.itemIndex): Number
The item's index.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/Types/#Event) when you use jQuery.

##### field(e.node): dxTreeViewNode
The item's node.

---
Assign a function to perform a custom action when a tree view item is collapsed.

#####See Also#####
-[Expand and Collapse Nodes - Events](/concepts/05%20Widgets/TreeView/20%20Expand%20and%20Collapse%20Nodes/10%20Events.md '/Documentation/Guide/Widgets/TreeView/Expand_and_Collapse_Nodes/#Events')