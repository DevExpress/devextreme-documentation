To add a search bar to the **List**, set the [searchEnabled](/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchEnabled) property to true. Define the [searchMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchMode) property and specify a search mode. The search bar also required a data field name or several names to search by. Define the [searchExpr](/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchExpr) property and assign a field name or an array of names to it.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $('#list1').dxList({
            // ...
            searchEnabled: true,
            searchMode: 'contains',
            searchExpr: ['Name'],
        });
    });
    
---
