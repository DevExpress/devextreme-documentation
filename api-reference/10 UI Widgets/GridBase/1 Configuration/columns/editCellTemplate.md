---
type: template
---
---
##### shortDescription
Specifies a custom template for column cells in the editing state.

##### param(cellElement): dxElement
The current cell's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### param(cellInfo): Object
The cell's properties.

---
The **cellInfo** object has the following fields:

- **setValue(newValue, newText)**: <font size="-1">Method</font>        
A method that you should call to change the cell value and, optionally, the displayed value after the editor's value is changed.

 [note] In batch [editing mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'), check that the value changed before calling this method to ensure correct cell highlighting.
 
- **data**: <font size="-1">Object</font>        
The data of the row the cell belongs to.
- **component**: <font size="-1">Object</font>  
The widget's instance.
- **value**: <font size="-1">Any</font>        
The cell value as it is specified in the data source.
- **displayValue**: <font size="-1">Any</font>        
The displayed cell value. Differs from the **value** field only when the column uses [lookup](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/lookup '{basewidgetpath}/Configuration/columns/lookup/') or [calculateDisplayValue](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/calculateDisplayValue.md '{basewidgetpath}/Configuration/columns/#calculateDisplayValue').
- **text**: <font size="-1">String</font>        
**displayValue** after applying [format](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/format.md '{basewidgetpath}/Configuration/columns/#format') and [customizeText](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/customizeText.md '{basewidgetpath}/Configuration/columns/#customizeText').
- **columnIndex**: <font size="-1">Number</font>        
The index of the column the cell belongs to. Refer to the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic for more information on how this index is calculated.
- **rowIndex**: <font size="-1">Number</font>        
The index of the row the cell belongs to. Begins with 0 on each page. Group rows are included. Refer to the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic for more information on row indexes.
- **column**: <font size="-1">Object</font>        
The settings of the column the cell belong to.
- **rowType**: <font size="-1">String</font>        
The row's [type](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row/rowType.md '{basewidgetpath}/Row/#rowType').

[note]If you implement two-way data binding in your template, make sure that you switch off the built-in implementation of this feature by setting the [twoWayBindingEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/twoWayBindingEnabled.md '{basewidgetpath}/Configuration/#twoWayBindingEnabled') option to **false**.

#####See Also#####
- [Customize Editors](/concepts/05%20Widgets/DataGrid/20%20Editing/40%20Customize%20Editors.md '/Documentation/Guide/Widgets/DataGrid/Editing/#Customize_Editors')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')