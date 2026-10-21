---
id: dxChat.Options.dayHeaderFormat
type: Format
default: 'shortdate'
---
---
##### shortDescription
Specifies the day header format.

---
If you do not specify this property, the component uses the global [dateFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateFormat). If you do not specify this global format either, the component selects a format based on the current application [locale](/Documentation/ApiReference/Common/utils/localization/#locale). Formats that you specify in **dayHeaderFormat** also use this locale. To specify another locale, define the [locale](/Documentation/ApiReference/Common/Object_Structures/format/#locale) property in **dayHeaderFormat**. To change a predefined format's locale in all components, override this format in [dateTimeFormatPresets](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateTimeFormatPresets).