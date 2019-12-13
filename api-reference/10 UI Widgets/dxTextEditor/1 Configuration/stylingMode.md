---
id: dxTextEditor.Options.stylingMode
acceptValues: 'outlined' | 'underlined' | 'filled'
type: String
default: 'outlined', 'underlined' (Material)
---
---
##### shortDescription
Specifies how the widget's text field is styled.

---
The following styles are available: 

![Text Editor Styling Modes](/images/UiWidgets/textEditors_stylingMode.png)

#include common-ref-enum with {
    enum: "`EditorStylingMode`",
    values: "`Outlined`, `Underlined`, and `Filled`"
}

You can also use the global [editorStylingMode](/api-reference/50%20Common/Object%20Structures/globalConfig/editorStylingMode.md '/Documentation/ApiReference/Common/Object_Structures/globalConfig/#editorStylingMode') setting to specify how the text fields of all editors in your application are styled.