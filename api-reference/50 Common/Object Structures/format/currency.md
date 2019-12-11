---
type: String
---
---
##### shortDescription
Specifies the currency code. Applies only if [type](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type') is *"currency"*.

---
[note] [Reference Globalize or Intl](/concepts/Common/33%20Localization/05%20Using%20Localization%20Libraries '/Documentation/Guide/Common/Localization/#Using_Localization_Libraries') if you specify a currency code other than "USD".

This option accepts a 3-letter code specified by [ISO 4217](https://www.currency-iso.org/en/home/tables/table-a1.html) for each currency. If you use Intl, just assign the code to this option. If you use Globalize, do the following: 

1. Get the *currencies.json* file that corresponds to your culture from one of the folders [here](https://github.com/unicode-cldr/cldr-numbers-modern/tree/master/main).
2. Load the contents of this file in your app using one of the methods described [here](https://github.com/jquery/globalize/blob/master/doc/cldr.md#how-do-i-load-cldr-data-into-globalize).
3. Assign the 3-letter code of the needed currency to this option.

Alternatively, you can assign *"default"* to this option, in which case, the [global default currency](/api-reference/50%20Common/Object%20Structures/globalConfig/defaultCurrency.md '/Documentation/ApiReference/Common/Object_Structures/globalConfig/#defaultCurrency') is applied.

#####See Also#####
- **format**.[precision](/api-reference/50%20Common/Object%20Structures/format/precision.md '/Documentation/ApiReference/Common/Object_Structures/format/#precision')
- [Localization](/concepts/Common/33%20Localization '/Documentation/Guide/Common/Localization/')