---
##### shortDescription
Returns the options of a column by an identifier.

##### param(id): number|string
The name, index, data field, or caption of a column.

##### return: object
The options of the specified column.

---
Use this method to obtain an object of the options currently applied to a specific column. This method accepts one of the following.

* **Name**		
The [unique name](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/name.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#name') of the column.

* **Column Index**		
The index of the column in the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') array.

* **Data Field**		
The name of the [data source field](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/dataField.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField') assigned to the column.

* **Caption**		
The text displayed in the column header.

* **Service String**  
One of the following values:
 - *"command:edit"*    
    Gets the [edit column](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/010%20Grid%20Columns/070%20Command%20Columns.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Columns/Command_Columns').

 - *"command:select"*    
    Gets the [select column](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/010%20Grid%20Columns/070%20Command%20Columns.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Columns/Command_Columns').  

 - *"command:adaptive"*  
    Gets the [adaptive column](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/010%20Grid%20Columns/070%20Command%20Columns.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Columns/Command_Columns').  

 - Any string matching the following format: *"optionName:value"*  
    Here, the *optionName* is one of the [column options](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/').


The options of the first column matching the name, column index, data field, caption or service string will be returned by this method.

For the list of options included in the object returned by the **columnOption(id)** method, refer to the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') option description. Additionally, you can get the value of a specific column option using the same method called [with two arguments](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/columnOption(id_optionName).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName').