---
type: function(cellInfo)
---
---
##### shortDescription
Specifies a callback function that returns the text to be displayed in the cells of a column.

##### param(cellInfo): Object
The value of a cell.

##### field(cellInfo.value): String|Number|Date
A cell value as it is specified in the data source.

##### field(cellInfo.valueText): String
A cell value with applied format.

##### field(cellInfo.target): String
Indicates the type of the UI element where the <b>customizeText</b> function was called.<br/>Possible values: <i>"filterRow"</i>, <i>"headerFilter"</i> and <i>"search"</i>.

##### field(cellInfo.groupInterval): String|Number
Indicates how header filter values were combined into groups. Available if <b>target</b> is <i>"headerFilter"</i>.<br />For possible values, see the description of the <b>headerFilter</b> | <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/headerFilter/#groupInterval">groupInterval</a> option.

##### return: String
The text to be displayed in a cell.

---
When implementing a callback function for this option, you can access the value of a cell using the object passed as the function's parameter. Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as the parameter.

[note]The customizeText callback is also called when data displayed in the column matches the search condition to properly highlight the matching text.