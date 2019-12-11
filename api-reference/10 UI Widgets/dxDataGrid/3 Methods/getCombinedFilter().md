---
##### shortDescription
Returns a filter expression applied to the grid using all possible scenarious.

##### return: any
A <a href="/Documentation/16_1/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering">filter expression</a>.

---
**DataGrid** can be filtered both in code, using the [filter(fitlerExpr)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filterfilterExpr') method, and in a UI, using a [filter row](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/'), a column's [header filter](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/headerFilter '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/') or the [search panel](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/searchPanel '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/'). To get a total filter summarized from all the filters applied, use the **getCombinedFilter()** method.