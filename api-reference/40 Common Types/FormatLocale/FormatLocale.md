---
id: FormatLocale
module: common/core/localization
export: FormatLocale
type: String | function()
---
---
##### shortDescription
A locale identifier or a function that returns a locale identifier.

##### return: String
The locale identifier.

---
Locale identifiers are [BCP 47](https://developer.mozilla.org/en-US/docs/Glossary/BCP_47_language_tag) language tags, such as *"de"* or *"de-DE"*.

Use a function to change this locale at runtime. DevExtreme libraries call this function each time a value is parsed or formatted. To ensure a DevExtreme component updates displayed values when you change this locale, call the component's **repaint()** method.

#####See Also#####
- **format**.[locale](/Documentation/ApiReference/Common/Object_Structures/Format/#locale)
