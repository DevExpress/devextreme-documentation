---
EventForAction: ..\4 Events\editorPrepared.md
default: null
type: function(options)
---
---
##### shortDescription
A handler for the **editorPrepared** event. Executed after an editor is created.

##### param(options): Object
Information about the event.

##### field(options.component): Object
The widget's [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#instance').

##### field(options.element): jQuery
The widget's container.

##### field(options.model): Object
The model data. Available only if you use Knockout.

##### field(options.parentType): String
The editor's location. One of *'dataRow'*, *'filterRow'*, *'headerRow'* or *'searchPanel'*.

##### field(options.value): any
The editor's value.

##### field(options.setValue(newValue)): any
A method that you need to call to change the cell value after the editor's value is changed.

##### field(options.updateValueTimeout): Number
Gets and sets the delay between the moment a user stops typing a filter value and the moment it is applied. Available if **parentType** is *'filterRow'* or *'searchPanel'*.

##### field(options.width): Number
The editor's width; equals **null** for all editors except for those whose **parentType** equals *"searchPanel"*.

##### field(options.disabled): Boolean
Indicates whether the editor is disabled.

##### field(options.rtlEnabled): Boolean
Indicates whether the editor uses right-to-left representation.

##### field(options.editorElement): jQuery
The editor's container.

##### field(options.readOnly): Boolean
Indicates whether the editor is read-only.

##### field(options.dataField): String
The name of the field that provides data for the column to which the editor belongs.

##### field(options.row): dxTreeListRowObject
The properties of the row to which the editor belongs.

---
Many **TreeList** elements are based on editors. For example, the search panel is based on a text box, a selection column uses check boxes, etc. You can customize automatically created editors using this handler. 

[note]For cells that use the [editCellTemplate](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns/editCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#editCellTemplate'), the **onEditorPrepared** handler is not executed.