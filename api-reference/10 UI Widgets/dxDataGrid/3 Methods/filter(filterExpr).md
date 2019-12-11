---
##### shortDescription
Applies a filter to the grid's data source.

##### param(filterExpr): any
A <a href="/Documentation/16_1/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering">filter expression</a>.

---
This method filters grid records in code. Pass an array with the following members to this method.

1. The data source field by which data items are filtered.
2. The comparison operator. The following operators are available: "=", "<>", ">", ">=", "<", "<=", "startswith", "endswith", "contains", "notcontains".
3. The value with which data source field values should be compared.

The filters specified by end users using a [filter row](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/'), a column's [header filter](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/headerFilter '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/') or the [search panel](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/searchPanel '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/') are applied to the data source that is already filtered using the **filter(filterExpr)** method. To clear all the filters applied to the grid both in code and by end users, call the [clearFilter()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/clearFilter().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearFilter') method.

#####See Also#####
- [Data Gird - Filtering in Code](/concepts/10%20UI%20Widgets/70%20Data%20Grid/030%20Filtering/060%20Filtering%20in%20Code.md '/Documentation/Guide/UI_Widgets/Data_Grid/Filtering/#Filtering_in_Code')

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridfilteringandsortingfilteringapi/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>