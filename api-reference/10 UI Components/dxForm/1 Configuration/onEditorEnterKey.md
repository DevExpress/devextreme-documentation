---
id: dxForm.Options.onEditorEnterKey
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the Enter key has been pressed while an editor is focused.

##### param(e): Object
Information about the event.

##### field(e.component): dxForm
The UI component's instance.

##### field(e.dataField): String
The path to the [formData](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#formData') object field associated with the current editor.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if Knockout is used.

---
[important] This function is executed only if the editor raises the **enterKey** event. See the **Events** section in the editor's API reference for the list of events the editor can raise. If the **enterKey** event is absent from the list, but you need to handle the Enter key press, [use another editor](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorType').