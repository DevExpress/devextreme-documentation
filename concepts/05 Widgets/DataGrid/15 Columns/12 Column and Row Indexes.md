The following indexes can be used in methods and callback functions: 

- **Initial Column Index** (or simply **Column Index**)        
    Equals the column's index in the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') array. 

- **Visible Column Index**      
    Depends on the column's current location in the **DataGrid** and changes dynamically when columns are [reordered](/concepts/05%20Widgets/DataGrid/15%20Columns/25%20Column%20Reordering '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Reordering/') or data is [grouped](/concepts/05%20Widgets/DataGrid/45%20Grouping '/Documentation/Guide/Widgets/DataGrid/Grouping/').

    ![DevExtreme HTML5 JavaScript DataGrid Visible Column Index](/images/DataGrid/GridColumnIndexes.png)

- **Row Index**         
    Starts from 0 and increases by 1 per row including group rows. With [paging](/concepts/05%20Widgets/DataGrid/35%20Paging '/Documentation/Guide/Widgets/DataGrid/Paging/'), the index resets on each page.

    ![DevExtreme HTML5 JavaScript DataGrid Row Index](/images/DataGrid/GridRows_RowIndexes.png)