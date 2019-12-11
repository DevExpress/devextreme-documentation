---
EventForAction: ..\4 Events\itemExpanded.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [itemExpanded](/api-reference/10%20UI%20Widgets/dxTreeView/4%20Events/itemExpanded.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemExpanded') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the expanded item.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): Number
Specifies the index of the expanded item.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

##### field(e.node): dxtreeviewnode
<!--typeFunctionParamDescription1_field8-->
The expanded item node.

---
Assign a function to perform a custom action when a tree view item is expanded.

#####See Also#####
-[Expand and Collapse Nodes - Events](/concepts/05%20Widgets/TreeView/20%20Expand%20and%20Collapse%20Nodes/10%20Events.md '/Documentation/Guide/Widgets/TreeView/Expand_and_Collapse_Nodes/#Events')