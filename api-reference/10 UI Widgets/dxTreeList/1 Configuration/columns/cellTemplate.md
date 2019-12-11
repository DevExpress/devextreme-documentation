The **cellInfo** object has the following fields:

- **data**: <font size="-1">Object</font>        
Data of the row to which the cell belongs.
- **component**: <font size="-1">Object</font>  
The widget's instance.
- **value**: <font size="-1">Any</font>        
The value of the cell as it is specified in the data source.
- **displayValue**: <font size="-1">Any</font>        
The display value of the cell. Differs from the **value** field only when the column uses [lookup](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/lookup '{basewidgetpath}/Configuration/columns/lookup/') or [calculateDisplayValue](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/calculateDisplayValue.md '{basewidgetpath}/Configuration/columns/#calculateDisplayValue').
- **text**: <font size="-1">String</font>        
**displayValue** after applying [format](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/format.md '{basewidgetpath}/Configuration/columns/#format') and [customizeText](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/customizeText.md '{basewidgetpath}/Configuration/columns/#customizeText').
- **columnIndex**: <font size="-1">Number</font>        
The index of the column to which the cell belongs.
- **rowIndex**: <font size="-1">Number</font>        
The index of the row to which the cell belongs. Begins with 0 on each page.
- **column**: <font size="-1">Object</font>        
The settings of the column to which the cell belongs.

[note]If you implement two-way data binding in your template, make sure that you have switched off the built-in implementation of this feature by setting the [twoWayBindingEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/twoWayBindingEnabled.md '{basewidgetpath}/Configuration/#twoWayBindingEnabled') option to **false**.

#####See Also#####
- [Customize Cells Appearance](/concepts/05%20Widgets/TreeList/10%20Columns/40%20Customize%20Cells/2%20Customize%20the%20Appearance.md '/Documentation/Guide/Widgets/TreeList/Columns/Customize_Cells/#Customize_the_Appearance')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')
- [onCellPrepared](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onCellPrepared.md '{basewidgetpath}/Configuration/#onCellPrepared')