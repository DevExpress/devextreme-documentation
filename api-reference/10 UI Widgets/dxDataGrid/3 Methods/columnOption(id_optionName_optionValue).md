---
##### shortDescription
Sets an option of a specific column.

##### param(id): Number|String
The name, index, data field, or caption of a column.

##### param(optionName): String
The name of the option to change.

##### param(optionValue): any
A new value for this option.

---
Using this method, you can set an option of a specific column from code. This method accepts one of the following as the first argument.

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

    [note]In command columns, you can change only the [width](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/width.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width') or the [visibleIndex](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/visibleIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visibleIndex').  

The specified option of the first column matching the name, column index, data field or caption will be changed by this method.

For the list of accessible options, refer to the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') option description. Also, you can set several column options at once. Use the [columnOption(id, options)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/columnOption(id_options).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_options') method to do this.