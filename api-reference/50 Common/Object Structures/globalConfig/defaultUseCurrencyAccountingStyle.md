---
id: globalConfig.defaultUseCurrencyAccountingStyle
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether to apply the accounting style to formatted numbers with the `currency` [type](/Documentation/ApiReference/Common/Object_Structures/format/#type).

---
The accounting style adds parentheses to negative numbers instead of the minus sign. To disable the accounting style globally and display formatted numbers with the `currency` [type](/Documentation/ApiReference/Common/Object_Structures/format/#type) with the minus sign, set this property to **false**.

    DevExpress.config({ defaultUseCurrencyAccountingStyle: false });
    // ===== or when using modules =====
    import config from "devextreme/core/config";
        
    config({
        defaultUseCurrencyAccountingStyle: false 
    });

#####See Also#####
- [useCurrencyAccountingStyle](/Documentation/ApiReference/Common/Object_Structures/format/#useCurrencyAccountingStyle)