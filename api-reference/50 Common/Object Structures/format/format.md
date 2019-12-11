---
default: undefined
acceptValues: 'billions' | 'currency' | 'day' | 'decimal' | 'exponential' | 'fixedPoint' | 'largeNumber' | 'longDate' | 'longTime' | 'millions' | 'millisecond' | 'month' | 'monthAndDay' | 'monthAndYear' | 'percent' | 'quarter' | 'quarterAndYear' | 'shortDate' | 'shortTime' | 'thousands' | 'trillions' | 'year' | 'dayOfWeek' | 'hour' | 'longDateLongTime' | 'minute' | 'second' | 'shortDateShortTime'
type: String | function(value) | Object
---
---
##### shortDescription
Formats values.

##### param(value): Number|Date
A value to be formatted.

##### return: String
The value after formatting.

---
This option accepts three types of values.

* **String**  
 One of the predefined formats (accepted by the [type](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type') option) or a date format string (accepted by the [raw option](https://github.com/jquery/globalize/blob/master/doc/api/date/date-formatter.md#parameters) of the Globalize [date formatter](https://github.com/jquery/globalize/blob/master/doc/api/date/date-formatter.md)). For  information on values accepted by the raw option, refer to the [LDML documentation](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).

 [note]The use of a custom date format requires Globalize libraries to be referenced within your application. For more information on using the Globalize library, refer to the [Localization](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/11%20Localization%20-%20Use%20Globalize '/Documentation/Guide/Widgets/Common/UI_Widgets/Localization_-_Use_Globalize/') guide.

* **Function**  
 Specifies a custom format. A shortcut for the [formatter](/api-reference/50%20Common/Object%20Structures/format/formatter.md '/Documentation/ApiReference/Common/Object_Structures/format/#formatter') option.
 
* **Object**  
 Allows you to configure the format in many aspects. Can have one of these two structures.

        // Uses a predefined format
        format: {
            type: String, // one of the predefined formats
            precision: Number, // the precision of values
            currency: String // a specific 3-letter code for the "currency" format
        }
 or

        // Specifies a custom format
        format: {
            formatter: Function, // a custom formatting function
            parser: Function // a parsing function for string values
        }

Instead of fields described in this section, you can use fields accepted by Globalize formatters. In this case, do not specify the **type** option. For example, you can use skeletons to format dates.

    format: {
        skeleton: 'GyMMMd'
    }

See the [numberFormatter](https://github.com/jquery/globalize/blob/master/doc/api/number/number-formatter.md), [currencyFormatter](https://github.com/jquery/globalize/blob/master/doc/api/currency/currency-formatter.md) and [dateFormatter](https://github.com/jquery/globalize/blob/master/doc/api/date/date-formatter.md) documents for further information. Note that this approach might require additional [CLDR modules](https://github.com/jquery/globalize/blob/master/README.md#2-cldr-content) not shipped with the DevExtreme package.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSelector/CustomFormatting/jQuery/Light/"
}