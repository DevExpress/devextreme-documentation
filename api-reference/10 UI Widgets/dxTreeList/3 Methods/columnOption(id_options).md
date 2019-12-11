This method changes options of the first column found by either of the below:

* **Name**        
The [unique name](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/name.md '{basewidgetpath}/Configuration/columns/#name') of the column.

* **Column Index**        
The index of the column in the [columns](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/') array.

* **Data Field**        
The name of the [data source field](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns/dataField.md '{basewidgetpath}/Configuration/columns/#dataField') assigned to the column.

* **Caption**        
The text displayed in the column header.

* **Service String**  
One of the following values:
 - *"command:edit"*    
    Gets the editing column.

 - *"command:adaptive"*  
    Gets the adaptive column.
 
 - Any string matching the following format: *"optionName:value"*  
    Here, *optionName* is one of the [column options](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/').

    [note]In command columns, you can change only the [width](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/width.md '{basewidgetpath}/Configuration/columns/#width') and the [visibleIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/visibleIndex.md '{basewidgetpath}/Configuration/columns/#visibleIndex').  

#####See Also#####
#include common-link-callmethods
- [columns](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/')