To set a currency format, assign *'currency'* to the **format**.[type](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type') option.

    <!--JavaScript-->var widgetOptions = {
        // ...
        customizableElement: {
            format: {
                type: 'currency'
            }
        }
    };
    
This setting applies the global default currency - *'USD'*. It is specified by the **defaultCurrency** field of the object returned by the **DevExpress.config()** method. To change it, use the following code.

    <!--JavaScript-->DevExpress.config({ defaultCurrency: 'EUR' });
    
To use any currency that differs from USD, follow these steps.

1. Get the *currencies.json* file that corresponds to your locale from one of the folders <a href="https://github.com/unicode-cldr/cldr-numbers-modern/tree/master/main" target="_blank">here</a>.
2. Load the contents of this file in your app using one of the methods described <a href="https://github.com/jquery/globalize/blob/master/doc/cldr.md#how-do-i-load-cldr-data-into-globalize" target="_blank">here</a>.
3. Assign the <a href="http://www.currency-iso.org/en/home/tables/table-a1.html" target="_blank">3-letter code</a> of the needed currency to the **format**.[currency](/api-reference/50%20Common/Object%20Structures/format/currency.md '/Documentation/ApiReference/Common/Object_Structures/format/#currency') option.

        <!--JavaScript-->var widgetOptions = {
            // ...
            customizableElement: {
                format: {
                    type: 'currency',
                    currency: 'EUR'
                }
            }
        };
    
Additionally, you can specify the precision of currency values using the **format**.[precision](/api-reference/50%20Common/Object%20Structures/format/precision.md '/Documentation/ApiReference/Common/Object_Structures/format/#precision') option.

    <!--JavaScript-->var widgetOptions = {
        // ...
        customizableElement: {
            format: {
                // ...
                type: 'currency',
                precision: 2
            }
        }
    };
    
If you do not need to change neither the **currency** nor the **precision** field, assign *'currency'* straight to the **format** option. This setting will apply the global default currency.

    <!--JavaScript-->var widgetOptions = {
        // ...
        customizableElement: {
            format: 'currency'
        }
    };
    
Alternatively, you can use a native formatter of the Globalize library. In this case, the **format** option accepts an object whose fields are the same as the options passed to the <a href="https://github.com/jquery/globalize/blob/master/doc/api/currency/currency-formatter.md" target="_blank">currencyFormatter</a>.

    <!--JavaScript-->var widgetOptions = {
        // ...
        customizableElement: {
            format: {
                currency: 'EUR',
                style: 'name'
            }
        }
    };

Note that you must not set the **type** option if you use a Globalize formatter. Also, this approach might require additional <a href="https://github.com/jquery/globalize/blob/master/README.md#2-cldr-content" target="_blank">CLDR modules</a> not shipped with the DevExtreme package.
