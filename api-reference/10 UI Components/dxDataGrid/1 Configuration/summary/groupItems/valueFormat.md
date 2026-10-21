---
id: dxDataGrid.Options.summary.groupItems.valueFormat
---
---
##### shortDescription
Specifies a summary item value's display format.

---
See the [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/') section for information on accepted values. 

If you do not specify this property, the component uses the following global formats:

- [numberFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#numberFormat) for numbers
- [dateFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateFormat) or [dateTimeFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateTimeFormat) for dates, depending on the column [dataType](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataType)

If you do not specify the matching global format either, the component formats dates based on the current application [locale](/Documentation/ApiReference/Common/utils/localization/#locale) and displays unformatted numbers. Date formats that you specify in **valueFormat** also use this locale. Number formats use the **numberFormat** locale if this global format specifies a locale. To specify another locale, define the [locale](/Documentation/ApiReference/Common/Object_Structures/format/#locale) property in **valueFormat**. To change a predefined date format's locale in all components, override this format in [dateTimeFormatPresets](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateTimeFormatPresets).

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GroupSummaries/"
}

[note] This option has no effect if a summary item value is not a number or Date.

#####See Also#####
- [Format Text and Value](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/40%20Format%20Text%20and%20Value.md '/Documentation/Guide/UI_Components/DataGrid/Summaries/Format_Text_and_Value/')