---
##### shortDescription
Allows you to obtain a row element by its index.

##### param(rowIndex): Number
The visible index of the row.

##### return: jQuery|undefined
The row element; provides access to <a href="http://api.jquery.com/?s=element">element-related jQuery operations</a>.

---
Note that if the **DataGrid** has [fixed columns](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/010%20Grid%20Columns/060%20Fixing%20Grid%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Fixing_Grid_Columns'), the method returns two row elements: the first with columns that are not fixed, the second with fixed columns.