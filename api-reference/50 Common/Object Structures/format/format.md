---
id: Format
type: Object | Enums.Format | String | function(value)
default: undefined
module: common/core/localization
export: Format
---
---
##### shortDescription
Formats values.

##### param(value): Number | Date
The value to be formatted.

##### return: String
The value after formatting.

---
This property accepts three types of values:

* **String**    
A [predefined format](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/Format/#type') or [custom format string](/concepts/Common/Value%20Formatting/10%20Format%20UI%20Component%20Values/20%20Custom%20Format%20String.md '/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Format_String').

* **Function**    
Applies a custom format to a value and returns this value as a string. A shortcut for the [formatter](/api-reference/50%20Common/Object%20Structures/format/formatter.md '/Documentation/ApiReference/Common/Object_Structures/Format/#formatter') property.

* **Object**    
Allows you to configure the format. Can have one of the following structures:

        <!-- tab: DevExtreme -->
        // Uses a predefined format
        format: {
            type: String, // one of the predefined formats
            precision: Number, // the precision of values
            currency: String // a specific 3-letter code for the "currency" format
        }

    or

        <!-- tab: DevExtreme -->
        // Specifies a custom format
        format: {
            formatter: Function, // a custom formatting function
            parser: Function // a parsing function for string values
        }

    You can specify the Intl <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat#Parameters" target="_blank">NumberFormat</a>'s and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat#Parameters" target="_blank">DateTimeFormat</a>'s `options` parameter fields:    

        <!-- tab: Intl -->
        format: { year: "2-digit", month: "narrow", day: "2-digit" }
        === or ===
        format: { style: "currency", currency: "EUR", useGrouping: true }

    If you [use Globalize](/concepts/Common/Localization/05%20Localize%20Dates%2C%20Numbers%2C%20and%20Currencies/10%20Using%20Globalize.md '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Globalize'), you can use the fields that the <a href="https://github.com/jquery/globalize/blob/master/doc/api/number/number-formatter.md" target="_blank">numberFormatter</a>, <a href="https://github.com/jquery/globalize/blob/master/doc/api/currency/currency-formatter.md" target="_blank">currencyFormatter</a>, and <a href="https://github.com/jquery/globalize/blob/master/doc/api/date/date-formatter.md" target="_blank">dateFormatter</a> accept instead of the fields described in this section. For example, you can use skeletons to format dates. Note that this approach can require additional <a href="https://github.com/jquery/globalize/blob/master/README.md#2-cldr-content" target="_blank">CLDR modules</a> not shipped with the DevExtreme package.

        <!-- tab: Globalize -->
        format: { skeleton: 'GyMMMd' }

    [note] Depending on the object structure, the **format** utility chooses the mechanism to use: DevExtreme internal, Intl, or Globalize. If you mix properties from different zones (DevExtreme, Intl, or Globalize) in an object, the result can be unpredictable.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingIntl/"
}