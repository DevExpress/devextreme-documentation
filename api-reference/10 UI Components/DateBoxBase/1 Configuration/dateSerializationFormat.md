---
id: DateBoxBase.Options.dateSerializationFormat
type: String
default: undefined
---
---
##### shortDescription
Specifies the date value serialization format. Use it only if you do not specify the [value](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/#value) at design time.

---
Without a value, the UI component cannot detect the format. In this case, specify the **dateSerializationFormat** property (`"yyyy-MM-dd"` - "2017-03-06").

This property applies only if the **forceIsoDateParsing** field is set to **true** in the [global configuration object](/Documentation/ApiReference/Common/utils/#configconfig).

[note] If you are going to change the **value** using the API, make sure that it has the same format that you specified in this property.

#####See Also#####
- [Troubleshooting - Date values are parsed or serialized incorrectly](/Documentation/Guide/Data_Binding/Troubleshooting/#Date_values_are_parsed_or_serialized_incorrectly)
