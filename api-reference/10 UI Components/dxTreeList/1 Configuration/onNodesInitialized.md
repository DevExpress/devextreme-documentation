---
id: dxTreeList.Options.onNodesInitialized
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after the loaded nodes are initialized.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): dxTreeList
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.root): dxTreeListNode
The root node.

---
Use this function to modify the [node fields](/api-reference/10%20UI%20Components/dxTreeList/4%20Node '/Documentation/ApiReference/UI_Components/dxTreeList/Node/'). You can traverse the tree using the [forEachNode(callback)](/api-reference/10%20UI%20Components/dxTreeList/3%20Methods/forEachNode(callback).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#forEachNodecallback') method or implement your custom algorithm. Within this algorithm, start traversing from the root node, which is available via the function parameter's **root** field.  Every node, including the root one, provides access to its child nodes in the **children** field, which allows traversing the whole tree.