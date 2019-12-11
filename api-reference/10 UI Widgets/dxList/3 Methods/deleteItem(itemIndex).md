---
##### shortDescription
Removes the specified item from the list.

##### param(itemIndex): Number|Object
The index of the list item to delete. If the list is grouped, pass an object with the required group and item indexes, e.g., { group: 0, item: 0 }.

##### return: Promise
A Promise of the jQuery Deferred object resolved if the item is deleted and rejected if it is not.

---
