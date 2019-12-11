---
type: function(fieldInfo)
---
---
##### shortDescription
Customizes the field value's text representation.

##### param(fieldInfo): Object
Information about a **FilterBuilder** field.

##### field(fieldInfo.value): String | Number | Date
The field's unformatted value (specified using the editor).

##### field(fieldInfo.valueText): String
The value with the [format](/api-reference/10%20UI%20Widgets/dxFilterBuilder/5%20Field/format.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/#format') applied.

##### field(fieldInfo.field): dxFilterBuilderField
The field's configuration.

##### return: String
The text to be displayed.

---
#include uiwidgets-ref-functioncontext with { 
    value: "custom operation's configuration"
}