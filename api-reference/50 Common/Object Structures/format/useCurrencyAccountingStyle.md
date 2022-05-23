---
id: Format.useCurrencyAccountingStyle
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether to apply the accounting style to formatted numbers of the `currency` [type](/Documentation/ApiReference/Common/Object_Structures/format/#type).

---
The accounting style adds parentheses to negative numbers instead of the minus sign. To disable the accounting style in the component and display formatted numbers of the `currency` [type](/Documentation/ApiReference/Common/Object_Structures/format/#type) with the minus sign, set this property to **false**. This property overrides the [global config](/Documentation/ApiReference/Common/Object_Structures/globalConfig/#defaultUseCurrencyAccountingStyle).

    format({
        type: "currency",
        useCurrencyAccountingStyle: false 
    });
