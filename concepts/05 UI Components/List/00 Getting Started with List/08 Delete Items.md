To allow users to delete items from the **List**, set the [allowItemDeleting](/Documentation/ApiReference/UI_Components/dxList/Configuration/#allowItemDeleting) property to **true**. Refer to the [Item Deletion](/Documentation/Guide/UI_Components/List/Item_Deletion/) help article for information on deletion modes.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $('#list1').dxList({
            // ...
            allowItemDeleting: true,
        });
            // ...
    });
    
---