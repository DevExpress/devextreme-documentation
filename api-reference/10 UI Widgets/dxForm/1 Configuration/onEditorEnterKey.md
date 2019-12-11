---
EventForAction: ..\4 Events\editorEnterKey.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [editorEnterKey](/api-reference/10%20UI%20Widgets/dxPopup/4%20Events/titleRendered.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Events/#titleRendered') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the form instance.

##### field(e.element): jQuery
An HTML element of the form.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.dataField): string
The path to the [formData](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData') object field associated with the current editor.

---
Assign a function to perform a custom action after a user presses the Enter key when an editor is focused.