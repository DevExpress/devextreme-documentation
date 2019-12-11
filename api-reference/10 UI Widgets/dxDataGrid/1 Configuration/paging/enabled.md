---
default: true
type: Boolean
---
---
##### shortDescription
Specifies whether **DataGrid** loads data page by page or all at once.

---
When this option is set to **true**, data from the source is loaded page by page improving the performance of the **DataGrid** widget. The size of the pages is defined by the [pageSize](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/paging/pageSize.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageSize') option. To navigate through pages, use [scrolling](/concepts/05%20Widgets/DataGrid/40%20Scrolling '/Documentation/Guide/Widgets/DataGrid/Scrolling/') or the [pager navigation](/concepts/05%20Widgets/DataGrid/35%20Paging/10%20User%20Interaction.md '/Documentation/Guide/Widgets/DataGrid/Paging/#User_Interaction').

If you prefer loading all data from your source at once, disable paging by setting the **paging**.**enabled** option to **false**.