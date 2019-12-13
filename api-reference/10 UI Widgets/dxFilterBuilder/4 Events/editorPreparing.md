---
id: dxFilterBuilder.editorPreparing
type: eventType
---
---
##### shortDescription
Raised before an editor is created.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the creation of the editor.    
Set it to **true** and implement a custom editor if required.

##### field(e.component): {WidgetName}
The widget's [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Methods/#instance').

##### field(e.dataField): String
The data field's name.

##### field(e.disabled): Boolean
Indicates whether the editor is disabled.

##### field(e.editorElement): dxElement
#include common-ref-elementparam with { element: "editor" }

##### field(e.editorName): String
Allows you to change the editor. Accepts names of DevExtreme widgets only, for example, *"dxTextBox"*.      
Import a new editor's module when [DevExtreme modules](/concepts/Common/30%20Modularity '/Documentation/Guide/Common/Modularity/') are used.

##### field(e.editorOptions): Object
Gets and sets the editor configuration.

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
A method you should call to change the field's value after the editor's value changes

##### field(e.updateValueTimeout): Number
Gets and sets the delay between when a user stops typing the field's value and when it is applied.

##### field(e.value): any
The editor's value.

##### field(e.width): Number
The editor's width.

---
Main article: [onEditorPreparing](/api-reference/10%20UI%20Widgets/dxFilterBuilder/1%20Configuration/onEditorPreparing.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#onEditorPreparing')

#####See Also#####
#include common-link-handleevents