---
id: dxForm.editorEnterKey
type: eventType
---
---
##### shortDescription
Raised when the Enter key has been pressed while an editor is focused.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.dataField): String
The path to the [formData](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData') object field associated with the current editor.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
Main article: [onEditorEnterKey](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/onEditorEnterKey.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onEditorEnterKey')

#####See Also#####
#include common-link-handleevents