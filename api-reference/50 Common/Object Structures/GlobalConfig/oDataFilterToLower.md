---
id: GlobalConfig.oDataFilterToLower
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether to convert string values to lowercase in filter and search requests to OData services. Applies to the following operations: *"startswith"*, *"endswith"*, *"contains"*, and *"notcontains"*.

---
When the **oDataFilterToLower** property is **true**, the filter expression sent to the server contains a `tolower()` function call and a lowercase filter value.

---
##### jQuery

    <!-- tab: index.js -->
    DevExpress.config({
        oDataFilterToLower: true
    });
    // ===== or when using modules =====
    import config from "devextreme/core/config";

    config({
        oDataFilterToLower: true
    })

    // The filter expression in the request looks like the following:
    // https://...?filter=startswith(tolower(Product_Name), 'tel')

##### Angular

    <!-- tab: app.component.ts -->
    import config from "devextreme/core/config";

    config({
        oDataFilterToLower: true
    })

    // The filter expression in the request looks like the following:
    // https://...?filter=startswith(tolower(Product_Name), 'tel')

##### Vue

    <!-- tab: App.vue -->
    import config from "devextreme/core/config";

    config({
        oDataFilterToLower: true
    })

    // The filter expression in the request looks like the following:
    // https://...?filter=startswith(tolower(Product_Name), 'tel')

##### React

    <!-- tab: App.js -->
    import config from "devextreme/core/config";

    config({
        oDataFilterToLower: true
    })

    // The filter expression in the request looks like the following:
    // https://...?filter=startswith(tolower(Product_Name), 'tel')

---

You can use the **filterToLower** property in an individual [ODataStore](/api-reference/30%20Data%20Layer/ODataStore/1%20Configuration/filterToLower.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#filterToLower') or [ODataContext](/api-reference/30%20Data%20Layer/ODataContext/1%20Configuration/filterToLower.md '/Documentation/ApiReference/Data_Layer/ODataContext/Configuration/#filterToLower') to control the same functionality.