---
type: Object
---
---
##### shortDescription
Specifies the options of a grid [pager](/concepts/05%20Widgets/DataGrid/35%20Paging/10%20User%20Interaction.md '/Documentation/Guide/Widgets/DataGrid/Paging/#User_Interaction').

---
A pager is a grid element that allows the user to navigate through grid pages and change their size at runtime. By default, the pager is visible if [paging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/paging '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/') is enabled and you do not use virtual or infinite [scrolling](/concepts/05%20Widgets/DataGrid/40%20Scrolling '/Documentation/Guide/Widgets/DataGrid/Scrolling/'). To change the pager's visibility explicitly, use its [visible](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/pager/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#visible') option.

The pager consists of a page navigator and a page size selector. The page navigator contains the numbers of pages. Clicking a page number navigates the user to the page. The page size selector contains the page sizes that can be selected. They are specified by the [allowedPageSizes](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/pager/allowedPageSizes.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#allowedPageSizes') option of the **pager** configuration object. The page size selector is hidden by default. To make it visible, assign **true** to the pager's [showPageSizeSelector](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/pager/showPageSizeSelector.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#showPageSizeSelector') option.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridpagingandscrollingpager/"
}
<a href="https://www.youtube.com/watch?v=JHUSz3S0cWw&index=2&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>