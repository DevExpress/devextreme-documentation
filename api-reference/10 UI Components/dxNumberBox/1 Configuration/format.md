---
id: dxNumberBox.Options.format
type: Format
default: ''
---
---
##### shortDescription
Specifies the value's display format and controls user input accordingly.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/NumberBox/Formatting/"
}

The format property can accept the following value types:

- Predefined format    

        <!-- tab: JavaScript -->
        const number = 1.2345;

        type: "fixedPoint" // 1
        type: "decimal" // 1.2345
        type: "percent" // 123%
        type: "currency" // $1

    You can specify the [precision](/api-reference/50%20Common/Object%20Structures/format/precision.md '/Documentation/ApiReference/Common/Object_Structures/format/#precision') property for fractional numbers.

    If you want to apply a different format, you can implement the [formatter](/api-reference/50%20Common/Object%20Structures/format/formatter.md '/Documentation/ApiReference/Common/Object_Structures/format/#formatter') and [parser](/api-reference/50%20Common/Object%20Structures/format/parser.md '/Documentation/ApiReference/Common/Object_Structures/format/#parser') functions or specify a custom format string as described below. For example, you can use this functionality to enable [large number formats](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type').

- Custom format string    

    Use Unicode Locale Data Markup Language (LDML) patterns to specify a custom format string. An LDML pattern consists of wildcard characters and characters displayed as is. The **format** property supports the following wildcard characters:

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

    The examples below demonstrate the behavior of "#" and "0" in fractional numbers:

        <!-- tab: JavaScript -->
        const number = 1234.567;
    
        // Leave the first digit before the decimal point and round up the decimal
        format: "0.0" // 4.6

        const smallNumber = 0.1234;

        // Display nothing in place of a digit
        format: "#.#" // .1

        const largeNumber = 123456.789;

        // Add a group separator
        format: ",##0.###" // 123,456.789
        
    The examples below show different ways to apply percentage formatting to decimals. Use caution if your format string starts with a zero ('0'), because the formatted number may lose leading digits.

        <!-- tab: JavaScript -->
        const smallNumber = 0.01234;

        // Represent as a percentage and limit to two decimal digits
        format: "#0.##%" // 1.23%

        // Add a percent sign and limit to two decimal digits
        format: "#0.##'%'" // 0.01%

    
- Function    
A function should apply a custom format to a value and return the formatted value as a string. Functions are useful for advanced formatting. Refer to the following article for more information: [Custom Function](/concepts/Common/Value%20Formatting/10%20Format%20UI%20Component%20Values/30%20Custom%20Function.md '/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Function').

- Object    
Full format configuration. The object structure is shown in the [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/') API section.

[note] With this property specified, a press on the minus sign (-) inverts the current value instead of entering "-".

[note] If you set this property, the number pad keyboard appears on mobile devices when users focus the editor. Such keyboards may not have a decimal character. Set the [mode](/api-reference/10%20UI%20Components/dxNumberBox/1%20Configuration/mode.md '/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#mode') property to *"text"* to use the standard keyboard instead.

#####See Also#####
- [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/Format/')