---
id: dxList.deleteItem(itemIndex)
---
---
##### shortDescription
Removes an item with a specific index.

##### return: Promise<void>
A Promise that is resolved if the item is deleted and rejected otherwise.
#include ref-promisedistinction

##### param(itemIndex): Number | Object
The item's index. If the items are grouped, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

---
#####See Also#####
#include common-link-callmethods
- [List - Item Deletion API](/concepts/05%20UI%20Components/List/35%20Item%20Deletion/05%20API.md '/Documentation/Guide/UI_Components/List/Item_Deletion/#API')