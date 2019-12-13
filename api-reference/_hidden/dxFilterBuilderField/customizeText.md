---
id: dxFilterBuilderField.customizeText
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
The value with the [format](/api-reference/_hidden/dxFilterBuilderField/format.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/fields/#format') applied.

##### return: String
The input value's text.

---
#include uiwidgets-ref-functioncontext with { 
    value: "field's configuration"
}