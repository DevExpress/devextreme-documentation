---
type: eventType
---
---
##### shortDescription
Fires after an editor is created.

##### param(options): object
Information about the event.

##### field(options.component): object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance').

##### field(options.element): jQuery
The widget's container.

##### field(options.model): object
The model data. Available only if you use Knockout.

##### field(options.parentType): string
The editor's location. One of *'dataRow'*, *'filterRow'*, *'headerRow'* or *'searchPanel'*.      
Options passed to the handler depend on this value.

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
Indicates whether the editor uses a right-to-left representation.

##### field(options.editorElement): jQuery
The editor's container.

##### field(options.readOnly): boolean
Indicates whether the editor is read-only.

##### field(options.dataField): string
The name of the field that provides data for the column to which the editor belongs.

##### field(options.row): dxDataGridRowObject
The properties of the row to which the editor belongs.

---
Instead, you can use the [onEditorPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onEditorPrepared.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onEditorPrepared') option to handle the event.

Many grid elements are constructed on editors. For example, the [search panel](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/3%20Search%20Panel.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Search_Panel') is constructed on a text box, the [selection column](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Command_Columns/') is built on check boxes in full, etc. Obviously, editors are also used to edit cells or rows in a grid. When default editors provided by **DataGrid** do not meet your requirements, you can customize them by changing their settings within the **editorPrepared** event handler. This handler will be called after an editor is created.

When implementing the handler, use the object passed to it as its argument. Among the fields of this object, you can find the options of the created editor. These options differ depending on the parent element of the editor. To identify the parent element, check the **parentType** field of the handler's argument.

When the **parentType** is *'dataRow'* or *'headerRow'*, you can use the options described in the [column's](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') reference section.

[note]If you have specified the [editCellTemplate](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/editCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editCellTemplate') option, the **editorPrepared** event will not fire when a row or a cell switches into the editing state.

#####See Also#####
#include common-link-handleevents