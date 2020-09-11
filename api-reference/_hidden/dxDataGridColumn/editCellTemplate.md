---
id: dxDataGridColumn.editCellTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for data cells in editing state.

##### param(cellElement): dxElement
#include common-ref-elementparam with { element: "current cell" }

##### param(cellInfo): Object
The cell's properties.

##### field(cellInfo.column): dxDataGridColumn
The settings of the column the cell belongs to.

##### field(cellInfo.columnIndex): Number
The index of the column the cell belongs to.        
Refer to the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic for more information on how this index is calculated.

##### field(cellInfo.component): dxDataGrid
The widget's instance.

##### field(cellInfo.data): Object
The data of the cell's row.

##### field(cellInfo.displayValue): any
The displayed cell value. Differs from the **value** field only when the column uses [lookup](/api-reference/_hidden/dxDataGridColumn/lookup '{basewidgetpath}/Configuration/columns/lookup/') or [calculateDisplayValue](/api-reference/_hidden/GridBaseColumn/calculateDisplayValue.md '{basewidgetpath}/Configuration/columns/#calculateDisplayValue').

##### field(cellInfo.row): dxDataGridRowObject
The cell's row.

##### field(cellInfo.rowIndex): Number
The index of the row the cell belongs to. Begins with 0 on each page. Group rows are included.      
Refer to the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic for more information on row indexes.

##### field(cellInfo.rowType): String
The row's [type](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row/rowType.md '{basewidgetpath}/Row/#rowType').

##### field(cellInfo.setValue(newValue, newText)): any
A method you should call to change the cell value and, optionally, the displayed value after the editor's value is changed.        
See an example in the [Custom Editors](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomEditors) demo.

[note] In batch [editing mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'), check that the value is actually changed before calling this method to ensure correct cell highlighting.

##### field(cellInfo.text): String
**displayValue** after applying [format](/api-reference/_hidden/dxDataGridColumn/format.md '{basewidgetpath}/Configuration/columns/#format') and [customizeText](/api-reference/_hidden/GridBaseColumn/customizeText.md '{basewidgetpath}/Configuration/columns/#customizeText').

##### field(cellInfo.value): any
The cell value as it is specified in the data source.

##### field(cellInfo.watch): function()
Allows you to track a variable and perform actions when it changes. Applies when [repaintChangesOnly](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/repaintChangesOnly.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#repaintChangesOnly') is **true**.       
This function has the following parameters:     

- **getter(data)**: Function        
A function that returns the variable that should be tracked.

- **handler(newValue)**: Function       
A function that is called when the variable changes.

---
Use the **editCellTemplate** to replace the default editor. In the template, specify the replacement editor's appearance and behavior.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomEditors/"
}

Other options that allow editor customization include:

- **columns[]**.[editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editorOptions')         
Use it to specify the default editor's options (except **onValueChanged**).

- [onEditorPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onEditorPreparing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onEditorPreparing')         
Use it to:
    - Change the editor's type.
    - Override the default editor's **onValueChanged** handler.
    - [Dynamically change the editor's options in the editing state](/concepts/05%20Widgets/DataGrid/99%20How%20To/Dynamically%20Change%20Editor%20Options%20in%20the%20Editing%20State.md '/Documentation/Guide/Widgets/DataGrid/How_To/Dynamically_Change_Editor_Options_in_the_Editing_State/').
    - Implement other customization cases.

[note] If you implement two-way data binding in your template, set [twoWayBindingEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/twoWayBindingEnabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#twoWayBindingEnabled') to **false** to disable this feature's default implementation.

#####See Also#####
- **columns[]**.[showEditorAlways](/api-reference/_hidden/GridBaseColumn/showEditorAlways.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#showEditorAlways')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')
