The **List** supports Drag & Drop functionality that allows users to reorder list items. To configure it, define the [itemDragging](/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemDragging) property, within an object specify the [allowReordering](/Documentation/ApiReference/UI_Components/dxSortable/Configuration/#allowReordering) property and set it to **true**.

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