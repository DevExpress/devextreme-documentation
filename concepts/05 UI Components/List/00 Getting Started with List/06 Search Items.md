To add a search bar to the **List**, set the [searchEnabled](/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchEnabled) property to **true**. Use the [searchMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchMode) property to specify whether found list items should start with, contain, or match the search string.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $('#list').dxList({
            // ...
            searchEnabled: true,
            searchMode: 'contains',
        });
    });
    
---
