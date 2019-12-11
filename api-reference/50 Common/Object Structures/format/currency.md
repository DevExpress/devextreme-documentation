---
type: String
---
---
##### shortDescription
Specifies the currency code for the *'currency'* format.

---
[note]The use of currency formats rather than 'USD' requires Globalize libraries to be referenced within your application. For more information on using Globalize library, refer to the [Localization](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/11%20Localization%20-%20Use%20Globalize '/Documentation/Guide/Widgets/Common/UI_Widgets/Localization_-_Use_Globalize/') guide.

This option accepts a 3-letter code specified by [ISO 4217](https://www.currency-iso.org/en/home/tables/table-a1.html) for each currency. Alternatively, you can set this option to *'default'*, in which case, the global default currency will be applied.

The global default currency is specified by the **defaultCurrency** field of the object returned by the **DevExpress.config()** method. By default, it is *'USD'*. To change it, use the following code.

    <!--JavaScript-->DevExpress.config({ defaultCurrency: 'EUR' });
    
To use any currency that differs from USD, follow these steps.

1. Get the *currencies.json* file that corresponds to your culture from one of the folders [here](https://github.com/unicode-cldr/cldr-numbers-modern/tree/master/main).
2. Load the contents of this file in your app using one of the methods described [here](https://github.com/jquery/globalize/blob/master/doc/cldr.md#how-do-i-load-cldr-data-into-globalize).
3. Assign the 3-letter code of the needed currency to the **currency** option.

#####See Also#####
- **format**.[precision](/api-reference/50%20Common/Object%20Structures/format/precision.md '/Documentation/ApiReference/Common/Object_Structures/format/#precision')