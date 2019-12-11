---
default: 'auto'
acceptValues: 'auto'
type: Array<Number> | String
---
---
##### shortDescription
Specifies the page sizes that can be selected at runtime.

---
When a grid displays data page by page, you can specify the default size of pages using the [pageSize](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/paging/pageSize.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageSize') option. Additionally, you can enable a user to change the page size at runtime. To do this, make the page size selector visible by setting the **pager**.**showPageSizeSelector** option to **true**. After that, specify the sizes that can be selected in it by assigning an array of these sizes to the **pager**.**allowedPageSizes** option. If you do not specify this option, the allowed page sizes will be determined automatically depending on how large the grid data source is.

#####See Also#####
- [Paging - User Interaction](/concepts/05%20Widgets/DataGrid/35%20Paging/10%20User%20Interaction.md '/Documentation/Guide/Widgets/DataGrid/Paging/#User_Interaction')