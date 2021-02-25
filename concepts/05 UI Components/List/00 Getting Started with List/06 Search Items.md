To add a search bar to the **List**, set the [searchEnabled](/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchEnabled) property to true. Use the [searchMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchMode) property to specify one of the following modes: `contains`, `startswith`, and `equals`.

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
