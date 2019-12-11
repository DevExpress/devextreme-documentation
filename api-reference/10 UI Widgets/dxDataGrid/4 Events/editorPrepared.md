---
type: eventType
---
---
##### shortDescription
Raised after an editor is created.

##### param(options): object
Information about the event.

##### field(options.component): DOMComponent
The widget's instance.

##### field(options.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(options.model): object
The model data. Available only if you use Knockout.

##### field(options.parentType): string
The editor's location. One of *'dataRow'*, *'filterRow'*, *'headerRow'* or *'searchPanel'*.      
Options passed to the function depend on this value.

##### field(options.value): any
The editor's value.

##### field(options.setValue(newValue, newText)): any
A method that you should call to change the cell value and, optionally, the displayed value after the editor's value is changed.

##### field(options.updateValueTimeout): number
Gets and sets the delay between the moment a user stops typing a filter value and the moment it is applied. Available if **parentType** is *'filterRow'* or *'searchPanel'*.

##### field(options.width): number
The editor's width; equals **null** for all editors except for those whose **parentType** equals *"searchPanel"*.

##### field(options.disabled): boolean
Indicates whether the editor is disabled.

##### field(options.rtlEnabled): boolean
Indicates whether the editor uses a right-to-left representation.

##### field(options.editorElement): dxElement
The editor's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(options.readOnly): boolean
Indicates whether the editor is read-only.

##### field(options.dataField): string
The name of the field that provides data for the column the editor belongs to.

##### field(options.row): dxDataGridRowObject
The [properties](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/') of the row the editor belongs to.

---
Main article: [onEditorPrepared](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onEditorPrepared.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onEditorPrepared')

#####See Also#####
#include common-link-handleevents