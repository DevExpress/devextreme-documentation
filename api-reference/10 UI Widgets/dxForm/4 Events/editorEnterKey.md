---
type: eventType
---
---
##### shortDescription
Fires after a user presses the Enter key when an editor is focused.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The form's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.dataField): string
The path to the [formData](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData') object field associated with the current editor.

---
Instead, you can use the [onEditorEnterKey](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/onEditorEnterKey.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onEditorEnterKey') option to handle the event.

#####See Also#####
#include common-link-handleevents