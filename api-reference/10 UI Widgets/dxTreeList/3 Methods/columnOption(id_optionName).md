This method gets the value of an option of the first column found by either of the below:

* **Name**        
The [unique name](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/name.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#name') of the column.

* **Column Index**        
The index of the column in the [columns](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/') array.

* **Data Field**        
The name of the [data source field](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/dataField.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#dataField') assigned to the column.

* **Caption**        
The text displayed in the column header.

* **Service String**  
One of the following values:
 - *"command:edit"*    
    Gets the editing column.

 - *"command:adaptive"*  
    Gets the adaptive column.  
 
 - Any string matching the following format: *"optionName:value"*  
    Here, *optionName* is one of the [column options](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/').

#####See Also#####
#include common-link-callmethods
- [columns](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/')