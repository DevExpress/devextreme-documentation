---
id: dxCalendar.Options.dateSerializationFormat
type: String | undefined
default: undefined
---
---
##### shortDescription
Specifies the date-time value serialization format.

---
Date-time serialization involves date-time value conversion into a string format for storage or transmission. To ensure proper format detection, specify this property.

Use LDML patterns to pass [custom format strings](/concepts/Common/Value%20Formatting/10%20Format%20UI%20Component%20Values/20%20Custom%20Format%20String.md '/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Format_String') to this property.

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

- You can use this property only if you do not specify the initial [value](/api-reference/10%20UI%20Components/dxCalendar/1%20Configuration/value.md '{basewidgetpath}/Configuration/#value'). **dateSerializationFormat** is calculated automatically if you pass a value in the initial configuration.

- If you specify this property, the **value** will be a string, not a Date object.

- If you use API to change the **value**, make sure that the value has the same format that you specified in this property.

- This property takes effect only if the **forceIsoDateParsing** field is set to **true** in the [global configuration object](/api-reference/50%20Common/utils/config(config).md '/Documentation/ApiReference/Common/utils/#configconfig').

[/note]

#####See Also#####
- [Troubleshooting - Date String Handling Issues](/concepts/80%20Troubleshooting/10%20Date%20String%20Handling%20Issues/00%20Date%20String%20Handling%20Issues.md '/Documentation/Guide/Troubleshooting/Date_String_Handling_Issues/')