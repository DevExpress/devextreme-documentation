---
default: undefined
acceptValues: 'billions' | 'currency' | 'day' | 'decimal' | 'exponential' | 'fixedPoint' | 'largeNumber' | 'longDate' | 'longTime' | 'millions' | 'millisecond' | 'month' | 'monthAndDay' | 'monthAndYear' | 'percent' | 'quarter' | 'quarterAndYear' | 'shortDate' | 'shortTime' | 'thousands' | 'trillions' | 'year' | 'dayOfWeek' | 'hour' | 'longDateLongTime' | 'minute' | 'second' | 'shortDateShortTime'
type: String | function(value) | Object
---
---
##### shortDescription
Formats values.

##### param(value): Number|Date
The value to be formatted.

##### return: String
The value after formatting.

---
This option accepts three types of values:

* **String**  
 One of the predefined formats (see the [type](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type') option) or a format string. The built-in localization engine supports the following characters. You can specify different formats by repeating these characters. 


 **Numeric Formats**

    <div class="simple-table">
    <table>
    <thead>
    <tr>
      <th>Format character</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>0</td>
      <td>A digit. Displays '0' if it is not specified in the UI.</td>
    </tr>
    <tr>
      <td>&#35;</td>
      <td>
            A digit or nothing. One symbol represents several integer digits, but only one decimal digit. </br> 
            For example, "#.#" represents "123.4", but not "123.45".
      </td>
    </tr>
    <tr>
      <td>.</td>
      <td>
            A decimal separator. </br>
            Displayed according to the <a href="/Documentation/ApiReference/Common/Object_Structures/globalConfig/#decimalSeparator">decimalSeparator</a> or the set locale if you use Intl or Globalize.
      </td>
    </tr>
    <tr>
      <td>,</td>
      <td>
            A group separator. </br>
            Displayed according to the <a href="/Documentation/ApiReference/Common/Object_Structures/globalConfig/#thousandsSeparator">thousandsSeparator</a> or the set locale if you use Intl or Globalize.
      </td>
    </tr>
    <tr>
      <td>%</td>
      <td>
            The percent sign. Divides the input value by 100. </br>    
            If it is enclosed in single quotes ('%'), it only adds this sign to the input value.
      </td>
    </tr>
    <tr>
      <td>;</td>
      <td>Separates positive and negative numbers. If there is no explicit negative format, a positive number receives the "-" prefix. </td>
    </tr>
    <tr>
      <td>Other characters</td>
      <td>
            Any character. Should be placed only at the format string's beginning or end. </br>
            You can use the special characters above as well (in single quotation marks).
      </td>
    </tr>
    </tbody>
    </table>
    </div>

 **Date-Time Formats** 

    <div class="simple-table">
    <table>
    <thead>
    <tr>
      <th>Format character</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>y</td>
      <td>A calendar year. </td>
    </tr>
    <tr>
      <td>Q</td>
      <td>
        A quarter number or name.</br>       
        Available combinations with example: "Q" - "2", "QQ" - "02", "QQQ" - "Q2" and "QQQQ" - "2nd quarter".
      </td>
    </tr>
    <tr>
      <td>M</td>
      <td>
        A month number or name.</br>         
        Available combinations with example: "M" - "9", "MM" - "09", "MMM" - "Sep", "MMMM" - "September", "MMMMM" - "S".
      </td>
    </tr>
    <tr>
      <td>d</td>
      <td>A month day.</td>
    </tr>
    <tr>
      <td>E</td>
      <td>
        A week day name.</br>    
        Available combinations with example: "E", "EE" or "EEE" - "Tue", "EEEE" - "Tuesday", "EEEEE" - "T". 
      </td>
    </tr>
    <tr>
      <td>a</td>
      <td>
        A day period (am or pm).
      </td>
    </tr>
    <tr>
      <td>h</td>
      <td>An hour. From 1 to 12.</td>
    </tr>
    <tr>
      <td>H</td>
      <td>An hour. From 0 to 23.</td>
    </tr>
    <tr>
      <td>m</td>
      <td>A minute.</td>
    </tr>
    <tr>
      <td>s</td>
      <td>A second.</td>
    </tr>
    <tr>
      <td>S</td>
      <td>A fractional second.</td>
    </tr>
    </tbody>
    </table>
    </div> 

 [note] [Reference the Globalize library](/concepts/Common/33%20Localization/05%20Using%20Localization%20Libraries/10%20Using%20Globalize.md '/Documentation/Guide/Common/Localization/#Using_Localization_Libraries/Using_Globalize') in your application to use other [numeric](https://unicode.org/reports/tr35/tr35-numbers.html#Special_Pattern_Characters) or [datetime](https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table) format characters.

* **Function**  
 Specifies a custom format. A shortcut for the [formatter](/api-reference/50%20Common/Object%20Structures/format/formatter.md '/Documentation/ApiReference/Common/Object_Structures/format/#formatter') option.
 
* **Object**  
 Allows you to configure the format. Can have one of these two structures:

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

 If you [use Devextreme-Intl](/concepts/Common/33%20Localization/05%20Using%20Localization%20Libraries/05%20Using%20Intl.md '/Documentation/Guide/Common/Localization/#Using_Localization_Libraries/Using_Intl'), you can specify the Intl [NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat#Parameters)'s and [DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat#Parameters)'s `options` parameter fields:    

        format: { year: "2-digit", month: "narrow", day: "2-digit" }
        === or ===
        format: { style: "currency", currency: "EUR", useGrouping: true }

 If you [use Globalize](/concepts/Common/33%20Localization/05%20Using%20Localization%20Libraries/10%20Using%20Globalize.md '/Documentation/Guide/Common/Localization/#Using_Localization_Libraries/Using_Globalize'), you can use the fields accepted by [numberFormatter](https://github.com/jquery/globalize/blob/master/doc/api/number/number-formatter.md), [currencyFormatter](https://github.com/jquery/globalize/blob/master/doc/api/currency/currency-formatter.md), and [dateFormatter](https://github.com/jquery/globalize/blob/master/doc/api/date/date-formatter.md) instead of the fields described in this section. For example, you can use skeletons to format dates. Note that this approach might require additional [CLDR modules](https://github.com/jquery/globalize/blob/master/README.md#2-cldr-content) not shipped with the DevExtreme package.

        format: { skeleton: 'GyMMMd' }

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingIntl/jQuery/Light/"
}