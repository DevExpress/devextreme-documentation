---
EventForAction: ..\4 Events\nodesInitialized.md
default: null
type: function(e)
---
---
##### shortDescription
A function that is executed after the loaded nodes are initialized.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.root): dxTreeListNode
The root node.

---
Use this function to modify the [node fields](/api-reference/10%20UI%20Widgets/dxTreeList/4%20Node '/Documentation/ApiReference/UI_Widgets/dxTreeList/Node/'). You can traverse the tree using the [forEachNode(callback)](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/forEachNode(callback).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#forEachNodecallback') method or implement your custom algorithm. Within this algorithm, start traversing from the root node, which is available via the function parameter's **root** field.  Every node, including the root one, provides access to its child nodes in the **children** field, which allows traversing the whole tree.