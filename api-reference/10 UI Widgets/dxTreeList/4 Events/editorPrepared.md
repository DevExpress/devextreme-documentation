---
type: eventType
---
---
##### shortDescription
Raised after an editor is created.

##### param(options): object
Information about the event.

##### field(options.component): object
The widget's [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#instance').

##### field(options.element): jQuery
The widget's container.

##### field(options.model): object
The model data. Available only if you use Knockout.

##### field(options.parentType): string
The editor's location. One of *'dataRow'*, *'filterRow'*, *'headerRow'* or *'searchPanel'*.

##### field(options.value): any
The editor's value.

##### field(options.setValue(newValue)): any
A method that you need to call to change the cell value after the editor's value is changed.

##### field(options.updateValueTimeout): number
Gets and sets the delay between the moment a user stops typing a filter value and the moment it is applied. Available if **parentType** is *'filterRow'* or *'searchPanel'*.

##### field(options.width): number
The editor's width; equals **null** for all editors except for those whose **parentType** equals *"searchPanel"*.

##### field(options.disabled): boolean
Indicates whether the editor is disabled.

##### field(options.rtlEnabled): boolean
Indicates whether the editor uses right-to-left representation.

##### field(options.editorElement): jQuery
The editor's container.

##### field(options.readOnly): boolean
Indicates whether the editor is read-only.

##### field(options.dataField): string
The name of the field that provides data for the column to which the editor belongs.

##### field(options.row): dxTreeListRowObject
The properties of the row to which the editor belongs.

---
Main article: [onEditorPrepared](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onEditorPrepared.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onEditorPrepared')

#####See Also#####
#include common-link-handleevents