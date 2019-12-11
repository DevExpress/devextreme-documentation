---
##### shortDescription
Scrolls the list to the specified item.

##### param(itemIndex): Number|Object
The target element index.

---
If the widget displays a grouped list, specify the target item index using an object containing the following fields.

- **group**  
 Specifies the index of the group containing the target item.

- **item**  
 Specifies the item index within the specified group.

<!---->

    <!--JavaScript-->
    var list = $("#myList").dxList("instance");
    list.scrollToItem({
        group: 3,
        item: 8
    });

#####See Also#####
- [List - Scrolling API](/concepts/05%20Widgets/List/20%20Scrolling/05%20API.md '/Documentation/Guide/Widgets/List/Scrolling/#API')