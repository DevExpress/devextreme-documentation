---
id: dxTreeView.scrollToItem(itemData)
---
---
##### shortDescription
Scrolls the content to an item found using its data.

##### return: Promise<void>
A Promise that is resolved after the content is scrolled to the target item and rejected if the item is nonexsistent or nested in a  collapsed and [disabled](/api-reference/10%20UI%20Components/dxTreeView/4%20Node/disabled.md '/Documentation/ApiReference/UI_Components/dxTreeView/Node/#disabled') node.             
#include ref-promisedistinction

##### param(itemData): dxTreeViewItem | Object
The item's data object.

##### field(itemData.disabled): Boolean
<!-- Description goes here -->

##### field(itemData.expanded): Boolean
<!-- Description goes here -->

##### field(itemData.hasItems): Boolean
<!-- Description goes here -->

##### field(itemData.html): String
<!-- Description goes here -->

##### field(itemData.icon): String
<!-- Description goes here -->

##### field(itemData.id): Number | String
<!-- Description goes here -->

##### field(itemData.items): Array<dxTreeViewItem>
<!-- Description goes here -->

##### field(itemData.parentId): Number | String
<!-- Description goes here -->

##### field(itemData.selected): Boolean
<!-- Description goes here -->

##### field(itemData.template): template | function()
<!-- Description goes here -->

##### field(itemData.text): String
<!-- Description goes here -->

##### field(itemData.visible): Boolean
<!-- Description goes here -->

---
