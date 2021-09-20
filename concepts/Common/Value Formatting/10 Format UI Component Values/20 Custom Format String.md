A custom format string specifies a format using Unicode Locale Data Markup Language (LDML) patterns. An LDML pattern consists of wildcard characters and characters displayed as is. The following wildcard characters are supported:

**Numeric Formats**

<table class="dx-table">
    <tr>
      <th>Format character</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>0</td>
      <td>A digit. Displays '0' if it is not specified in the UI.</td>
    </tr>
    <tr>
      <td>&#35;</td>
      <td>
            A digit or nothing. One symbol represents several integer digits, but only one decimal digit.</br> 
            For example, "#0.#" represents "123.4", but not "123.45".
      </td>
    </tr>
    <tr>
      <td>.</td>
      <td>
            A decimal separator. </br>
            Displayed according to the specified locale.
      </td>
    </tr>
    <tr>
      <td>,</td>
      <td>
            A group separator. </br>
            Displayed according to the specified locale.
      </td>
    </tr>
    <tr>
      <td>%</td>
      <td>
            The percent sign. Multiplies the input value by 100. </br>    
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
</table>

    <!-- tab: JavaScript -->
    const largeNumber = 123456.789;

    // Limit the decimal part to one digit
    format: "#0.#" // 123456.7

    // Add a group separator
    format: ",##0.###" // 123,456.789
    
<!-- -->

    <!-- tab: JavaScript -->
    const smallNumber = 0.01234;

    // Represent as a percentage and limit to two decimal digits
    format: "#0.##%" // 1.23%

    // Add a percent sign and limit to two decimal digits
    format: "#0.##'%'" // 0.01%

 **Date-Time Formats** 

<table class="dx-table">
    <tr>
      <th>Format character</th>
      <th>Description</th>
    </tr>
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
    <tr>
      <td>'' (two single quotes)</td>
      <td>Literal text. Text enclosed in two single quotes is shown as-is.</td>
    </tr>
</table>

    <!-- tab: JavaScript -->
    const date = new Date(2021, 6, 15, 20, 45, 34);

    format: "MM/dd/yyyy" // 07/15/2021
    format: "MM/dd/yy" // 07/15/21
    format: "dd.MM.yyyy" // 15.07.2021
    format: "MMMM dd, yyyy" // July 15, 2021
    format: "EEEE, MMMM dd" // Thursday, July 15
    format: "HH:mm:ss" // 20:45:34
    format: "hh:mm a" // 08:45 PM
    format: "MMMM dd, yyyy HH:mm:ss" // July 15, 2021 20:45:34

[note] [Reference the Globalize library](/concepts/Common/Localization/05%20Localize%20Dates%2C%20Numbers%2C%20and%20Currencies/10%20Using%20Globalize.md '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Globalize') in your application to use other <a href="http://unicode.org/reports/tr35/tr35-numbers.html#Special_Pattern_Characters" target="_blank">numeric</a> or <a href="http://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table" target="_blank">datetime</a> format characters.

#####See Also#####
- [NumberBox Formatting Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/NumberBox/Formatting)
