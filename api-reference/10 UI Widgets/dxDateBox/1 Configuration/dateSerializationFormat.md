---
default: undefined
type: String
---
---
##### shortDescription
Specifies the serialization format for a date-time value.

---
If you do _not_ set the [value](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#value') at design time, its format cannot be detected automatically by the widget. In this case, specify the **dateSerializationFormat** option. You can also do this to serialize the value to a specific format.

The following formats are supported.

- `"yyyy-MM-dd"` - a local date  

- `"yyyy-MM-ddTHH:mm:ss"` - a local date and time  

- `"yyyy-MM-ddTHH:mm:ssZ"` - the UTC date and time  

- `"yyyy-MM-ddTHH:mm:ssx"` - a date and time with a timezone

Note that this option applies only if the **forceIsoDateParsing** field of the [global configuration object](/api-reference/50%20Common/utils/config(config).md '/Documentation/ApiReference/Common/utils/#configconfig') is set to *true*.

    <!--JavaScript-->
    DevExpress.config({
        forceIsoDateParsing: true
    });