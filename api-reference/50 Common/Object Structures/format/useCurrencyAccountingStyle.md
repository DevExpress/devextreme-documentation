---
id: Format.useCurrencyAccountingStyle
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether to apply the accounting style to formatted numbers of the `currency` [type](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type').

---
The accounting style adds parentheses to negative numbers instead of the minus sign. To disable the accounting style in the component and display formatted numbers of the `currency` [type](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type') with the minus sign, set this property to **false**.

    format({
        type: "currency",
        useCurrencyAccountingStyle: false 
    });

If you do not specify this property, the [defaultUseCurrencyAccountingStyle](/api-reference/50%20Common/Object%20Structures/globalConfig/defaultUseCurrencyAccountingStyle.md '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#defaultUseCurrencyAccountingStyle') global configuration setting is in effect. The `useCurrencyAccountingStyle` property has priority over the global setting.

![How to Override the defaultUseCurrencyAccountingStyle](/images/types/use-currency-accounting-style.png)