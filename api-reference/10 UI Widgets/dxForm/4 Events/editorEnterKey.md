---
type: eventType
---
---
##### shortDescription
Fires after a user presses the Enter key when an editor is focused.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the form instance.

##### field(e.element): jQuery
An HTML element of the form.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.dataField): string
The path to the [formData](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData') object field associated with the current editor.

---
Instead, you can use the [onEditorEnterKey](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/onEditorEnterKey.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onEditorEnterKey') option to handle the event.

#####See Also#####
#include common-link-handleevents