---
type: eventType
---
---
##### shortDescription
Fires before an editor is created.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.parentType): string
The editor's location. One of *'dataRow'*, *'filterRow'*, *'headerRow'* or *'searchPanel'*.      
Options passed to the handler depend on this value.

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
Indicates whether the editor uses a right-to-left representation.

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

##### field(e.row): dxDataGridRowObject
The properties of the row to which the editor belongs.

---
Instead, you can use the [onEditorPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onEditorPreparing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onEditorPreparing') option to handle the event.

Many grid elements are constructed on editors. For example, the [search panel](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/3%20Search%20Panel.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Search_Panel') is constructed on a text box, the [selection column](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Command_Columns/') is built on check boxes in full, etc. Obviously, editors are also used to edit a cell or a row in a grid. When default editors provided by **DataGrid** do not meet your requirements, implement a custom editor. For this purpose, attach a handling function to the **editorPreparing** event. This function accepts an object as the parameter. Assign **true** to the **cancel** field of this object. After that, implement your editor using the other fields of this object.

You can distinguish editors by their parent element. Also, the parent element defines data passed to the **editorPreparing** handler. To identify the parent element, check the **parentType** field of the handler's argument.

When the **parentType** is *'dataRow'* or *'headerRow'*, you can use the options described in the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') reference section.

[note]If you have specified the [editCellTemplate](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/editCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editCellTemplate') option, the **editorPrepared** event will not fire when a row or a cell switches into the editing state.

#####See Also#####
#include common-link-handleevents