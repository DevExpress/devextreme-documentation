---
id: Format.locale
type: FormatLocale
---
---
##### shortDescription
Specifies the locale in which to format and parse values.

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
    - [numberFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#numberFormat)
    - [dateFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateFormat)
    - [timeFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#timeFormat)
    - [dateTimeFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateTimeFormat)
3. The [current locale](/Documentation/ApiReference/Common/utils/localization/#locale).

The **locale** field does not affect [formatter](/Documentation/ApiReference/Common/Object_Structures/Format/#formatter) and [parser](/Documentation/ApiReference/Common/Object_Structures/Format/#parser) functions.
