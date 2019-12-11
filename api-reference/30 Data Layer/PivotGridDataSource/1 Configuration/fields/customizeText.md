---
type: function(cellInfo)
---
---
##### shortDescription
Specifies a callback function that returns the text to be displayed in the cells of a field.

##### param(cellInfo): object
The value of a cell.

##### field(cellInfo.value): string|number|date
A cell value as it is specified in the data source.

##### field(cellInfo.valueText): string
A cell value with applied formatting.

##### return: string
The text to be displayed in a cell.

---
When implementing a callback function for this option, you can access the value of a cell using the object passed as the function's parameter. Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as the parameter.