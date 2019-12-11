---
##### shortDescription
Returns a filter expression applied to the grid using all possible scenarios.

##### return: any
A <a href="/Documentation/16_2/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering">filter expression</a>.

---
The **DataGrid** can be filtered both in code, using the [filter(fitlerExpr)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filterfilterExpr') method, and in the UI, using a [filter row](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/'), a column's [header filter](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/headerFilter '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/') or the [search panel](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/searchPanel '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/'). To get a total filter summarized from all the filters applied, use the **getCombinedFilter()** method. 

Note that this method returns filter expressions with the [getters](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters'). If you want to obtain filter expressions with data fields, use the [getCombinedFilter(returnDataField)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getCombinedFilter(returnDataField).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getCombinedFilterreturnDataField') method.