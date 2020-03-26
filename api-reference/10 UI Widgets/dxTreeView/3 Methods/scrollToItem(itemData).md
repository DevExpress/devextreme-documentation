---
id: dxTreeView.scrollToItem(itemData)
---
---
##### shortDescription
Scrolls the content to an item found using its data.

##### param(itemData): Object
The item's data object.

##### return: Promise<void>
A Promise that is resolved after the content is scrolled to the target item and rejected if the item doesn't exists or is located in the collapsed [disabled](/api-reference/10%20UI%20Widgets/dxTreeView/4%20Node/disabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Node/#disabled') node.             
It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---