---
id: dxTreeList.editorPrepared
type: eventType
---
---
##### shortDescription
Raised after an editor is created.

##### param(options): Object
Information about the event.

##### field(options.component): {WidgetName}
The widget's instance.

##### field(options.dataField): String
The name of the field that provides data for the column the editor belongs to.

##### field(options.disabled): Boolean
Indicates whether the editor is disabled.

##### field(options.editorElement): dxElement
#include common-ref-elementparam with { element: "editor" }

##### field(options.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(options.model): Object
Model data. Available only if you use Knockout.

##### field(options.parentType): String
The editor's location. One of *"dataRow"*, *"filterRow"*, *"headerRow"* or *"searchPanel"*.

##### field(options.readOnly): Boolean
Indicates whether the editor is read-only.

##### field(options.row): dxTreeListRowObject
The [properties](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/') of the row the editor belongs to.

##### field(options.rtlEnabled): Boolean
Indicates whether the editor uses right-to-left representation.

##### field(options.setValue(newValue, newText)): any
A method you should call to change the cell value and, optionally, the displayed value after the editor's value is changed.

##### field(options.updateValueTimeout): Number
Gets and sets the delay between the moment a user stops typing a filter value and the change is applied. Available if the **parentType** is *"filterRow"* or *"searchPanel"*.

##### field(options.value): any
The editor's value.

##### field(options.width): Number
The editor's width; equals **null** for all editors except for those whose **parentType** equals *"searchPanel"*.

---
Main article: [onEditorPrepared](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onEditorPrepared.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onEditorPrepared')

#####See Also#####
#include common-link-handleevents