---
id: dxTreeMap.Options.onNodesInitialized
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed only once, after the nodes are initialized.

##### param(e): Object
Information about the event.

##### field(e.component): dxTreeMap
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.root): dxTreeMapNode
The root node; described in the [Node](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/') section.

---
Use this function to change the node structure. The root node is available via the **root** field of the function's parameter. Using the root node's [getAllNodes()](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node/3%20Methods/getAllNodes().md '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/Methods/#getAllNodes'), [getAllChildren()](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node/3%20Methods/getAllChildren().md '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/Methods/#getAllChildren') and [getChild(index)](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node/3%20Methods/getChild(index).md '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/Methods/#getChildindex') methods, you can access any other node.