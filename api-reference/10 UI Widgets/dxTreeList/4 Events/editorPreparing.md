---
type: eventType
---
---
##### shortDescription
Raised before an editor is created.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget's [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.parentType): string
The editor's location. One of *'dataRow'*, *'filterRow'*, *'headerRow'* or *'searchPanel'*.

##### field(e.value): any
The editor's value.

##### field(e.setValue(newValue)): any
A method that you should call to change the cell value after the editor's value is changed.

##### field(e.updateValueTimeout): number
Gets and sets the delay between the moment a user stops typing a filter value and the moment it is applied. Available if **parentType** is *'filterRow'* or *'searchPanel'*.

##### field(e.width): number
The editor's width; equals **null** for all editors except for those whose **parentType** equals *"searchPanel"*.

##### field(e.disabled): boolean
Indicates whether the editor is disabled.

##### field(e.rtlEnabled): boolean
Indicates whether the editor uses right-to-left representation.

##### field(e.cancel): boolean
Allows you to cancel the creation of the editor.    
Set it to **true** and implement a custom editor if your scenario requires it.

##### field(e.editorElement): jQuery
The editor's container.

##### field(e.readOnly): boolean
Indicates whether the editor is read-only.

##### field(e.editorName): string
Allows you to change the editor. Accepts names of DevExtreme widgets only, for example, *"dxTextBox"*.  
Import a new editor's module when using [DevExtreme modules](/concepts/Common/30%20Modularity '/Documentation/Guide/Common/Modularity/').

##### field(e.editorOptions): object
Gets and sets the editor configuration.

##### field(e.dataField): string
The name of the field that provides data for the column to which the editor belongs.

##### field(e.row): dxTreeListRowObject
The properties of the row to which the editor belongs.

---
Main article: [onEditorPreparing](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onEditorPreparing.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onEditorPreparing')

#####See Also#####
#include common-link-handleevents