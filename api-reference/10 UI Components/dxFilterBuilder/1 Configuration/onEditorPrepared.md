---
id: dxFilterBuilder.Options.onEditorPrepared
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after an editor is created.

##### param(e): ui/filter_builder:EditorPreparedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's [instance](/api-reference/10%20UI%20Components/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Methods/#instance').

##### field(e.dataField): String
The data field's name.

##### field(e.disabled): Boolean
Indicates whether the editor is disabled.

##### field(e.editorElement): DxElement
#include common-ref-elementparam with { element: "editor" }

##### field(e.editorName): String
The editor's name.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.filterOperation): String
The applied filter operation.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.readOnly): Boolean
Indicates whether the editor is read-only.

##### field(e.rtlEnabled): Boolean
Indicates whether the editor uses right-to-left representation.

##### field(e.setValue): any
A method you need to call to change the field's value after the editor's value changes.

##### field(e.updateValueTimeout): Number
Gets and sets the delay between when a user stops typing the field's value and when the change is applied.

##### field(e.value): any
The editor's value.

##### field(e.width): Number
The editor's width.

---
The UI component offers users different editors to enter a value depending on the field's [dataType](/api-reference/_hidden/dxFilterBuilderField/dataType.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/#dataType'): [Calendar](/api-reference/10%20UI%20Components/dxCalendar '/Documentation/ApiReference/UI_Components/dxCalendar/'), [TextBox](/api-reference/10%20UI%20Components/dxTextBox '/Documentation/ApiReference/UI_Components/dxTextBox/'), [SelectBox](/api-reference/10%20UI%20Components/dxSelectBox '/Documentation/ApiReference/UI_Components/dxSelectBox/'), and so on. Use this function to customize those editors.

[note]You cannot execute this function for fields that use the [editorTemplate](/api-reference/_hidden/dxFilterBuilderField/editorTemplate.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/#editorTemplate').