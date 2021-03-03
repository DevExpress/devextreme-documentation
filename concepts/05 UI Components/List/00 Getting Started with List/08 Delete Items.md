To allow users to delete items from the **List**, set the [allowItemDeleting](/Documentation/ApiReference/UI_Components/dxList/Configuration/#allowItemDeleting) property to **true**. The **List** supports several deletion modes which determine how users delete items. Use the [itemDeleteMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemDeleteMode) property to define the most suitable deletion mode in your case.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $('#list').dxList({
            // ...
            allowItemDeleting: true,
        });
    });
    
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/"
}
