---
id: dxScheduler.Options.dateSerializationFormat
type: String
default: undefined
---
---
##### shortDescription
Specifies the date-time values' serialization format. Use it only if you do not specify the [dataSource](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') at design time.

---
Without a data source, the widget cannot detect the date-time values' format. In this case, specify the **dateSerializationFormat** option that supports the following formats:

- `"yyyy-MM-dd"` - a local date  

- `"yyyy-MM-ddTHH:mm:ss"` - local date and time  

- `"yyyy-MM-ddTHH:mm:ssZ"` - the UTC date and time  

- `"yyyy-MM-ddTHH:mm:ssx"` - date and time with a timezone

This option applies only if the **forceIsoDateParsing** field is set to **true** in the [global configuration object](/api-reference/50%20Common/utils/config(config).md '/Documentation/ApiReference/Common/utils/#configconfig').