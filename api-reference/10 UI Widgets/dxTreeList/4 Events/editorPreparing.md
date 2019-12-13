---
id: dxTreeList.editorPreparing
type: eventType
---
---
##### shortDescription
Raised before an editor is created.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel creating the editor.        
Set it to **true** and implement a custom editor.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.dataField): String
The name of the field that provides data for the column the editor belongs to.

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

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.parentType): String
The editor's location. One of *"dataRow"*, *"filterRow"*, *"headerRow"* or *"searchPanel"*.

##### field(e.readOnly): Boolean
Indicates whether the editor is read-only.

##### field(e.row): dxTreeListRowObject
The [properties](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/') of the row the editor belongs to.

##### field(e.rtlEnabled): Boolean
Indicates whether the editor uses right-to-left representation.

##### field(e.setValue(newValue, newText)): any
A method you should call to change the cell value and, optionally, the displayed value after the editor's value is changed.

##### field(e.updateValueTimeout): Number
Gets and sets the delay between the moment a user stops typing a filter value and the change is applied. Available if the **parentType** is *"filterRow"* or *"searchPanel"*.

##### field(e.value): any
The editor's value.

##### field(e.width): Number
The editor's width; equals **null** for all editors except for those whose **parentType** equals *"searchPanel"*.

---
Main article: [onEditorPreparing](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onEditorPreparing.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onEditorPreparing')

#####See Also#####
#include common-link-handleevents