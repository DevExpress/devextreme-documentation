---
id: dxChat.Options.messageTimestampFormat
type: Format
default: 'shorttime'
---
---
##### shortDescription
Specifies the message timestamp format.

---
If you do not specify this property, the component uses the global [timeFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#timeFormat). If you do not specify this global format either, the component selects a format based on the current application [locale](/Documentation/ApiReference/Common/utils/localization/#locale). Formats that you specify in **messageTimestampFormat** also use this locale. To specify another locale, define the [locale](/Documentation/ApiReference/Common/Object_Structures/format/#locale) property in **messageTimestampFormat**. To change a predefined format's locale in all components, override this format in [dateTimeFormatPresets](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateTimeFormatPresets).