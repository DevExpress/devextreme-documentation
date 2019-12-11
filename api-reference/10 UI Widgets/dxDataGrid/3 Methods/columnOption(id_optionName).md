---
##### shortDescription
Returns the value of a specific column option.

##### param(id): Number|String
The name, index, data field or caption of a column.

##### param(optionName): String
The name of the required option.

##### return: any
The value of the specified option.

---
Use this method to obtain the value of a specific column option. This method accepts one of the following as the first argument.

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
    Gets the [edit column](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/010%20Grid%20Columns/070%20Command%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Command_Columns').

 - *"command:select"*    
    Gets the [select column](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/010%20Grid%20Columns/070%20Command%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Command_Columns').  

 - *"command:adaptive"*  
    Gets the [adaptive column](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/010%20Grid%20Columns/070%20Command%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Command_Columns').  
 
 - Any string matching the following format: *"optionName:value"*  
    Here, the *optionName* is one of the [column options](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/').

The specified option of the first column matching the name, column index, data field, or caption will be returned by this method.

For the list of accessible options, refer to the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') option description. Additionally, you can get all options of a specific column by calling the same method [with an identifier only](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/columnOption(id).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid').