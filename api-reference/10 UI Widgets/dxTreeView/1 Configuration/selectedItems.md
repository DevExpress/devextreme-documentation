---
id: dxTreeView.Options.selectedItems
type: Array<any>
firedEvents: selectionChanged
---
##### shortDescription
Allows you to select nodes or determine which nodes are selected.

---
[note]if you use the [virtual mode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/virtualModeEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#virtualModeEnabled') or the [createChildren](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/createChildren.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#createChildren') option, then this option doesnt't allows you to interact with not loaded nodes. If it is necessary to select not loaded nodes, refer to the [TreeList](/concepts/05%20Widgets/TreeList/50%20Selection/20%20API/API.md '/Documentation/Guide/Widgets/TreeList/Selection/#API') widget.

[important] You can also specify selected items via [selected](/api-reference/_hidden/dxTreeViewItem/selected.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/items/#selected') field of the dataSource item. In this case, priority will be given to the values specified in the selected field. And the the selectedItemKeys option values will be replaced by keys from the selected data source items.

#####See Also#####
- [Select Nodes Using the API](/concepts/05%20Widgets/TreeView/25%20Select%20Nodes/02%20Using%20the%20API.md '/Documentation/Guide/Widgets/TreeView/Select_Nodes/#Using_the_API')