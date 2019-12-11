---
##### shortDescription
Reorders items with specific indexes.

##### param(itemIndex): Number|Object
The index of the item to be reordered.

##### param(toItemIndex): Number|Object
The index of the item after which the reordered item should be placed.

##### return: Promise<void>
A Promise that is resolved if the item is moved and rejected otherwise. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

---
If the widget displays a grouped list, the item index should be specified like the following.

    <!--JavaScript-->
    {
        group: 1,
        index: 1
    }

Where the **group** property specifies the group index, and the **index** property specifies the index of the required item within the group.

    <!--JavaScript-->
    $("#myList").dxList("instance").reorderItem({
        group: 1,
        index: 4
    },
    {
        group: 3,
        index: 2
    });

This code will move the 4th item of the 1st group to the 3rd position in the 3rd group.

[note]This method reorders items in the [items](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/items.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#items') array, but it does not affect the [dataSource](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#dataSource').

#####See Also#####
#include common-link-callmethods
- [List - Item Reordering API](/concepts/05%20Widgets/List/30%20Item%20Reordering/05%20API.md '/Documentation/Guide/Widgets/List/Item_Reordering/#API')