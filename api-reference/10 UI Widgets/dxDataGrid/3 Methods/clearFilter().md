---
##### shortDescription
Clears all the filters of a specific type applied to grid records.

##### param(filterName): string
Type of filter to be cleared. Can be 'dataSource', 'search', 'header' or 'row'.

---
In **DataGrid**, grid records can be filtered in several different ways. This method's parameter specifies what type of filter should be cleared. The parameter values can be the following:

* 'dataSource' - to clear the [dataSource filter](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') (defined in the configuration or applied by the [filter(filterExpr)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filterfilterExpr') method);
* 'search' - to clear the [search panel](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/searchPanel '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/');
* 'header' - to clear the [column header filter](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/headerFilter '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/');
* 'row' - to clear the [filter row](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/').

To clear all available filters, call this method without parameters.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridfilteringandsortingfilteringapi/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>