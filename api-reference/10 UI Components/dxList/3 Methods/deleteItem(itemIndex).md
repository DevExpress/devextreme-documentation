---
id: dxList.deleteItem(itemIndex)
---
---
##### shortDescription
Removes an item with a specific index.

##### return: Promise<void>
A Promise that is resolved if the item is deleted and rejected otherwise. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(itemIndex): Number | Object
The item's index. If the items are grouped, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

---
#####See Also#####
#include common-link-callmethods
- [List - Item Deletion API](/concepts/05%20Widgets/List/35%20Item%20Deletion/05%20API.md '/Documentation/Guide/Widgets/List/Item_Deletion/#API')