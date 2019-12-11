---
EventForAction: ..\4 Events\editorPreparing.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [editorPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/editorPreparing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#editorPreparing') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.parentType): String
The editor's location. One of *'dataRow'*, *'filterRow'*, *'headerRow'* or *'searchPanel'*.      
Options passed to the handler depend on this value.

##### field(e.value): any
The editor's value.

##### field(e.setValue(newValue)): any
A method that you should call to change the cell value after the editor's value is changed.

##### field(e.updateValueTimeout): Number
Gets and sets the delay between the moment a user stops typing a filter value and the moment it is applied. Available if **parentType** is *'filterRow'* or *'searchPanel'*.

##### field(e.width): Number
The editor's width; equals **null** for all editors except for those whose **parentType** equals *"searchPanel"*.

##### field(e.disabled): Boolean
Indicates whether the editor is disabled.

##### field(e.rtlEnabled): Boolean
Indicates whether the editor uses a right-to-left representation.

##### field(e.cancel): Boolean
Allows you to cancel the creation of the editor.        
Set it to **true** and implement a custom editor if your scenario requires it.

##### field(e.editorElement): jQuery
The editor's container.

##### field(e.readOnly): Boolean
Indicates whether the editor is read-only.

##### field(e.editorName): String
Allows you to change the editor. Accepts names of DevExtreme widgets only, for example, *"dxTextBox"*.      
Import a new editor's module when using [DevExtreme modules](/concepts/Common/30%20Modularity '/Documentation/Guide/Common/Modularity/').

##### field(e.editorOptions): Object
Gets and sets the editor configuration.

##### field(e.dataField): String
The name of the field that provides data for the column to which the editor belongs.

##### field(e.row): dxDataGridRowObject
The properties of the row to which the editor belongs.

---
Many grid elements are constructed on editors. For example, the [search panel](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/3%20Search%20Panel.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Search_Panel') is constructed on a text box, the [selection column](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Command_Columns/') is built on check boxes in full, etc. Obviously, editors are also used to edit a cell or a row in a grid. When default editors provided by **DataGrid** do not meet your requirements, implement a custom editor. For this purpose, assign a function to the **onEditorPreparing** option. This function accepts an object as the parameter. Assign **true** to the **cancel** field of this object. After that, implement your editor using the other fields of this object.

You can distinguish editors by their parent element. Also, the parent element defines data passed to the **onEditorPreparing** function. To identify the parent element, check the **parentType** field of the function's argument.

When the **parentType** is *'dataRow'* or *'headerRow'*, you can use the options described in the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') reference section.

[note]If you have specified the [editCellTemplate](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/editCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editCellTemplate') option, the **onEditorPreparing** function will not be executed when a row or a cell switches into the editing state.

#####See Also#####
- [Customize Editors](/concepts/05%20Widgets/DataGrid/20%20Editing/40%20Customize%20Editors.md '/Documentation/Guide/Widgets/DataGrid/Editing/#Customize_Editors')