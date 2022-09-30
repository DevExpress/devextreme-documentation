---
id: dxList.scrollToItem(itemIndex)
---
---
##### shortDescription
Scrolls the content to an item with a specific index.

##### param(itemIndex): Number | Object
The item's index.

---
If the UI component displays a grouped list, specify the target item index using an object containing the following fields.

- **group**  
 Specifies the index of the group containing the target item.

- **item**  
 Specifies the item index within the specified group.

---
##### jQuery

    <!--JavaScript-->
    const list = $("#myList").dxList("instance");
    list.scrollToItem({
        group: 3,
        item: 8
    });

---

#####See Also#####
#include common-link-callmethods
- [List - Scrolling API](/concepts/05%20UI%20Components/List/20%20Scrolling/05%20API.md '/Documentation/Guide/UI_Components/List/Scrolling/#API')