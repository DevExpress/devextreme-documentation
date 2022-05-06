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

    You can specify the [precision](/Documentation/ApiReference/Common/Object_Structures/format/#precision) property for decimal numbers.

    NumberBox does not support large number formats. If you want to apply these formats, you can implement the [formatter](/api-reference/50%20Common/Object%20Structures/format/formatter.md '/Documentation/ApiReference/Common/Object_Structures/format/#formatter') and [parser](/api-reference/50%20Common/Object%20Structures/format/parser.md '/Documentation/ApiReference/Common/Object_Structures/format/#parser') functions or specify a custom format string.

- Custom format string    

    Use Unicode Locale Data Markup Language (LDML) patterns to specify a custom format string. An LDML pattern consists of wildcard characters and characters displayed as is. The **format** property supports the following wildcard characters:

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
        
    The example below shows how to specify percentages when you work with decimals. It is necessary to add a `#` character at the start of an LDML pattern to avoid digits before `.` to be deleted.

        <!-- tab: JavaScript -->
        const smallNumber = 0.01234;

        // Represent as a percentage and limit to two decimal digits
        format: "#0.##%" // 1.23%

        // Add a percent sign and limit to two decimal digits
        format: "#0.##'%'" // 0.01%

        const number = 0.80785;

        // Remove all the numbers except the last digit before '.'
        format: "0.##%" // 0.79%, would be 80.79% if the format is "#0.##%"

    
- Function    
A function should apply a custom format to a value and return the formatted value as a string. Functions are useful for advanced formatting. Refer to the following article for more information: [Custom Function](/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Function).

- Object    
Full format configuration. The object structure is shown in the [format](/Documentation/ApiReference/Common/Object_Structures/format/) API section.

[note] With this property specified, a press on Minus Sign (-) inverts the current value instead of entering "-".

[note] If you set this property, the telephone keyboard is used for editing on mobile devices. However, it may not have a point, comma, or other symbols for entering decimals. Set the [mode](/api-reference/10%20UI%20Components/dxNumberBox/1%20Configuration/mode.md '/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#mode') property to *"text"* to use the standard keyboard instead.

#####See Also#####
- [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/Format/')