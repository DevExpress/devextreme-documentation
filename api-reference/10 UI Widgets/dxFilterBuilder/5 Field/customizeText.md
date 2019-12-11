---
type: function(fieldInfo)
---
---
##### shortDescription
Customizes the input value's display text.

##### param(fieldInfo): Object
The field's data.

##### field(fieldInfo.value): String | Number | Date
The unformatted value (as specified using the editor or in the lookup's data source).

##### field(fieldInfo.valueText): String
The value with the [format](/api-reference/10%20UI%20Widgets/dxFilterBuilder/5%20Field/format.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/#format') applied.

##### return: String
The input value's text.

---
#include uiwidgets-ref-functioncontext with { 
    value: "field's configuration"
}