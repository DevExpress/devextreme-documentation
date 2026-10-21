---
id: Format.locale
type: FormatLocale
---
---
##### shortDescription
Specifies the locale used to format and parse values.

---
If you specify only **locale**, DevExtreme uses default predefined formats. For example, `{ locale: "de-DE" }` formats values as follows:

<table class="dx-table">
    <tr>
        <th>Raw Value</th>
        <th>Formatted Value</th>
    </tr>
    <tr>
        <td>1234.5678</td>
        <td>1.234,568</td>
    </tr>
    <tr>
        <td>June 15, 2024</td>
        <td>15.6.2024</td>
    </tr>
</table>

DevExtreme selects a locale for each value in the following order:

1. The **locale** field in this format.
2. The **locale** field in the global format for the value type:
    - [numberFormat](/api-reference/50%20Common/Object%20Structures/GlobalConfig/numberFormat.md '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#numberFormat')
    - [dateFormat](/api-reference/50%20Common/Object%20Structures/GlobalConfig/dateFormat.md '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateFormat')
    - [timeFormat](/api-reference/50%20Common/Object%20Structures/GlobalConfig/timeFormat.md '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#timeFormat')
    - [dateTimeFormat](/api-reference/50%20Common/Object%20Structures/GlobalConfig/dateTimeFormat.md '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateTimeFormat')
3. The [current locale](/api-reference/50%20Common/utils/localization/locale().md '/Documentation/ApiReference/Common/utils/localization/#locale').

The **locale** field does not affect [formatter](/api-reference/50%20Common/Object%20Structures/format/formatter.md '/Documentation/ApiReference/Common/Object_Structures/Format/#formatter') and [parser](/api-reference/50%20Common/Object%20Structures/format/parser.md '/Documentation/ApiReference/Common/Object_Structures/Format/#parser') functions.
