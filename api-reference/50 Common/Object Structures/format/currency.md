---
id: format.currency
type: String
---
---
##### shortDescription
Specifies the currency code. Applies only if the [type](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type') is *"currency"*.

---
[note] [Reference Globalize or Intl](/concepts/Common/33%20Localization/05%20Localize%20Dates%2C%20Numbers%2C%20and%20Currencies '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies') if you specify a currency code other than "USD".

This option accepts a 3-letter <a href="http://www.currency-iso.org/en/home/tables/table-a1.html" target="_blank">ISO 4217</a> code for each currency. Assign the code to this option if you use Intl, or do the following if you use Globalize: 

1. Get the *currencies.json* file that corresponds to your culture from a folder <a href="https://github.com/unicode-cldr/cldr-numbers-modern/tree/master/main" target="_blank">here</a>.
2. Load this file's contents in your app using a method described <a href="https://github.com/jquery/globalize/blob/master/doc/cldr.md#how-do-i-load-cldr-data-into-globalize" target="_blank">here</a>.
3. Assign the currency's 3-letter code to this option.

Alternatively, you can assign *"default"* to this option to apply the [global default currency](/api-reference/50%20Common/Object%20Structures/globalConfig/defaultCurrency.md '/Documentation/ApiReference/Common/Object_Structures/globalConfig/#defaultCurrency').

#####See Also#####
- **format**.[precision](/api-reference/50%20Common/Object%20Structures/format/precision.md '/Documentation/ApiReference/Common/Object_Structures/format/#precision')
- [Localization](/concepts/Common/33%20Localization '/Documentation/Guide/Common/Localization/')