If you work with a large data set, apply the following recommendations to optimize rendering performance:

* **Render rows and columns of the current viewport only**             
The default behavior is to render all loaded rows and columns at once. To render those of the current viewport only, set the [rowRenderingMode](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/scrolling/#rowRenderingMode) and [columnRenderingMode](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/scrolling/#columnRenderingMode) properties to *"virtual"*. You should do this for rows if [paging was disabled](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/paging/#enabled) or the **paging**.[pageSize](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/paging/#pageSize) is more than 20 and for columns if more than 20 are outside the current viewport.

* **Render certain elements after others**           
To implement this, enable the [renderAsync](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#renderAsync) property. It affects filter row, command columns, and columns with [showEditorAlways](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#showEditorAlways) set to **true**. You should also enable [this property](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#renderAsync) for columns with a complex [template](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#cellTemplate). Ensure that they have a [width](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#width) specified.

* **Prevent columns from adjusting their widths to the content**                    
Keep the [columnAutoWidth](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnAutoWidth) property disabled. You can also set a custom width for all or individual columns in the [columnWidth](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnWidth) and **columns[]**.[width](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#width) properties respectively. If **columnWidth** is set, specify widths for all command columns - this property does not affect them.

* **Do not use checkboxes in Boolean columns**          
Columns with *"boolean"* [dataType](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataType) use checkboxes to display column values. To use the **true** and **false** text values instead, assign **false** to the columns' [showEditorAlways](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#showEditorAlways) property.

* **Implement [onCellPrepared](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onCellPrepared) instead of [cellTemplate](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#cellTemplate) for conditional formatting**        
You should do this in Angular, React, or Vue applications only. jQuery applications are compatible with both properties.
