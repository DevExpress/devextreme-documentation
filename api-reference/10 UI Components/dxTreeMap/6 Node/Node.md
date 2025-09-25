---
id: dxTreeMapNode
module: viz/tree_map
export: dxTreeMapNode
---
---
##### shortDescription
This section describes the **node** object.

---
The following image illustrates TreeMap node types:

<img src="/images/TreeMap/treemap-node.png" alt="TreeMap node types" style="width: 1100px;"/>

1. [Group Node](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/group '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/group/')
2. [Child Node](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/childrenField.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#childrenField')

You can access the root TreeMap **node** object within event handlers such as [onNodesInitialized](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/onNodesInitialized.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#onNodesInitialized') and [onNodesRendering](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/onNodesRendering.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#onNodesRendering'), as well as through the [getRootNode()](/api-reference/10%20UI%20Components/dxTreeMap/3%20Methods/getRootNode().md '/Documentation/ApiReference/UI_Components/dxTreeMap/Methods/#getRootNode') method. To get all **node** instances within a component, call the [getAllNodes()](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node/3%20Methods/getAllNodes().md '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/Methods/#getAllNodes') method on the root **node**.