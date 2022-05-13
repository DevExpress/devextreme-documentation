Use Unicode Locale Data Markup Language (LDML) patterns to specify a custom format string. An LDML pattern consists of wildcard characters and characters displayed as is. The **format** property supports the following wildcard characters:

**Numeric Formats**

<table class="dx-table">
    <tr>
    <th>Format character</th>
    <th>Description</th>
    </tr>
    <tr>
    <td>0</td>
    <td>A digit. Displays '0' if the formatted number does not have a digit in that position.</td>
    </tr>
    <tr>
    <td>&#35;</td>
    <td>
            Any number of leading digits, a single digit, or nothing. If this character goes first in the format string, it can match multiple leading digits (before the decimal point). Subsequent characters match a single digit. If the formatted number does not have a digit in the corresponding position, it displays nothing.</br>
            For example, if you apply format "#0.#" to "123.45", the result is "123.4".
    </td>
    </tr>
    <tr>
    <td>.</td>
    <td>
            A decimal separator. </br>
            Actual character depends on locale.
    </td>
    </tr>
    <tr>
    <td>,</td>
    <td>
            A group separator. </br>
            Actual character depends on locale.
    </td>
    </tr>
    <tr>
    <td>%</td>
    <td>
            The percent sign. Multiplies the input value by 100.
    </td>
    </tr>
    <tr>
    <td>;</td>
    <td>    Separates positive and negative format patterns.  </br>
            For example, the "#0.##;(#0.##)" format displays a positive number according to the pattern before the semicolon (";"), and a negative number according to the pattern after the semicolon (";").</br>
            If you do not use this character and the additional pattern, negative numbers display a minus ("-") prefix.
    </td>
    </tr>
    <tr>
    <td>Escape characters</td>
    <td>
            You can display the special characters above as literals if you enclose them in single quotation marks. <br/>
            For example, '%'.
    </td>
    </tr>
    <td>Other characters</td>
    <td>
            You can add any literal characters to the beginning or end of the format string.
    </td>
    </tr>
</table>

The example below demonstrates the behavior of "#" and "0" in fractional numbers:

    <!-- tab: JavaScript -->
    const number = 12.34;
    
    // Delete all digits except the digits around the decimal point
    format: "0.0" // 2.3

    const smallNumber = 0.1234;

    // Display nothing in place of a digit
    format: "#.#" // .1

    const largeNumber = 123456.789;

    // Limit the decimal part to one digit
    format: "#0.#" // 123456.7

    // Add a group separator
    format: ",##0.###" // 123,456.789
    
The examples below show different ways to apply percentage formatting to decimals. Use caution if your format string starts with a zero ('0'), because the formatted number may lose leading digits.

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
