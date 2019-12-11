---
type: object
---
---
##### shortDescription
Specifies paging options.

---
In **DataGrid**, records can be loaded either page by page or all at once. Needless to say that the latter approach affects grid performance, especially when the number of loading records is very large. If you, however, want to use it, disable paging by setting the **paging** | **enabled** option to *false*.

When paging is on, you can specify the size of grid pages using the [pageSize](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/paging/pageSize.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageSize') option. Additionally, if you require displaying grid records starting with a certain page, assign its index to the [pageIndex](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/paging/pageIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageIndex') option.

A paginated grid can be navigated by a user at runtime. For this purpose, he or she can use a [pager](/concepts/10%20UI%20Widgets/70%20Data%20Grid/015%20Data%20Navigation/20%20Pager%20Navigation.md '/Documentation/Guide/UI_Widgets/Data_Grid/Data_Navigation/#Pager_Navigation') or [scrolling](/concepts/10%20UI%20Widgets/70%20Data%20Grid/015%20Data%20Navigation/30%20Scrolling/010%20Scrolling.md '/Documentation/Guide/UI_Widgets/Data_Grid/Data_Navigation/#Scrolling').

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridpagingandscrollingpager/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>