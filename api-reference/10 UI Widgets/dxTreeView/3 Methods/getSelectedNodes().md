---
id: dxTreeView.getSelectedNodes()
---
---
##### shortDescription
Gets selected nodes.

##### return: Array<dxTreeViewNode>
Selected nodes. Their structure is described in the [Node](/api-reference/10%20UI%20Widgets/dxTreeView/4%20Node '/Documentation/ApiReference/UI_Widgets/dxTreeView/Node/') section.

---
[note]This method allows to retrieve loaded nodes only. So, if you use the [virtual mode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/virtualModeEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#virtualModeEnabled') or the [createChildren](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/createChildren.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#createChildren') option, then the not yet loaded nodes will be ignored.

Also, if the [searchEnabled](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#searchEnabled') option is enabled, then this method allows to retrieve the nodes, that satisfy the searched text. Hidden nodes, that doesn't satisfy the search text will be ignored.

To determine, when the selection is changed, use the [onSelectionChanged](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onSelectionChanged') event or the [onItemSelectionChanged](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/onItemSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemSelectionChanged') event.
