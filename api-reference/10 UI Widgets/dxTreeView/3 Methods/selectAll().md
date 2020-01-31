---
id: dxTreeView.selectAll()
---
---
##### shortDescription
Selects all items.

---
[note]This method allows to select loaded nodes only. So, if you use the [virtual mode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/virtualModeEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#virtualModeEnabled') or the [createChildren](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/createChildren.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#createChildren') option, then the selection will not applied to the not loaded nodes. If it is necessary to select the not loaded nodes, refer to the [TreeList](/concepts/05%20Widgets/TreeList/50%20Selection/20%20API/API.md '/Documentation/Guide/Widgets/TreeList/Selection/#API') widget.

Also, if the [searchEnabled](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#searchEnabled') option is enabled, then this method allows to select only nodes, that satisfy the searched text. Hidden nodes, that doesn't satisfy the search text will be ignored.

#####See Also#####
- [Select Nodes Using the API](/concepts/05%20Widgets/TreeView/25%20Select%20Nodes/02%20Using%20the%20API.md '/Documentation/Guide/Widgets/TreeView/Select_Nodes/#Using_the_API')