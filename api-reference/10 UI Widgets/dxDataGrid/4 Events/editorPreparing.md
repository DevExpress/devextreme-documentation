---
type: eventType
---
---
##### shortDescription
Fires before an editor is created.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.parentType): string
Identifies the type of the editor's parent element. Equals <i>'dataRow'</i>, <i>'filterRow'</i>, <i>'headerRow'</i> or <i>'searchPanel'</i>. Depending on the value of this field, different options are passed to the <b>editorPreparing</b> handler.

##### field(e.value): any
The current value of the editor.

##### field(e.setValue(newValue)): any
A method that should be called to change the cell value when the editor value is changed.

##### field(e.updateValueTimeout): number
Specifies the delay between the moment a user stops entering a filter value in the <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Filter_Row">filter row</a> or <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Search_Panel">search panel</a> and the moment this value applies.

##### field(e.width): number
The width of the editor; equals <i>null</i> for editors of all parent types except for the <i>'searchPanel'</i>.

##### field(e.disabled): boolean
Identifies whether or not the editor is disabled.

##### field(e.rtlEnabled): boolean
Identifies whether or not the editor uses a right-to-left representation.

##### field(e.cancel): boolean
A flag allowing you to cancel the creation of the editor. Set it to <i>true</i> and implement a custom editor if your scenario requires it.

##### field(e.editorElement): jQuery
Provides access to <a href="http://api.jquery.com/?s=element">element-related jQuery operations</a>.

##### field(e.readOnly): boolean
Identifies whether or not the editor responds to user actions.

##### field(e.editorName): string
The name of the editor widget.

##### field(e.editorOptions): object
An object with configuration options for the editor widget.

##### field(e.dataField): string
The name of the field providing data for the <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/">column</a> that the editor belongs to.

##### field(e.row): dxDataGridRowObject
The properties of the row that the editor belongs to.

---
Instead, you can use the [onEditorPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onEditorPreparing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onEditorPreparing') option to handle the event.

Many grid elements are constructed on editors. For example, the [search panel](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/080%20Search%20Panel.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Search_Panel') is constructed on a text box, the [selection column](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/110%20Selection%20Column.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Selection_Column') is built on check boxes in full, etc. Obviously, editors are also used to edit a cell or a row in a grid. When default editors provided by **DataGrid** do not meet your requirements, implement a custom editor. For this purpose, attach a handling function to the **editorPreparing** event. This function accepts an object as the parameter. Assign *true* to the **cancel** field of this object. After that, implement your editor using the other fields of this object.

You can distinguish editors by their parent element. Also, the parent element defines data passed to the **editorPreparing** handler. To identify the parent element, check the **parentType** field of the handler's argument.

When the **parentType** is *'dataRow'* or *'headerRow'*, you can use the options described in the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') reference section.

[note]If you have specified the [editCellTemplate](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/editCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editCellTemplate') option, the **editorPrepared** event will not fire when a row or a cell switches into the editing state.

#####See Also#####
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')