---
id: globalConfig.forceIsoDateParsing
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether dates are parsed and serialized according to the ISO 8601 standard in all browsers.

---
The default value is **true**. This implies that UI components detect date-time values' format automatically. If the values are not provided to the UI component yet, you need to specify the format explicitly using the UI component's **dateSerializationFormat** option. When you assign **false** to the **forceIsoDateParsing**, a browser's resources are utilized to parse and serialize date-time values.