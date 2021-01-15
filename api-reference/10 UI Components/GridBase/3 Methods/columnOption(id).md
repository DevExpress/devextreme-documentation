---
id: GridBase.columnOption(id)
---
---
##### shortDescription
Gets all properties of a column with a specific identifier.

##### return: Object
The column's properties.

##### param(id): Number | String
The column's index, data field, caption, type, or unique name.

---
This method gets the properties of the first column found by either of the below:

* **Name**        
The [unique name](/api-reference/_hidden/GridBaseColumn/name.md '/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/'''#name') of the column.

* **Column Index**        
The index of the column in the [columns](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns '/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/'''') array.

* **Data Field**        
The name of the [data source field](/api-reference/_hidden/GridBaseColumn/dataField.md '/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/'''#dataField') assigned to the column.

* **Caption**        
The text displayed in the column header.

* **Service String**    
A string that matches the following format: *"optionName:value"*, where *optionName* is one of the [column properties](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns '/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/''''). For example, the following string corresponds to the command column: `"type:buttons"`.

#####See Also#####
- [columns](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns '/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/'''')
#include common-link-callmethods
