---
id: GlobalConfig.defaultUseCurrencyAccountingStyle
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether to apply the accounting style to formatted numbers of the `currency` [type](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type').

---
The accounting style adds parentheses to negative numbers instead of the minus sign. To disable the accounting style globally and display formatted numbers of the `currency` [type](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type') with the minus sign, set this property to **false**.

---
##### jQuery

    <!-- tab: index.js -->
    DevExpress.config({ defaultUseCurrencyAccountingStyle: false });
    // ===== or when using modules =====
    import config from "devextreme/core/config";
        
    config({
        defaultCurrency: 'EUR'
    });

##### Angular

    <!-- tab: app.component.ts -->
    import config from "devextreme/core/config";
        
    config({
        defaultUseCurrencyAccountingStyle: false 
    });

##### Vue

    <!-- tab: App.vue -->
    import config from "devextreme/core/config";
        
    config({
        defaultUseCurrencyAccountingStyle: false 
    });

##### React

    <!-- tab: App.js -->
    import config from "devextreme/core/config";
        
    config({
        defaultUseCurrencyAccountingStyle: false 
    });

---

This property specifies the global accounting style setting. If you want to override this setting for a component, specify the [useCurrencyAccountingStyle](/api-reference/50%20Common/Object%20Structures/format/useCurrencyAccountingStyle.md '/Documentation/ApiReference/Common/Object_Structures/format/#useCurrencyAccountingStyle') property in the component's [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/') object.

![How to Override the defaultUseCurrencyAccountingStyle](/images/types/use-currency-accounting-style.png)