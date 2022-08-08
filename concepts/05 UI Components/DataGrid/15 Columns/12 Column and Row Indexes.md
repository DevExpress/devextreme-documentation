You can use the following indexes in methods and callback functions: 

- **Initial Column Index** (or **Column Index**)        
    Equals the column's index in the [columns](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/') array. 

- **Visible Column Index**      
    Depends on the column's current location in the DataGrid and changes dynamically when columns are [reordered](/concepts/05%20UI%20Components/DataGrid/15%20Columns/25%20Column%20Reordering '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Reordering/') or data is [grouped](/concepts/05%20UI%20Components/DataGrid/45%20Grouping '/Documentation/Guide/UI_Components/DataGrid/Grouping/'). Use the [getVisibleColumnIndex(id)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/getVisibleColumnIndex(id).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#getVisibleColumnIndexid') method to get this index.

    ![DevExtreme HTML5 JavaScript DataGrid Visible Column Index](/images/DataGrid/visual_elements/columnIndexes.png)

    This index is not equal to the index set in the **column**.[visibleIndex](/api-reference/_hidden/GridBaseColumn/visibleIndex.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#visibleIndex') property. The latter is used to reorder columns.

- **Row Index**         
    Equals a row's order among rendered rows. This index starts from 0 and increases by 1 per row (includes group and detail rows).

    ![DevExtreme HTML5 JavaScript DataGrid Row Index](/images/DataGrid/visual_elements/rowIndexes.png)

    To get the row index, use the [getRowIndexByKey](/api-reference/10%20UI%20Components/GridBase/3%20Methods/getRowIndexByKey(key).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#getRowIndexByKeykey') method or **rowIndex** field in callback functions like [onRowClick](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowClick.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowClick'), [onCellClick](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onCellClick.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onCellClick'), etc.

    [note] Rendered rows can be outside the viewport, for example, if [scrolling](/concepts/05%20UI%20Components/DataGrid/40%20Scrolling '/Documentation/Guide/UI_Components/DataGrid/Scrolling/') is virtual or infinite or [row rendering mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/scrolling/rowRenderingMode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/scrolling/#rowRenderingMode') is virtual. You cannot get the row index in such cases.
