---
id: dxTreeView.expandItem(itemData)
---
---
##### shortDescription
Expands an item found using its data object.

##### return: Promise<void>
A Promise that is resolved after the item is expanded and rejected if the item is nonexistent or [disabled](/api-reference/10%20UI%20Components/dxTreeView/4%20Node/disabled.md '/Documentation/ApiReference/UI_Components/dxTreeView/Node/#disabled').             
#include ref-promisedistinction

##### param(itemData): dxTreeViewItem | Object
The item's data object.

##### field(itemData.disabled): Boolean
<!-- %field(itemData.disabled)% -->

##### field(itemData.expanded): Boolean
<!-- %field(itemData.expanded)% -->

##### field(itemData.hasItems): Boolean | undefined
<!-- %field(itemData.hasItems)% -->

##### field(itemData.html): String
<!-- %field(itemData.html)% -->

##### field(itemData.icon): String
<!-- %field(itemData.icon)% -->

##### field(itemData.id): Number | String | undefined
<!-- %field(itemData.id)% -->

##### field(itemData.items): Array<dxTreeViewItem>
<!-- %field(itemData.items)% -->

##### field(itemData.parentId): Number | String | undefined
<!-- %field(itemData.parentId)% -->

##### field(itemData.selected): Boolean
<!-- %field(itemData.selected)% -->

##### field(itemData.template): template | function()
<!-- %field(itemData.template)% -->

##### field(itemData.text): String
<!-- %field(itemData.text)% -->

##### field(itemData.visible): Boolean
<!-- %field(itemData.visible)% -->

---
<!-- import * from 'api-reference\10 UI Components\dxTreeView\3 Methods\collapseItem(itemData).md' -->