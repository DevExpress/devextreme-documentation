---
id: dxCalendar.Options.dateSerializationFormat
type: String
default: undefined
---
---
##### shortDescription
Specifies the date-time value serialization format.

---
Date-time serialization involves converting date-time objects into a string format for storage or transmission. To ensure proper format detection, specify this property.

Use LDML patterns to pass [custom format strings](/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Format_String) to this property.

[important] **dateSerializationFormat** does not support all LDML pattern combinations.

For instance, you can specify the following patterns:

- `"yyyy-MM-dd"`    
A local date.  

- `"yyyy-MM-ddTHH:mm:ss"`    
Local date and time.  

- `"yyyy-MM-ddTHH:mm:ssZ"`    
The UTC date and time.  

- `"yyyy-MM-ddTHH:mm:ssx"`, `"yyyy-MM-ddTHH:mm:ssxx"`, `"yyyy-MM-ddTHH:mm:ssxxx"`    
Date and time with a timezone.

[note]

- You can use this property only if you do not specify the initial [value](/api-reference/10%20UI%20Components/dxCalendar/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#value'). **dateSerializationFormat** is calculated automatically if you pass a value in the initial configuration.

- If you specify this property, the **value** will be a string, not a Date object.

- If use API to change the **value**, make sure that the value has the same format that you specified in this property.

- This property applies only if the **forceIsoDateParsing** field is set to **true** in the [global configuration object](/api-reference/50%20Common/utils/config(config).md '/Documentation/ApiReference/Common/utils/#configconfig').

[/note]

#####See Also#####
- [Troubleshooting - Date values are parsed or serialized incorrectly](/concepts/70%20Data%20Binding/90%20Troubleshooting/Date%20values%20are%20parsed%20or%20serialized%20incorrectly.md '/Documentation/Guide/Data_Binding/Troubleshooting/#Date_values_are_parsed_or_serialized_incorrectly')