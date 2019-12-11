---
type: string | function(rowData)
---
---
##### shortDescription
Specifies a field name or a function that returns a field name or a value to be used for sorting column cells.

##### param(rowData): object
The data object presented by the current grid row.

##### return: any
The calculated value to be used for sorting.

---
By default, sorting is conducted using the exact values that the column contains. However, in some cases, this approach may produce poor results. In such cases, it may be preferable to use calculated values for column cells to be used in sorting. For this purpose, assign a function to the **calculateSortValue** option. This function must return the calculated value for sorting. Alternatively, assign the name of the field whose values will be used to sort current column values.

For more information, refer to the [Sorting in Code](/concepts/10%20UI%20Widgets/70%20Data%20Grid/020%20Sorting/030%20Sorting%20in%20Code.md '/Documentation/Guide/UI_Widgets/Data_Grid/Sorting/#Sorting_in_Code') topic.