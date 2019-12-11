---
EventForAction: ..\4 Events\nodesInitialized.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **nodesInitialized** event. Executed after all nodes in the widget are initialized.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget's [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.root): dxTreeListNode
The root node.

---
This handler is  executed once - at the beginning of the widget's lifetime. You can perform operations on the node structure within this handler.