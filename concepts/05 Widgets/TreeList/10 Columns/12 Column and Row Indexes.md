The following indexes can be used in methods and callback functions: 

- **Initial Column Index** (or simply **Column Index**)        
    Equals the column's index in the [columns](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/') array. 

- **Visible Column Index**      
    Depends on the column's current location in the **TreeList** and changes dynamically when columns are [reordered](/concepts/05%20Widgets/TreeList/10%20Columns/25%20Column%20Reordering '/Documentation/Guide/Widgets/TreeList/Columns/Column_Reordering/').

    ![DevExtreme HTML5 JavaScript TreeList Visible Column Index](/images/TreeList/visual_elements/columnIndexes.png)

    Do not confuse the visible column index with the index specified using the **column**.[visibleIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/visibleIndex.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#visibleIndex') option. The latter is used in column reordering.

- **Row Index**         
    Starts from 0 and increases by 1 per row. 

    ![DevExtreme HTML5 JavaScript TreeList Row Index](/images/TreeList/visual_elements/rowIndexes.png)