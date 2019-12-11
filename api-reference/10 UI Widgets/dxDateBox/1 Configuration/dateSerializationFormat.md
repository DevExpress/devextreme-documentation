---
id: dxDateBox.Options.dateSerializationFormat
type: String
default: undefined
---
---
##### shortDescription
Specifies the date-time value serialization format. Use it only if you do not specify the [value](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#value') at design time.

---
Without a value, the widget cannot detect its format. In this case, specify the **dateSerializationFormat** option that supports the following formats:

- `"yyyy-MM-dd"` - a local date  

- `"yyyy-MM-ddTHH:mm:ss"` - local date and time  

- `"yyyy-MM-ddTHH:mm:ssZ"` - the UTC date and time  

- `"yyyy-MM-ddTHH:mm:ssx"` - date and time with a timezone

This option applies only if the **forceIsoDateParsing** field is set to **true** in the [global configuration object](/api-reference/50%20Common/utils/config(config).md '/Documentation/ApiReference/Common/utils/#configconfig').

[note] If you are going to change the **value** using the API, make sure that it has the same format that you specified in this option.