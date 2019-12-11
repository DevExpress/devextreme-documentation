---
default: true
type: Boolean
---
---
##### shortDescription
Specifies whether **DataGrid** loads data page by page or all at once.

---
When this option is set to *true*, data from the source is loaded page by page improving the performance of the **DataGrid** widget. The size of the pages is defined by the [pageSize](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/paging/pageSize.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageSize') option. To navigate through pages, use [scrolling](/concepts/05%20Widgets/DataGrid/015%20Data%20Navigation/30%20Scrolling/010%20Scrolling.md '/Documentation/Guide/Widgets/DataGrid/Data_Navigation/#Scrolling') or the [pager navigation](/concepts/05%20Widgets/DataGrid/015%20Data%20Navigation/20%20Pager%20Navigation.md '/Documentation/Guide/Widgets/DataGrid/Data_Navigation/#Pager_Navigation').

If you prefer loading all data from your source at once, disable paging by setting the **paging** | **enabled** option to *false*.