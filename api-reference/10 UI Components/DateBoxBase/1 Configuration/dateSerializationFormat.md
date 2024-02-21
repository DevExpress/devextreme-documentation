---
id: DateBoxBase.Options.dateSerializationFormat
type: String
default: undefined
---
---
##### shortDescription
Specifies the date value serialization format.

---
Date serialization involves date value conversion into a string format for storage or transmission. To ensure proper format detection, specify this property.

Use LDML patterns to pass [custom format strings](/concepts/Common/Value%20Formatting/10%20Format%20UI%20Component%20Values/20%20Custom%20Format%20String.md '/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Format_String') to this property.

[important] **dateSerializationFormat** does not support all LDML pattern combinations.

For instance, you can specify the `"yyyy-MM-dd"` date pattern.

[note]

- You can use this property only if you do not specify the initial [value](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/value.md '{basewidgetpath}/Configuration/#value'). **dateSerializationFormat** is calculated automatically if you pass a value in the initial configuration.

- If you specify this property, the **value** will be a string, not a Date object.

- If you use API to change the **value**, make sure that the value has the same format that you specified in this property.

- This property takes effect only if the **forceIsoDateParsing** field is set to **true** in the [global configuration object](/api-reference/50%20Common/utils/config(config).md '/Documentation/ApiReference/Common/utils/#configconfig').

[/note]

#####See Also#####
- [Troubleshooting - Date values are parsed or serialized incorrectly](/concepts/70%20Data%20Binding/90%20Troubleshooting/Date%20values%20are%20parsed%20or%20serialized%20incorrectly.md '/Documentation/Guide/Data_Binding/Troubleshooting/#Date_values_are_parsed_or_serialized_incorrectly')
