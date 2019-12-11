---
##### shortDescription
Removes the specified item from the list.

##### param(itemIndex): Number|Object
The index of the list item to delete. If the list is grouped, pass an object with the required group and item indexes, e.g., { group: 0, item: 0 }.

##### return: Promise
A Promise of the jQuery Deferred object resolved if the item is deleted and rejected if it is not.

---
#####See Also#####
#include common-link-callmethods
- [List - Item Deletion API](/concepts/05%20Widgets/List/35%20Item%20Deletion/05%20API.md '/Documentation/Guide/Widgets/List/Item_Deletion/#API')