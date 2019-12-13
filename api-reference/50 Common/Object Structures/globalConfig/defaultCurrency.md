---
id: globalConfig.defaultCurrency
type: String
default: 'USD'
---
---
##### shortDescription
The default currency. Accepts a 3-letter <a href="https://www.currency-iso.org/en/home/tables/table-a1.html" target="_blank">ISO 4217</a> code.

---
<!---->

    DevExpress.config({ defaultCurrency: 'EUR' });
    // ===== or when using modules =====
    import config from "devextreme/core/config";
        
    config({
        defaultCurrency: 'EUR'
    });

#####See Also#####
- [Localization](/concepts/Common/33%20Localization '/Documentation/Guide/Common/Localization/')