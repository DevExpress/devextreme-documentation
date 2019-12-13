---
id: dxFilterBuilderCustomOperation.customizeText
type: function(fieldInfo)
---
---
##### shortDescription
Customizes the field value's text representation.

##### param(fieldInfo): Object
Information about a **FilterBuilder** field.

##### field(fieldInfo.field): dxFilterBuilderField
The field's configuration.

##### field(fieldInfo.value): String | Number | Date
The field's unformatted value (specified using the editor).

##### field(fieldInfo.valueText): String
The value with the [format](/api-reference/_hidden/dxFilterBuilderField/format.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/fields/#format') applied.

##### return: String
The text to be displayed.

---
#include uiwidgets-ref-functioncontext with { 
    value: "custom operation's configuration"
}