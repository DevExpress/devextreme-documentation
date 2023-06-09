---
id: dxFilterBuilder.Options.onEditorPrepared
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after an editor is created.

##### param(e): EditorPreparedEvent
Information about the event.

---
The UI component offers users different editors to enter a value depending on the field's [dataType](/api-reference/_hidden/dxFilterBuilderField/dataType.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/#dataType'): [Calendar](/api-reference/10%20UI%20Components/dxCalendar '/Documentation/ApiReference/UI_Components/dxCalendar/'), [TextBox](/api-reference/10%20UI%20Components/dxTextBox '/Documentation/ApiReference/UI_Components/dxTextBox/'), [SelectBox](/api-reference/10%20UI%20Components/dxSelectBox '/Documentation/ApiReference/UI_Components/dxSelectBox/'), and so on. Use this function to customize those editors.

[note]You cannot execute this function for fields that use the [editorTemplate](/api-reference/_hidden/dxFilterBuilderField/editorTemplate.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/#editorTemplate').