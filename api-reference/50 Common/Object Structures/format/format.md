---
id: format
acceptValues: 'billions' | 'currency' | 'day' | 'decimal' | 'exponential' | 'fixedPoint' | 'largeNumber' | 'longDate' | 'longTime' | 'millions' | 'millisecond' | 'month' | 'monthAndDay' | 'monthAndYear' | 'percent' | 'quarter' | 'quarterAndYear' | 'shortDate' | 'shortTime' | 'thousands' | 'trillions' | 'year' | 'dayOfWeek' | 'hour' | 'longDateLongTime' | 'minute' | 'second' | 'shortDateShortTime'
type: String | function(value) | Object
default: undefined
---
---
##### shortDescription
Formats values.

##### param(value): Number | Date
The value to be formatted.

##### return: String
The value after formatting.

---
This option accepts three types of values:

* **String**  
 A [predefined format](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type') or [custom format string](/concepts/Common/34%20Value%20Formatting/10%20Format%20Widget%20Values/20%20Custom%20Format%20String.md '/Documentation/Guide/Common/Value_Formatting/#Format_Widget_Values/Custom_Format_String').

* **Function**  
 Applies a custom format to a value and returns this value as a string. A shortcut for the [formatter](/api-reference/50%20Common/Object%20Structures/format/formatter.md '/Documentation/ApiReference/Common/Object_Structures/format/#formatter') option.
 
* **Object**  
 Allows you to configure the format. Can have one of the following structures:

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

 You can specify the Intl <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat#Parameters" target="_blank">NumberFormat</a>'s and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat#Parameters" target="_blank">DateTimeFormat</a>'s `options` parameter fields:    

        format: { year: "2-digit", month: "narrow", day: "2-digit" }
        === or ===
        format: { style: "currency", currency: "EUR", useGrouping: true }

 If you [use Globalize](/concepts/Common/33%20Localization/05%20Localize%20Dates%2C%20Numbers%2C%20and%20Currencies/10%20Using%20Globalize.md '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Globalize'), you can use the fields the <a href="https://github.com/jquery/globalize/blob/master/doc/api/number/number-formatter.md" target="_blank">numberFormatter</a>, <a href="https://github.com/jquery/globalize/blob/master/doc/api/currency/currency-formatter.md" target="_blank">currencyFormatter</a>, and <a href="https://github.com/jquery/globalize/blob/master/doc/api/date/date-formatter.md" target="_blank">dateFormatter</a> accept instead of the fields described in this section. For example, you can use skeletons to format dates. Note that this approach can require additional <a href="https://github.com/jquery/globalize/blob/master/README.md#2-cldr-content" target="_blank">CLDR modules</a> not shipped with the DevExtreme package.

        format: { skeleton: 'GyMMMd' }

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingIntl/"
}