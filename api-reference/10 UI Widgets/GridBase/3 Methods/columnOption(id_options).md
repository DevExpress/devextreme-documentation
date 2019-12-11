---
##### shortDescription
Updates the values of several column options.

##### param(id): Number|String
The column's index, data field, caption or unique name.

##### param(options): Object
The options with their new values.

---
This method changes options of the first column found by either of the below:

* **Name**        
The [unique name](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/name.md '{basewidgetpath}/Configuration/columns/#name') of the column.

* **Column Index**        
The index of the column in the [columns](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/') array.

* **Data Field**        
The name of the [data source field](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/dataField.md '{basewidgetpath}/Configuration/columns/#dataField') assigned to the column.

* **Caption**        
The text displayed in the column header.

* **Service String**  
One of the following values:
 - *"command:edit"*    
    Gets the editing column.

 - *"command:select"*    
    Gets the selection column.  

 - *"command:adaptive"*  
    Gets the adaptive column.
 
 - *"command:expand"*  
    Gets the expand column.  

 - Any string matching the following format: *"optionName:value"*  
    Here, *optionName* is one of the [column options](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/').

    [note]In command columns, you can change only the [width](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/width.md '{basewidgetpath}/Configuration/columns/#width') and the [visibleIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/visibleIndex.md '{basewidgetpath}/Configuration/columns/#visibleIndex'). See the [Command Columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns.md '/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Types/Command_Columns/') topic for details.  

#####See Also#####
- [columns](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/')
#include common-link-callmethods