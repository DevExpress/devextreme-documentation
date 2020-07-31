---
id: dxTreeList.Options.onEditorPreparing
type: function(e)
default: null
EventForAction: dxTreeList.editorPreparing
---
---
##### shortDescription
<!-- %shortDescription% -->

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
<!-- %field(e.cancel)% -->

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.dataField): String
The name of the field that provides data for the column the editor belongs to.

##### field(e.disabled): Boolean
Indicates whether the editor is disabled.

##### field(e.editorElement): dxElement
#include common-ref-elementparam with { element: "editor" }

##### field(e.editorName): String
<!-- %field(e.editorName)% -->

##### field(e.editorOptions): Object
<!-- %field(e.editorOptions)% -->

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
<!-- %field(e.setValue(newValue, newText))% -->

##### field(e.updateValueTimeout): Number
Gets and sets the delay between the moment a user stops typing a filter value and the change is applied. Available if the **parentType** is *"filterRow"* or *"searchPanel"*.

##### field(e.value): any
<!-- %field(e.value)% -->

##### field(e.width): Number
The editor's width; equals **null** for all editors except for those whose **parentType** equals *"searchPanel"*.

---
<!-- %fullDescription% -->

<!-- import * from 'api-reference\10 UI Widgets\dxDataGrid\1 Configuration\onEditorPreparing.md' -->