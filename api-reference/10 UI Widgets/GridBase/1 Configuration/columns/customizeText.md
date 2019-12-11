---
type: function(cellInfo)
---
---
##### shortDescription
Customizes the text displayed in column cells.

##### param(cellInfo): Object
Information on the current cell.

##### field(cellInfo.value): String | Number | Date
The cell's raw value.

##### field(cellInfo.valueText): String
The [fomatted](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/format.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format') value converted to a string.

##### field(cellInfo.target): String
The UI element where the **customizeText** function was called: *"row"*, *"filterRow"*, *"headerFilter"*, *"search"*, *"filterPanel"*, or *"filterBuilder"*.

##### field(cellInfo.groupInterval): String | Number
Indicates how header filter values were combined into groups. Available if **target** is *"headerFilter"*.  
See the **headerFilter**.[groupInterval](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/headerFilter/groupInterval.md '{basewidgetpath}/Configuration/columns/headerFilter/#groupInterval') option's description for possible values.

##### return: String
The text the cell should display.

---
[note] The specified text is not used to sort, filter, and group data or calculate summaries. If it should be, specify the [calculateCellValue](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dx{WidgetName}/Configuration/columns/#calculateCellValue') function instead.

The **customizeText** function can be called to highlight the matching text correctly when the data displayed in the column matches the search condition.

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}

#####See Also#####
- [Customize the Value and Text](/concepts/05%20Widgets/DataGrid/15%20Columns/40%20Customize%20Cells/1%20Customize%20the%20Value%20and%20Text.md '/Documentation/Guide/Widgets/{WidgetName}/Columns/Customize_Cells/#Customize_the_Value_and_Text')
- **columns[]**.[calculateCellValue](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/calculateCellValue.md '{basewidgetpath}/Configuration/columns/#calculateCellValue')