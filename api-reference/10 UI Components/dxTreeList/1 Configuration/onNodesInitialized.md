---
id: dxTreeList.Options.onNodesInitialized
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after the loaded nodes are initialized.

##### param(e): ui/tree_list:NodesInitializedEvent
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.root): dxTreeListNode
The root node.

---
Use **onNodesInitialized** to modify [node fields](/api-reference/10%20UI%20Components/dxTreeList/4%20Node '/Documentation/ApiReference/UI_Components/dxTreeList/Node/'). In the event handler, call [forEachNode(callback)](/api-reference/10%20UI%20Components/dxTreeList/3%20Methods/forEachNode(callback).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#forEachNodecallback') to iterate through nodes and apply changes.

You can also use the **e**.**root** field to implement custom iteration logic. To traverse the node tree, start from **root** and recursively access each node's **children** field. The following example configures custom iteration logic in **onNodesInitialized** to display a summary for each TreeList branch:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-treelist-display-summary-for-each-level/"
}
