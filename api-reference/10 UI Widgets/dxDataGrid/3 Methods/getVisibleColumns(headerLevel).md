---
##### shortDescription
Gets an array of visible columns at a specific hierarchical level of column headers.

##### param(headerLevel): Number
The level of column headers.

##### return: Array
An array of visible columns.

---
Use this method when the grid has [band columns](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/010%20Grid%20Columns/065%20Band%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Band_Columns'). 

This method returns an array of objects that contain configuration options of visible columns. The array may include columns with data, [command columns](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/010%20Grid%20Columns/070%20Command%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Command_Columns') and [band columns](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/010%20Grid%20Columns/065%20Band%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Band_Columns').