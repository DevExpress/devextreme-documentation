---
id: dxTreeMapNode
module: viz/tree_map
export: dxTreeMapNode
references: viz/tree_map:ClickEvent.node,viz/tree_map:DrillEvent.node,viz/tree_map:NodesInitializedEvent.root,viz/tree_map:NodesRenderingEvent.node,dxTreeMap.getCurrentNode,dxTreeMap.getCurrentNode,dxTreeMap.getRootNode,dxTreeMap.getRootNode,dxTreeMapNode.getAllChildren,dxTreeMapNode.getAllChildren,dxTreeMapNode.getAllNodes,dxTreeMapNode.getAllNodes,dxTreeMapNode.getChild,dxTreeMapNode.getChild,dxTreeMapNode.getParent,dxTreeMapNode.getParent,dxTreeMap.Options.onClick,dxTreeMap.Options.onDrill,dxTreeMap.Options.onHoverChanged,dxTreeMap.Options.onNodesInitialized,dxTreeMap.Options.onNodesRendering,dxTreeMap.Options.onSelectionChanged,viz/tree_map:Tooltip.contentTemplate,viz/tree_map:Tooltip.customizeTooltip,InteractionInfo.node
---
---
##### shortDescription
This section describes the **Node** object, which represents a treemap node.

---
**Node** objects are accessible within certain event handlers, for example, [onNodesInitialized](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/onNodesInitialized.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#onNodesInitialized'), [onNodesRendering](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/onNodesRendering.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#onNodesRendering'), etc. Also, you can obtain these objects using the [getRootNode()](/api-reference/10%20UI%20Components/dxTreeMap/3%20Methods/getRootNode().md '/Documentation/ApiReference/UI_Components/dxTreeMap/Methods/#getRootNode') and [getCurrentNode()](/api-reference/10%20UI%20Components/dxTreeMap/3%20Methods/getCurrentNode().md '/Documentation/ApiReference/UI_Components/dxTreeMap/Methods/#getCurrentNode') methods.