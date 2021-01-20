We recommend that you apply the following settings to improve performance:

* **Make certain elements render after others**           
To implement this, enable the [renderAsync](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#renderAsync) property. It affects filter row, command columns, and columns with [showEditorAlways](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#showEditorAlways) set to **true**.

* **Make columns with a complex [template](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#cellTemplate) render after others**               
For this, enable the **columns[]**.[renderAsync](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#renderAsync) property.

* **Prevent columns from adjusting their widths to the content**                    
For this, disable the [columnAutoWidth](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnAutoWidth) property if enabled. Additionally, you can set a custom width for all or individual columns in the [columnWidth](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnWidth) and **columns[]**.[width](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#width) properties respectively.

* **Specify widths for all [command columns](/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Types/Command_Columns/)**         
If the **columns[]**.[width](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#width) property is not set, specify it because [columnWidth](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnWidth) does not affect these columns.

* **Substitute checkboxes for `true` or `false` text values**          
For this, disable the **columns[]**.[showEditorAlways](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#showEditorAlways) property if enabled in columns of [dataType](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataType) *"boolean"*.

* **Implement [onCellPrepared](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onCellPrepared) instead of [cellTemplate](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#cellTemplate) for conditional formatting**        
Do this only if you use Angular, React, or Vue.
