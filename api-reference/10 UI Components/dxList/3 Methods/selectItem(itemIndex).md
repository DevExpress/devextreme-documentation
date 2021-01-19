---
id: dxList.selectItem(itemIndex)
---
---
##### shortDescription
Selects an item with a specific index.

##### param(itemIndex): Number | Object
The item's index. If items are grouped, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

---
Note that the result of the method execution depends on the current value of the [selectionMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectionMode') option that accepts the following values.

- **none**  
 The method does nothing.

- **single**  
 The method selects the specified item while the previously selected item becomes unselected.

- **multi** and **all**
 The method adds the specified item to the list of currently selected items.

#####See Also#####
#include common-link-callmethods
- [List - Selection API](/concepts/05%20Widgets/List/25%20Selection/05%20API.md '/Documentation/Guide/Widgets/List/Selection/#API')