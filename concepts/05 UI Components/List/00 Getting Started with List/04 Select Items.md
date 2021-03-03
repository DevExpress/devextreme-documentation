The **List** supports the following item selection modes: *"single"*, *"multiple"*, and *"all"*. To enable selection, specify one of these modes in the [selectionMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectionMode) property.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $('#list').dxList({
            // ...
            selectionMode: 'single',
         });
    });
    
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection/"
}
