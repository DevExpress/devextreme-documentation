---
id: dxFilterBuilder.Options.onEditorPrepared
type: function(e)
default: null
EventForAction: dxFilterBuilder.editorPrepared
---
---
##### shortDescription
A function that is executed after an editor is created.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Methods/#instance').

##### field(e.dataField): String
The data field's name.

##### field(e.disabled): Boolean
Indicates whether the editor is disabled.

##### field(e.editorElement): dxElement
#include common-ref-elementparam with { element: "editor" }

##### field(e.editorName): String
The editor's name.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.filterOperation): String
The applied filter operation.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.readOnly): Boolean
Indicates whether the editor is read-only.

##### field(e.rtlEnabled): Boolean
Indicates whether the editor uses right-to-left representation.

##### field(e.setValue(newValue)): any
A method you need to call to change the field's value after the editor's value changes.

##### field(e.updateValueTimeout): Number
Gets and sets the delay between when a user stops typing the field's value and when it is applied.

##### field(e.value): any
The editor's value.

##### field(e.width): Number
The editor's width.

---
The widget offers a user a different editor for entering a value depending on the field's [dataType](/api-reference/_hidden/dxFilterBuilderField/dataType.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/fields/#dataType'): [Calendar](/concepts/05%20Widgets/Calendar/00%20Overview.md '/Documentation/Guide/Widgets/Calendar/Overview/'), [TextBox](/concepts/05%20Widgets/TextBox/00%20Overview.md '/Documentation/Guide/Widgets/TextBox/Overview/'), [SelectBox](/api-reference/10%20UI%20Widgets/dxSelectBox '/Documentation/ApiReference/UI_Widgets/dxSelectBox/'), etc. You can customize automatically created editors using this function.

[note]This function is not executed for fields that use the [editorTemplate](/api-reference/_hidden/dxFilterBuilderField/editorTemplate.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/fields/#editorTemplate').