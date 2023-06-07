---
id: dxForm.Options.onEditorEnterKey
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the Enter key has been pressed while an editor is focused.

##### param(e): EditorEnterKeyEvent
Information about the event.

---
[important] This function is executed only if the editor raises the **enterKey** event. See the **Events** section in the editor's API reference for the list of events the editor can raise. If the **enterKey** event is absent from the list, but you need to handle the Enter key press, [use another editor](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorType').