---
##### shortDescription
Returns the number of records currently held by a grid.

##### return: Number
The number of records currently held by a grid.

---
Use this method to get the number of records currently held by a grid. Note that if records are filtered by a user using the [filter row](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/070%20Filter%20Row.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Filter_Row') and [search panel](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/080%20Search%20Panel.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Search_Panel') or from code using the [filter(filterExpr)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filterfilterExpr') and [searchByText(text)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/searchByText(text).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#searchByTexttext') methods, the **totalCount()** method returns the number of records left after filtering.