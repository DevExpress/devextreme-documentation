---
id: ColumnProperties.format
type: Format
default: ''
---
---
##### shortDescription
Formats a value before it is displayed in a field.

---
See the [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/') section for information on accepted values.

If you do not specify this property, the component uses the global [dateFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateFormat), [dateTimeFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateTimeFormat), or [numberFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#numberFormat) that matches the [dataType]({basewidgetpath}/Configuration/columns/#dataType) value. If you do not specify the matching global format either, the component formats dates based on the current application [locale](/Documentation/ApiReference/Common/utils/localization/#locale) and displays unformatted numbers. Date formats that you specify in **format** also use this locale. Number formats use the **numberFormat** locale if this global format specifies a locale. To specify another locale, define the [locale](/Documentation/ApiReference/Common/Object_Structures/format/#locale) property in **format**. To change a predefined date format's locale in all components, override this format in [dateTimeFormatPresets](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateTimeFormatPresets).