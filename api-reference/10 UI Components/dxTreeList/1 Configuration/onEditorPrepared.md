---
id: dxTreeList.Options.onEditorPrepared
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after an editor is created. Not executed for cells with an [editCellTemplate](/api-reference/_hidden/dxTreeListColumn/editCellTemplate.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#editCellTemplate').

##### param(e): ui/tree_list:EditorPreparedEvent
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.dataField): String
The name of the field that provides data for the column the editor belongs to.

##### field(e.disabled): Boolean
Indicates whether the editor is disabled.

##### field(e.editorElement): DxElement
#include common-ref-elementparam with { element: "editor" }

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.parentType): String
The editor's location. One of *"dataRow"*, *"filterRow"*, *"headerRow"* or *"searchPanel"*.

##### field(e.readOnly): Boolean
Indicates whether the editor is read-only.

##### field(e.row): dxTreeListRowObject
The [properties](/api-reference/10%20UI%20Components/dxTreeList/6%20Row '/Documentation/ApiReference/UI_Components/dxTreeList/Row/') of the row the editor belongs to.

##### field(e.rtlEnabled): Boolean
Indicates whether the editor uses right-to-left representation.

##### field(e.setValue): any
A method you should call to change the cell value and, optionally, the displayed value after the editor's value is changed.

##### field(e.updateValueTimeout): Number
Gets and sets the delay between the moment a user stops typing a filter value and the change is applied. Available if the **parentType** is *"filterRow"* or *"searchPanel"*.

##### field(e.value): any
The editor's value.

##### field(e.width): Number
The editor's width; equals **null** for all editors except for those whose **parentType** equals *"searchPanel"*.

---
