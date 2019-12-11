---
##### shortDescription
Returns a filter expression applied to the grid using all possible scenarios.

##### param(returnDataField): Boolean
Specifies whether or not the filter expressions should contain data fields instead of <a href="/Documentation/16_2/Guide/Data_Layer/Data_Layer/#Getters_And_Setters">getters</a>.

##### return: any
A <a href="/Documentation/16_2/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering">filter expression</a>.

---
The **DataGrid** can be filtered both in code, using the [filter(fitlerExpr)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filterfilterExpr') method, and in the UI, using a [filter row](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/'), a column's [header filter](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/headerFilter '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/') or the [search panel](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/searchPanel '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/'). To get a total filter summarized from all the filters applied, use the **getCombinedFilter(returnDataField)** method.