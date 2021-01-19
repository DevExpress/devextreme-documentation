---
id: Editor.Options.validationMessageMode
acceptValues: 'always' | 'auto'
type: String
default: 'auto'
---
---
##### shortDescription
Specifies how the message about the [validation rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') that are not satisfied by this editor's value is displayed.

---
The following option values are possible:

- **auto**  
The tooltip with the message is displayed when the editor is in focus.
- **always**  
The tooltip with the message is not hidden when the editor loses focus.

#include common-ref-enum with {
    enum: "`ValidationMessageMode`",
    values: "`Auto` and `Always`"
}