---
EventForAction: ..\4 Events\editorPrepared.md
default: null
type: function(options)
---
---
##### shortDescription
A handler for the [editorPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/editorPrepared.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#editorPrepared') event.

##### param(options): object
Information about the event.

##### field(options.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(options.element): jQuery
The widget's container.

##### field(options.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(options.parentType): string
Identifies the type of the editor's parent element. Equals <i>'dataRow'</i>, <i>'filterRow'</i>, <i>'headerRow'</i> or <i>'searchPanel'</i>. Depending on the value of this field, different options are passed to the <b>onEditorPrepared</b> handling function.

##### field(options.value): any
The current value of the editor.

##### field(options.setValue(newValue)): any
A method that should be called to change the cell value when the editor value is changed.

##### field(options.updateValueTimeout): number
Specifies the delay between the moment a user stops entering a filter value in the <a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Filter_Row">filter row</a> or <a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Search_Panel">search panel</a> and the moment this value is applied.

##### field(options.width): number
The width of the editor; equals <i>null</i> for editors of all parent types except for the <i>'searchPanel'</i>.

##### field(options.disabled): boolean
Identifies whether or not the editor is disabled.

##### field(options.rtlEnabled): boolean
Identifies whether or not the editor uses a right-to-left representation.

##### field(options.editorElement): jQuery
Provides access to <a href="http://api.jquery.com/?s=element">element-related jQuery operations</a>.

##### field(options.readOnly): boolean
Identifies whether or not the editor responds to user actions.

##### field(options.dataField): string
The name of the field providing data for the <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/">column</a> that the editor belongs to.

##### field(options.row): dxDataGridRowObject
The properties of the row that the editor belongs to.

---
Many grid elements are constructed on editors. For example, the [search panel](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/080%20Search%20Panel.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Search_Panel') is constructed on a text box, the [selection column](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/110%20Selection%20Column.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Selection_Column') is built on check boxes in full, etc. Obviously, editors are also used to edit a cell or a row in a grid. When default editors provided by **DataGrid** do not meet your requirements, you can customize them by changing their settings within the **onEditorPrepared** function. This function will be called after an editor is created.

When implementing this function, use the object passed to it as its argument. Among the fields of this object, you can find the options of the created editor. These options differ depending on the parent element of the editor. To identify the parent element, check the **parentType** field of the function's argument.

When the **parentType** is *'dataRow'* or *'headerRow'*, you can use the options described in the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') reference section.

[note]If you have specified the [editCellTemplate](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/editCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editCellTemplate') option, the **onEditorPrepared** function will *not* be executed when a row or a cell switches into the editing state.