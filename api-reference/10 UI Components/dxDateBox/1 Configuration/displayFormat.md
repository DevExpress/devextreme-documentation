---
id: dxDateBox.Options.displayFormat
type: Format
default: null
---
---
##### shortDescription
Specifies the date display format. Ignored if the [pickerType](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/pickerType.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#pickerType') property is *"native"*

---
If you do not specify this property, the component uses the global [dateFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateFormat), [timeFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#timeFormat), or [dateTimeFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateTimeFormat), depending on the [type](/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#type) value. If you do not specify this global format either, the component selects a display format based on the current application [locale](/api-reference/50%20Common/utils/localization/locale().md '/Documentation/ApiReference/Common/utils/localization/#locale'). This locale also applies to the **displayFormat** value by default. To specify another locale, define the [locale](/Documentation/ApiReference/Common/Object_Structures/format/#locale) property in **displayFormat**. To change a predefined format's locale in all components, override this format in [dateTimeFormatPresets](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateTimeFormatPresets).

Enable [useMaskBehavior](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/useMaskBehavior.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#useMaskBehavior') to control user input according to the display format.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DateBox/Formatting/"
}
#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-date-box-parse-short-year-format"
}

#####See Also#####
- [Format UI Component Values](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/10%20Format%20UI%20Component%20Values/00%20Format%20UI%20Component%20Values.md '/Documentation/Guide/Common/Localization_and_Globalization/Value_Formatting/#Format_UI_Component_Values')
