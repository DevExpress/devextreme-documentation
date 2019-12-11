---
##### shortDescription
Moves the specified item to the specified position in the list.

##### param(itemElement): Node
The DOM node of the item to be moved.

##### param(toItemElement): Node
The DOM node of the item after which the specified item should be placed.

##### return: Promise
A Promise of the jQuery Deferred object resolved if the item is moved and rejected if it is not.

---
[note]This method reorders items in the [items](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/items.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#items') array, but it does not affect the [dataSource](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#dataSource').

#####See Also#####
- [List - Item Reordering API](/concepts/05%20Widgets/List/30%20Item%20Reordering/05%20API.md '/Documentation/Guide/Widgets/List/Item_Reordering/#API')