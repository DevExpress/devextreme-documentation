---
id: dxCalendar.Options.dateSerializationFormat
type: String
default: undefined
---
---
##### shortDescription
Specifies the date-time value serialization format.

---
Date-time serialization involves date-time value conversion into a string format for storage or transmission. To ensure proper format detection, specify this property.

Use LDML patterns to pass [custom format strings](/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Format_String) to this property.

[important] **dateSerializationFormat** does not support all LDML pattern combinations.

For instance, you can specify the following patterns:

- `"yyyy-MM-dd"`    
A date.  

- `"yyyy-MM-ddTHH:mm:ss"`    
Local date and time.  

- `"yyyy-MM-ddTHH:mm:ssZ"`    
Date and time in UTC.  

- `"yyyy-MM-ddTHH:mm:ssx"`, `"yyyy-MM-ddTHH:mm:ssxx"`, `"yyyy-MM-ddTHH:mm:ssxxx"`    
Date and time with a timezone.

[note]

- You can use this property only if you do not specify the initial [value]({basewidgetpath}/Configuration/#value). **dateSerializationFormat** is calculated automatically if you pass a value in the initial configuration.

- If you specify this property, the **value** will be a string, not a Date object.

- If you use API to change the **value**, make sure that the value has the same format that you specified in this property.

- This property takes effect only if the **forceIsoDateParsing** field is set to **true** in the [global configuration object](/api-reference/50%20Common/utils/config(config).md '/Documentation/ApiReference/Common/utils/#configconfig').

[/note]

#####See Also#####
- [Troubleshooting - Date values are parsed or serialized incorrectly](/concepts/70%20Data%20Binding/90%20Troubleshooting/Date%20values%20are%20parsed%20or%20serialized%20incorrectly.md '/Documentation/Guide/Data_Binding/Troubleshooting/#Date_values_are_parsed_or_serialized_incorrectly')