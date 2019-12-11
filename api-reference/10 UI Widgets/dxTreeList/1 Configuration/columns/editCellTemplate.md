The **cellInfo** object has the following fields:

- **setValue(newValue, newText)**: <font size="-1">Method</font>        
A method that you should call to change the cell value and, optionally, the displayed value after the editor's value is changed. 

    [note] In batch [editing mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#mode'), check that the value changed before calling this method. This ensures the cells are highlighted correctly.

- **data**: <font size="-1">Object</font>        
The data of the row the cell belongs to.
- **component**: <font size="-1">Object</font>  
The widget's instance.
- **value**: <font size="-1">Any</font>        
The cell value as it is specified in the data source.
- **displayValue**: <font size="-1">Any</font>        
The displayed cell value. Differs from the **value** field only when the column uses [lookup](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/lookup '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/') or [calculateDisplayValue](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/calculateDisplayValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateDisplayValue').
- **text**: <font size="-1">String</font>        
**displayValue** after applying [format](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/format.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#format') and [customizeText](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/customizeText.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#customizeText').
- **columnIndex**: <font size="-1">Number</font>        
The index of the column the cell belongs to.
- **rowIndex**: <font size="-1">Number</font>        
The index of the row the cell belongs to. Begins with 0 on each page.
- **column**: <font size="-1">Object</font>        
The settings of the column the cell belongs to.

[note]If you implement two-way data binding in your template, make sure that you have switched off this feature's built-in implementation by setting the [twoWayBindingEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/twoWayBindingEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#twoWayBindingEnabled') option to **false**.

#####See Also#####
- [Customize Editors](/concepts/05%20Widgets/TreeList/20%20Editing/40%20Customize%20Editors.md '/Documentation/Guide/Widgets/TreeList/Editing/#Customize_Editors')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')