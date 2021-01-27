The following indexes can be used in methods and callback functions: 

- **Initial Column Index** (or simply **Column Index**)        
    Equals the column's index in the [columns](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/') array. 

- **Visible Column Index**      
    Depends on the column's current location in the **TreeList** and changes dynamically when columns are [reordered](/concepts/05%20Widgets/TreeList/10%20Columns/25%20Column%20Reordering '/Documentation/Guide/UI_Components/TreeList/Columns/Column_Reordering/'). You can get this index using the [getVisibleColumnIndex(id)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/getVisibleColumnIndex(id).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#getVisibleColumnIndexid') method.

    ![DevExtreme HTML5 JavaScript TreeList Visible Column Index](/images/TreeList/visual_elements/columnIndexes.png)

    This index is not equal to the index set in the **column**.[visibleIndex](/api-reference/_hidden/GridBaseColumn/visibleIndex.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#visibleIndex') property. The latter is used to reorder columns.

- **Row Index**         
    Equals a row's order among rendered rows. This index starts from 0 and increases by 1 per row including group and detail rows.

    ![DevExtreme HTML5 JavaScript TreeList Row Index](/images/TreeList/visual_elements/rowIndexes.png)

    [note] Rendered rows can be outside the viewport, for example, if [scrolling](/concepts/05%20Widgets/TreeList/45%20Scrolling '/Documentation/Guide/UI_Components/TreeList/Scrolling/') or [row rendering mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/scrolling/rowRenderingMode.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/scrolling/#rowRenderingMode') is virtual. To get the row index, use the [getRowIndexByKey](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/getRowIndexByKey(key).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#getRowIndexByKeykey') method or **rowIndex** field in callback functions like [onRowClick](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onRowClick.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onRowClick'), [onCellClick](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onCellClick.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onCellClick'), etc.
