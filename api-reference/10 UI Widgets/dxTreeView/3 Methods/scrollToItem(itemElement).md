---
id: dxTreeView.expandItem(itemElement)
---
---
##### shortDescription
Scrolls the content to an item found using its DOM node.

##### param(itemElement): Node
The item's DOM node.

##### return: Promise<void>
A Promise that is resolved after the TreeView scrolls the content to the specified item and rejected if the item does't exists or is item is located in the collapsed and disabled node. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.
---
