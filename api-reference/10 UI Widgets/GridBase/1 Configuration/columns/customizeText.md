---
type: function(cellInfo)
---
---
##### shortDescription
Customizes the text displayed in column cells.

##### param(cellInfo): Object
Information on the current cell.

##### field(cellInfo.value): String|Number|Date
The cell's raw value.

##### field(cellInfo.valueText): String
The [fomatted](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/format.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format') value converted to a string.

##### field(cellInfo.target): String
The UI element where the **customizeText** function was called: *"filterRow"*, *"headerFilter"* and *"search"*.

##### field(cellInfo.groupInterval): String|Number
Indicates how header filter values were combined into groups. Available if **target** is *"headerFilter"*.  
For possible values, see the description of the **headerFilter**.[groupInterval](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/headerFilter/groupInterval.md '{basewidgetpath}/Configuration/columns/headerFilter/#groupInterval') option.

##### return: String
The text for the cell to display.

---
The **customizeText** function may be called when data displayed in the column matches the search condition to properly highlight the matching text.

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}

#####See Also#####
- [Customize the Value and Text](/concepts/05%20Widgets/DataGrid/15%20Columns/40%20Customize%20Cells/1%20Customize%20the%20Value%20and%20Text.md '/Documentation/Guide/Widgets/{WidgetName}/Columns/Customize_Cells/#Customize_the_Value_and_Text')
- **columns[]**.[calculateCellValue](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/calculateCellValue.md '{basewidgetpath}/Configuration/columns/#calculateCellValue')