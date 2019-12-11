---
##### shortDescription
Returns a filter expression applied to the grid's data source using the [filter(filterExpr)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filterfilterExpr') method.

##### return: any
A <a href="/Documentation/16_2/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering">filter expression</a>.

---
You can get a total filter summarized from all possible filters:

- the filter applied using the [filter(fitlerExpr)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filterfilterExpr') method;
- the filter applied using a [filter row](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/');
- the filter applied using a column's [header filter](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/headerFilter '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/');
- the filter applied using the [search panel](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/searchPanel '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/').

For this purpose, use the [getCombinedFilter()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getCombinedFilter().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getCombinedFilter') method.