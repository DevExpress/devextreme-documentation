The DataGrid provides the following command columns:

- **Adaptive column**       
Contains ellipsis buttons that expand/collapse [adaptive detail rows](/concepts/05%20UI%20Components/DataGrid/15%20Columns/50%20Adaptability '/Documentation/Guide/UI_Components/DataGrid/Columns/Adaptability/'). Appears if [columnHidingEnabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnHidingEnabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnHidingEnabled') is **true** or [hidingPriority](/api-reference/_hidden/GridBaseColumn/hidingPriority.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#hidingPriority') is set for at least one column and only when certain columns do not fit into the screen or container size.

- **Selection column**    
Contains checkboxes that select rows. Appears when **selection**.[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/selection/mode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/#mode') is *"multiple"* and [showCheckBoxesMode](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/selection/showCheckBoxesMode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/#showCheckBoxesMode') is not *"none"*.

- **Group expand column**     
Contains arrow buttons that expand/collapse [groups](/concepts/05%20UI%20Components/DataGrid/45%20Grouping '/Documentation/Guide/UI_Components/DataGrid/Grouping/').

- **Detail expand column**     
Contains arrow buttons that expand/collapse [detail sections](/concepts/05%20UI%20Components/DataGrid/60%20Master-Detail%20Interface '/Documentation/Guide/UI_Components/DataGrid/Master-Detail_Interface/').

- **Button column (custom command column)**    
Contains buttons that execute custom actions. See [Create a Column with Custom Buttons](/concepts/05%20UI%20Components/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns/30%20Create%20a%20Column%20with%20Custom%20Buttons.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Types/Command_Columns/#Create_a_Column_with_Custom_Buttons').

- **Edit column**        
A Button column pre-populated with edit commands. See [Customize the Edit Column](/concepts/05%20UI%20Components/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns/15%20Customize%20the%20Edit%20Column/0%20Customize%20the%20Edit%20Column.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Types/Command_Columns/#Customize_the_Edit_Column').

- **Drag Column**       
Contains drag icons. Appears when a column's [type](/api-reference/_hidden/dxDataGridColumn/type.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#type') is *"drag"*, and the [allowReordering](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/rowDragging/allowReordering.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#allowReordering') and [showDragIcons](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/rowDragging/showDragIcons.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#showDragIcons') properties of the [rowDragging](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/rowDragging '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/') object are **true**.

![DevExtreme HTML5 JavaScript DataGrid CommandColumns EditingColumn AdaptiveColumn](/images/DataGrid/Command_Columns.png)
