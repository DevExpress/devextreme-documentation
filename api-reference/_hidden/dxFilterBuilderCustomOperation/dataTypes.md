---
id: dxFilterBuilderCustomOperation.dataTypes
acceptValues: 'string' | 'number' | 'date' | 'boolean' | 'object' | 'datetime'
type: Array<String>
default: undefined
---
---
##### shortDescription
Specifies for which data types the operation is available by default.

---
Define this option to make the custom operation available for all fields of specific data types. You can also make the operation available for an individual field by including the operation's [name](/api-reference/_hidden/dxFilterBuilderCustomOperation/name.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/#name') in the field's [filterOperations](/api-reference/_hidden/dxFilterBuilderField/filterOperations.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/fields/#filterOperations') array.