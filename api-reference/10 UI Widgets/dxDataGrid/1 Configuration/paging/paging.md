---
type: Object
---
---
##### shortDescription
Specifies paging options.

---
In **DataGrid**, records can be loaded either page by page or all at once. Needless to say that the latter approach affects grid performance, especially when the number of loading records is very large. If you, however, want to use it, disable paging by setting the **paging**.**enabled** option to **false**.

When paging is on, you can specify the size of grid pages using the [pageSize](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/paging/pageSize.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageSize') option. Additionally, if you require displaying grid records starting with a certain page, assign its index to the [pageIndex](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/paging/pageIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageIndex') option.

A paginated grid can be navigated by a user at runtime. For this purpose, he or she can use a [pager](/concepts/05%20Widgets/DataGrid/35%20Paging/10%20User%20Interaction.md '/Documentation/Guide/Widgets/DataGrid/Paging/#User_Interaction') or [scrolling](/concepts/05%20Widgets/DataGrid/40%20Scrolling '/Documentation/Guide/Widgets/DataGrid/Scrolling/').

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridpagingandscrollingpager/"
}

#####See Also#####
- [Paging](/concepts/05%20Widgets/DataGrid/35%20Paging '/Documentation/Guide/Widgets/DataGrid/Paging/')