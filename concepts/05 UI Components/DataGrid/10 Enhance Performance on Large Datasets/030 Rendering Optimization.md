If you work with a large data set, apply the following recommendations to optimize rendering performance:

* **Render rows and columns of the current viewport only**             
The default behavior is to render all loaded rows and columns at once. To render those of the current viewport only, set the [rowRenderingMode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#rowRenderingMode) and [columnRenderingMode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#columnRenderingMode) properties to *"virtual"*. You should do this for rows if [paging was disabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#enabled) or the **paging**.[pageSize](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageSize) is more than 20 and for columns if more than 20 are outside the current viewport.

* **Render certain elements after others**           
To implement this, enable the [renderAsync](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#renderAsync) property. It affects filter row, command columns, and columns with [showEditorAlways](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#showEditorAlways) set to **true**.

* **Render columns with a complex [template](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#cellTemplate) after others**               
UI component's **renderAsync** property does not affect such columns - enable the **columns[]**.[renderAsync](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#renderAsync) property for them.

* **Prevent columns from adjusting their widths to the content**                    
Keep the [columnAutoWidth](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnAutoWidth) property disabled. You can also set a custom width for all or individual columns in the [columnWidth](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnWidth) and **columns[]**.[width](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#width) properties respectively.

* **Specify widths for all [command columns](/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Types/Command_Columns/)**         
If the **columns[]**.[width](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#width) property is not set yet, specify it because [columnWidth](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnWidth) does not affect command columns.

* **Substitute checkboxes for *true* or *false* text values in columns of [dataType](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataType) *"boolean"***          
Columns with *"boolean"* [dataType](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataType) use checkboxes to display column values. To disable this feature, assign **false** to the columns' [showEditorAlways](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#showEditorAlways) property. The checkboxes will be replaced with the **true** and **false** text values.

* **Implement [onCellPrepared](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onCellPrepared) instead of [cellTemplate](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#cellTemplate) for conditional formatting**        
You should do this in Angular, React, or Vue applications only. jQuery applications are compatible with both properties.
