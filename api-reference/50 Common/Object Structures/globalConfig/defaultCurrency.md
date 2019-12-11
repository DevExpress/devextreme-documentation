---
default: 'USD'
type: String
---
---
##### shortDescription
The default currency. Accepts a 3-letter code specified by [ISO 4217](https://www.currency-iso.org/en/home/tables/table-a1.html).

---
[note] [Reference Globalize or Intl](/concepts/Common/33%20Localization/05%20Using%20Localization%20Libraries '/Documentation/Guide/Common/Localization/#Using_Localization_Libraries') if you specify a currency other than "USD".

If you use Intl, just assign the currency code to this field.

If you use Globalize, do the following: 

1. Get the *currencies.json* file that corresponds to your culture from one of the folders [here](https://github.com/unicode-cldr/cldr-numbers-modern/tree/master/main).
2. Load the contents of this file in your app using one of the methods described [here](https://github.com/jquery/globalize/blob/master/doc/cldr.md#how-do-i-load-cldr-data-into-globalize).
3. Assign the 3-letter code of the needed currency to this field.


    <!--JavaScript-->DevExpress.config({ defaultCurrency: 'EUR' });

#####See Also#####
- [Localization](/concepts/Common/33%20Localization '/Documentation/Guide/Common/Localization/')