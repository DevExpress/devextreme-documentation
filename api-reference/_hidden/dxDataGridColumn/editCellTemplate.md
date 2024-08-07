---
id: dxDataGridColumn.editCellTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for data cells in an editing state.

##### param(cellElement): DxElement
#include common-ref-elementparam with { element: "current cell" }

##### param(cellInfo): Object
Cell properties.

##### field(cellInfo.column): dxDataGridColumn
The settings of the column the cell belongs to.

##### field(cellInfo.columnIndex): Number
The index of the column the cell belongs to.        
Refer to the [Column and Row Indexes](/concepts/05%20UI%20Components/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/UI_Components/{WidgetName}/Columns/Column_and_Row_Indexes/') topic for more information on how this index is calculated.

##### field(cellInfo.component): dxDataGrid
The UI component's instance.

##### field(cellInfo.data): Object
Cell row data.

##### field(cellInfo.displayValue): any
The displayed cell value. Differs from the **value** field only when the column uses [lookup](/api-reference/_hidden/GridBaseColumn/lookup '{basewidgetpath}/Configuration/columns/lookup/') or [calculateDisplayValue](/api-reference/_hidden/GridBaseColumn/calculateDisplayValue.md '{basewidgetpath}/Configuration/columns/#calculateDisplayValue').

##### field(cellInfo.row): dxDataGridRowObject
The cell's row.

##### field(cellInfo.rowIndex): Number
The index of the row the cell belongs to. Begins with 0 on each page. Group rows are included.      
Refer to the [Column and Row Indexes](/concepts/05%20UI%20Components/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/UI_Components/{WidgetName}/Columns/Column_and_Row_Indexes/') topic for more information on row indexes.

##### field(cellInfo.rowType): String
The row's [type](/api-reference/10%20UI%20Components/dxDataGrid/6%20Row/rowType.md '{basewidgetpath}/Row/#rowType').

##### field(cellInfo.setValue(newValue, newText)): any
A method called to change cell values; optionally, you can also call it to change the displayed value after the editor's value is changed.        
See an example in the [Custom Editors](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomEditors) demo.

[note] In batch [editing mode](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'), confirm that the value is changed before calling this method to ensure correct cell highlighting.

##### field(cellInfo.text): String
**displayValue** after applying [format](/api-reference/_hidden/dxDataGridColumn/format.md '{basewidgetpath}/Configuration/columns/#format') and [customizeText](/api-reference/_hidden/GridBaseColumn/customizeText.md '{basewidgetpath}/Configuration/columns/#customizeText').

##### field(cellInfo.value): any
The cell value as it is specified in the data source.

##### field(cellInfo.watch): function()
Allows you to track a variable and perform actions when it changes. Applies when [repaintChangesOnly](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/repaintChangesOnly.md '{basewidgetpath}/Configuration/#repaintChangesOnly') is **true**.       
This function has the following parameters:     

- **getter(data)**: Function        
A function that returns the variable that should be tracked.

- **handler(newValue)**: Function       
A function that is called when the variable changes.

##### return: any
A template name or container.

---
Use **editCellTemplate** to replace the default editor. In the template, specify replacement editor appearance and behavior.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomEditors/"
}

Other properties that allow editor customization include:

- **columns[]**.[editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '{basewidgetpath}/Configuration/columns/#editorOptions')         
Use it to specify default editor properties (except **onValueChanged**).

- [onEditorPreparing](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onEditorPreparing.md '{basewidgetpath}/Configuration/#onEditorPreparing')         
Use it to:
    - Change the editor's type.
    - Override the default editor's **onValueChanged** handler.
    - [Dynamically change editor properties in the editing state](/concepts/05%20UI%20Components/DataGrid/99%20How%20To/Dynamically%20Change%20Editor%20Properties%20in%20the%20Editing%20State.md '/Documentation/Guide/UI_Components/DataGrid/How_To/Dynamically_Change_Editor_Properties_in_the_Editing_State/').
    - Implement other customization cases.

[note]

Please review the following notes:

- If you implement two-way data binding in your template, set [twoWayBindingEnabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/twoWayBindingEnabled.md '{basewidgetpath}/Configuration/#twoWayBindingEnabled') to **false** to disable this feature's default implementation.

- If you specify [validationRules](/api-reference/_hidden/GridBaseColumn/validationRules.md '{basewidgetpath}/Configuration/columns/#validationRules'), the **editCellTemplate** must contain a DevExtreme editor to which the {WidgetName} will apply these rules.

- If [a column is fixed](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnFixing '{basewidgetpath}/Configuration/columnFixing/') or it is hidden with [hidingPriority](/api-reference/_hidden/GridBaseColumn/hidingPriority.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#hidingPriority'), the template is initialized and rendered twice for each cell.

[/note]

#####See Also#####
- **columns[]**.[showEditorAlways](/api-reference/_hidden/GridBaseColumn/showEditorAlways.md '{basewidgetpath}/Configuration/columns/#showEditorAlways')
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')
