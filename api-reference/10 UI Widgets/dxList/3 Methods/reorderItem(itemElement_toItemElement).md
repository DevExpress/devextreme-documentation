---
id: dxList.reorderItem(itemElement, toItemElement)
---
---
##### shortDescription
Reorders items found using their DOM nodes.

##### return: Promise<void>
A Promise that is resolved if the item is moved and rejected otherwise. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(itemElement): Element
The DOM node of the item to be reordered.

##### param(toItemElement): Element
The DOM node of the item after which the reordered item should be placed.

---
[note]This method reorders items in the [items](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/items/') array, but it does not affect the [dataSource](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#dataSource').

#####See Also#####
#include common-link-callmethods
- [List - Item Reordering API](/concepts/05%20Widgets/List/30%20Item%20Reordering/05%20API.md '/Documentation/Guide/Widgets/List/Item_Reordering/#API')