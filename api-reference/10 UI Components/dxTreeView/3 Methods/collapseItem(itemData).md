---
id: dxTreeView.collapseItem(itemData)
---
---
##### shortDescription
Collapses an item with a specific key.

##### return: Promise<void>
A Promise that is resolved after the item is collapsed and rejected if the item is nonexistent or [disabled](/api-reference/10%20UI%20Components/dxTreeView/4%20Node/disabled.md '/Documentation/ApiReference/UI_Components/dxTreeView/Node/#disabled').             
#include ref-promisedistinction

##### param(itemData): dxTreeViewItem | Object
The key.

##### field(itemData.disabled): Boolean
Specifies whether the UI component item responds to user interaction.

##### field(itemData.expanded): Boolean
Specifies whether or not the tree view item is displayed expanded.

##### field(itemData.hasItems): Boolean | undefined
Specifies whether or not the tree view item has children.

##### field(itemData.html): String
Specifies the HTML markup to be inserted into the item element.

##### field(itemData.icon): String
Specifies the tree view item's icon.

##### field(itemData.id): Number | String | undefined
Holds the unique key of an item.

##### field(itemData.items): Array<dxTreeViewItem>
Specifies nested tree view items.

##### field(itemData.parentId): Number | String | undefined
Holds the key of the parent item.

##### field(itemData.selected): Boolean
Specifies whether the TreeView item should be displayed as selected.

##### field(itemData.template): template | function()
Specifies a template that should be used to render this item only.

##### field(itemData.text): String
Specifies text displayed for the UI component item.

##### field(itemData.visible): Boolean
Specifies whether or not a UI component item must be displayed.

---
