---
id: GridBase.columnOption(id)
---
---
##### shortDescription
Gets all options of a column with a specific identifier.

##### return: Object
The column's options.

##### param(id): Number | String
The column's index, data field, caption, type, or unique name.

---
This method gets the options of the first column found by either of the below:

* **Name**        
The [unique name](/api-reference/_hidden/GridBaseColumn/name.md '{basewidgetpath}/Configuration/columns/#name') of the column.

* **Column Index**        
The index of the column in the [columns](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/') array.

* **Data Field**        
The name of the [data source field](/api-reference/_hidden/GridBaseColumn/dataField.md '{basewidgetpath}/Configuration/columns/#dataField') assigned to the column.

* **Caption**        
The text displayed in the column header.

* **Type ([command columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns/00%20Command%20Columns.md '/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Types/Command_Columns/') only)**       
The [type](/api-reference/_hidden/dxDataGridColumn/type.md '{basewidgetpath}/Configuration/columns/#type') of the command column.

* **Service String**    
Any string matching the following format: *"optionName:value"*, where *optionName* is one of the [column options](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/').

#####See Also#####
- [columns](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/')
#include common-link-callmethods