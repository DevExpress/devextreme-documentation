---
id: GlobalConfig.defaultCurrency
type: String
default: 'USD'
---
---
##### shortDescription
The default currency. Accepts a 3-letter <a href="https://www.currency-iso.org/en/home/tables/table-a1.html" target="_blank">ISO 4217</a> code.

---
---
##### jQuery

    <!-- tab: index.js -->
    DevExpress.config({ defaultCurrency: 'EUR' });
    // ===== or when using modules =====
    import config from "devextreme/core/config";
        
    config({
        defaultCurrency: 'EUR'
    });

##### Angular

    <!-- tab: app.component.ts -->
    import config from "devextreme/core/config";
        
    config({
        defaultCurrency: 'EUR'
    });

##### Vue

    <!-- tab: App.vue -->
    import config from "devextreme/core/config";
        
    config({
        defaultCurrency: 'EUR'
    });

##### React

    <!-- tab: App.js -->
    import config from "devextreme/core/config";
        
    config({
        defaultCurrency: 'EUR'
    });

---

#####See Also#####
- [Localization](/concepts/Common/Localization '/Documentation/Guide/Common/Localization/')