---
module: localization
export: locale
---
---
##### shortDescription
Sets the current locale identifier.

##### param(locale): String
The required locale identifier.

---
[note] This method should be called only once - at the application's launch. It is necessary to reload the page each time you need to set new locale.