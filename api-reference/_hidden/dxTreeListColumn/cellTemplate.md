---
id: dxTreeListColumn.cellTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for data cells.

##### param(cellElement): dxElement
#include common-ref-elementparam with { element: "current cell" }

##### param(cellInfo): Object
The cell's properties.

##### field(cellInfo.column): dxTreeListColumn
The column's properties.

##### field(cellInfo.columnIndex): Number
The index of the cell's column.

##### field(cellInfo.component): dxTreeList
The widget's instance.

##### field(cellInfo.data): Object
The data of the row to which the cell belongs.

##### field(cellInfo.displayValue): any
The cell's display value. Differs from the **value** field only when the column uses [lookup](/api-reference/_hidden/GridBaseColumn/lookup '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/') or [calculateDisplayValue](/api-reference/_hidden/GridBaseColumn/calculateDisplayValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateDisplayValue').

##### field(cellInfo.oldValue): any
The cell's previous raw value.

##### field(cellInfo.row): dxTreeListRowObject
The cell's row.

##### field(cellInfo.rowIndex): Number
The index of the cell's row. Begins with 0 on each page.        
Refer to [Column and Row Indexes](/concepts/05%20Widgets/TreeList/10%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/') for more information.

##### field(cellInfo.rowType): String
The row's [type](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType').

##### field(cellInfo.text): String
**displayValue** after applying [format](/api-reference/_hidden/GridBaseColumn/format.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#format') and [customizeText](/api-reference/_hidden/GridBaseColumn/customizeText.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#customizeText').

##### field(cellInfo.value): any
The cell's raw value.

##### field(cellInfo.watch): function()
Allows tracking a variable and performing actions when it changes. Applies when [repaintChangesOnly](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/repaintChangesOnly.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#repaintChangesOnly') is **true**.       
This function has the following parameters:     

- **getter(data)**: <font size="-1">Function</font>        
A function that returns the variable that should be tracked.

- **handler(newValue)**: <font size="-1">Function</font>        
A function called when this variable changes.

---
[note]If you implement two-way data binding in your template, make sure that you have switched off the built-in implementation of this feature by setting the [twoWayBindingEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/twoWayBindingEnabled.md '{basewidgetpath}/Configuration/#twoWayBindingEnabled') option to **false**.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview/"
}

#####See Also#####
- [Customize Cells Appearance](/concepts/05%20Widgets/TreeList/10%20Columns/40%20Customize%20Cells/2%20Customize%20the%20Appearance.md '/Documentation/Guide/Widgets/TreeList/Columns/Customize_Cells/#Customize_the_Appearance')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')
- [onCellPrepared](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onCellPrepared.md '{basewidgetpath}/Configuration/#onCellPrepared')
