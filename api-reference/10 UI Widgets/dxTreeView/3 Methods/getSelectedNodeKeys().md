---
id: dxTreeView.getSelectedNodeKeys()
---
---
##### shortDescription
Gets keys of the currently selected nodes.

##### return: Array<any>
Keys for the selected nodes.

---
[note]This method allows to retrieve the keys for loaded nodes only. So, if you use the [virtual mode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/virtualModeEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#virtualModeEnabled') or the [createChildren](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/createChildren.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#createChildren') option, then the keys for not yet loaded nodes will not be retrieved.

Also, if the [searchEnabled](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#searchEnabled') option is enabled, then this method returns the keys for the nodes, that satisfy the searched text. Hidden nodes, that doesn't satisfy the search text will be ignored.

To determine, when the selection is changed, use the [onSelectionChanged](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onSelectionChanged') event.
