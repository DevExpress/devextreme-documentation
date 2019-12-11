---
type: function(cellInfo)
---
---
##### shortDescription
Customizes the text displayed in column cells.

##### param(cellInfo): Object
The settings of a cell.

##### field(cellInfo.value): String|Number|Date
The value of the cell as it is specified in the data source.

##### field(cellInfo.valueText): String
The value of the cell with applied format.

##### field(cellInfo.target): String
Indicates the type of the UI element where the **customizeText** function was called.  
Possible values: *"filterRow"*, *"headerFilter"* and *"search"*.

##### field(cellInfo.groupInterval): String|Number
Indicates how header filter values were combined into groups. Available if **target** is *"headerFilter"*.  
For possible values, see the description of the **headerFilter**.[groupInterval](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/headerFilter/groupInterval.md '{basewidgetpath}/Configuration/columns/headerFilter/#groupInterval') option.

##### return: String
The text for the cell.

---
[note]The **customizeText** function may be called when data displayed in the column matches the search condition to properly highlight the matching text.

#####See Also#####
- **columns[]**.[calculateCellValue](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/calculateCellValue.md '{basewidgetpath}/Configuration/columns/#calculateCellValue')