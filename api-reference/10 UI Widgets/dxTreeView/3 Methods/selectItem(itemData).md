---
id: dxTreeView.selectItem(itemData)
---
---
##### shortDescription
Selects an item found using its data object.

##### param(itemData): Object
The item's data object.

##### return: Boolean
If the specified element doesn't exist or has not yet loaded, then the method returns false. In other cases, it returns true.

---
[note]This method allows to select loaded nodes only. So, if you use the [virtual mode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/virtualModeEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#virtualModeEnabled') or the [createChildren](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/createChildren.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#createChildren') option, then the selection will not applied to the not loaded nodes. If it is necessary to select not loaded nodes, refer to the [TreeList](/concepts/05%20Widgets/TreeList/50%20Selection/20%20API/API.md '/Documentation/Guide/Widgets/TreeList/Selection/#API') widget.

#####See Also#####
- [Select Nodes Using the API](/concepts/05%20Widgets/TreeView/25%20Select%20Nodes/02%20Using%20the%20API.md '/Documentation/Guide/Widgets/TreeView/Select_Nodes/#Using_the_API')