---
type: eventType
---
---
##### shortDescription
Raised before an editor is created.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Methods/#instance').

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.value): any
The editor's value.

##### field(e.setValue(newValue)): any
A method that you should call to change the field value after the editor's value is changed.

##### field(e.cancel): boolean
Allows you to cancel the creation of the editor.    
Set it to **true** and implement a custom editor if your scenario requires it.

##### field(e.editorElement): dxElement
The editor's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.editorName): string
Allows you to change the editor. Accepts names of DevExtreme widgets only, for example, *"dxTextBox"*.          
Import a new editor's module when using [DevExtreme modules](/concepts/Common/30%20Modularity '/Documentation/Guide/Common/Modularity/').

##### field(e.editorOptions): object
Gets and sets the editor configuration.

##### field(e.dataField): string
The data field's name.

##### field(e.updateValueTimeout): number
Gets and sets the delay between when a user stops typing a field value and when it is applied.

##### field(e.width): number
The editor's width.

##### field(e.readOnly): boolean
Indicates whether the editor is read-only.

##### field(e.disabled): boolean
Indicates whether the editor is disabled.

##### field(e.rtlEnabled): boolean
Indicates whether the editor uses right-to-left representation.

---
Main article: [onEditorPreparing](/api-reference/10%20UI%20Widgets/dxFilterBuilder/1%20Configuration/onEditorPreparing.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#onEditorPreparing')

#####See Also#####
#include common-link-handleevents