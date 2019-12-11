---
EventForAction: ..\4 Events\editorPrepared.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **editorPrepared** event. Executed after an editor is created.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Methods/#instance').

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.value): any
The editor's value.

##### field(e.setValue(newValue)): any
A method that you need to call to change the data field's value after the editor's value is changed.

##### field(e.editorElement): dxElement
The editor's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.editorName): String
The editor's name.

##### field(e.dataField): String
The data field's name.

##### field(e.updateValueTimeout): Number
Gets and sets the delay between when a user stops typing a field value and when it is applied.

##### field(e.width): Number
The editor's width.

##### field(e.readOnly): Boolean
Indicates whether the editor is read-only.

##### field(e.disabled): Boolean
Indicates whether the editor is disabled.

##### field(e.rtlEnabled): Boolean
Indicates whether the editor uses right-to-left representation.

---
The widget offers a user a different editor for entering a value depending on the field's [dataType](/api-reference/10%20UI%20Widgets/dxFilterBuilder/5%20Field/dataType.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/#dataType'): [Calendar](/concepts/05%20Widgets/Calendar/00%20Overview.md '/Documentation/Guide/Widgets/Calendar/Overview/'), [TextBox](/concepts/05%20Widgets/TextBox/00%20Overview.md '/Documentation/Guide/Widgets/TextBox/Overview/'), [SelectBox](/concepts/05%20Widgets/SelectBox/00%20Overview.md '/Documentation/Guide/Widgets/SelectBox/Overview/'), etc. You can customize automatically created editors using this handler.

[note]This handler is not executed for fields that use the [editorTemplate](/api-reference/10%20UI%20Widgets/dxFilterBuilder/5%20Field/editorTemplate.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/#editorTemplate').