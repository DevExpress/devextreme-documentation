---
EventForAction: ..\4 Events\editorPrepared.md
default: null
type: function(options)
---
---
##### shortDescription
A function that is executed after an editor is created.

##### param(options): Object
Information about the event.

##### field(options.component): DOMComponent
The widget's instance.

##### field(options.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(options.model): Object
The model data. Available only if you use Knockout.

##### field(options.parentType): String
The editor's location. One of *'dataRow'*, *'filterRow'*, *'headerRow'* or *'searchPanel'*.

##### field(options.value): any
The editor's value.

##### field(options.setValue(newValue, newText)): any
A method that you should call to change the cell value and, optionally, the displayed value after the editor's value is changed.

##### field(options.updateValueTimeout): Number
Gets and sets the delay between the moment a user stops typing a filter value and the moment it is applied. Available if **parentType** is *'filterRow'* or *'searchPanel'*.

##### field(options.width): Number
The editor's width; equals **null** for all editors except for those whose **parentType** equals *"searchPanel"*.

##### field(options.disabled): Boolean
Indicates whether the editor is disabled.

##### field(options.rtlEnabled): Boolean
Indicates whether the editor uses right-to-left representation.

##### field(options.editorElement): dxElement
The editor's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(options.readOnly): Boolean
Indicates whether the editor is read-only.

##### field(options.dataField): String
The name of the field that provides data for the column the editor belongs to.

##### field(options.row): dxTreeListRowObject
The [properties](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/') of the row the editor belongs to.

---
Numerous **TreeList** elements are based on editors: the [search panel](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/3%20Search%20Panel.md '/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Search_Panel') is a text box, the [filter row](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/1%20Filter%20Row.md '/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Filter_Row') uses text boxes, calendars, and select boxes, and so on. This function allows you to add custom CSS classes to those default editors. To change their configuration or substitute them for other editors, use the [onEditorPreparing](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onEditorPreparing.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onEditorPreparing') function.

[note] This function is not executed for cells that use the [editCellTemplate](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns/editCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#editCellTemplate').