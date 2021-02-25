The List supports drag & drop functionality that allows users to reorder list items. To configure it, define the [itemDragging](/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemDragging) object. Within this object, set the [allowReordering](/Documentation/ApiReference/UI_Components/dxSortable/Configuration/#allowReordering) property to **true**.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $('#list1').dxList({
            // ...
            itemDragging: {
                allowReordering: true,
            },
        });
            // ...
    });
    
---
