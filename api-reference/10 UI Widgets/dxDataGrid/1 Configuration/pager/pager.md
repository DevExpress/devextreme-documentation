---
type: object
---
---
##### shortDescription
Specifies the options of a grid [pager](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/050%20Pager.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Pager').

---
A pager is a grid element that allows the user to navigate through grid pages and change their size at runtime. By default, the pager is visible if [paging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/paging '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/') is enabled and you do not use virtual or infinite [scrolling](/concepts/10%20UI%20Widgets/70%20Data%20Grid/015%20Data%20Navigation/30%20Scrolling/020%20Vertical%20Scrolling.md '/Documentation/Guide/UI_Widgets/Data_Grid/Data_Navigation/#Scrolling/Vertical_Scrolling'). To change the pager's visibility explicitly, use its [visible](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/pager/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#visible') option.

The pager consists of a page navigator and a page size selector. The page navigator contains the numbers of pages. Clicking a page number navigates the user to the page. The page size selector contains the page sizes that can be selected. They are specified by the [allowedPageSizes](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/pager/allowedPageSizes.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#allowedPageSizes') option of the **pager** configuration object. The page size selector is hidden by default. To make it visible, assign *true* to the pager's [showPageSizeSelector](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/pager/showPageSizeSelector.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#showPageSizeSelector') option.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridpagingandscrollingpager/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=JHUSz3S0cWw&index=2&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>