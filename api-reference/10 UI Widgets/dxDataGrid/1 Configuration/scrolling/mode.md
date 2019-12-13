---
id: dxDataGrid.Options.scrolling.mode
acceptValues: 'infinite' | 'standard' | 'virtual'
type: String
default: 'standard'
---
---
##### shortDescription
Specifies the scrolling mode.

---
The following scrolling modes are available in the widget:

- **Standard**      
A user scrolls a single page only. Scrolling appears only if [all the page's rows](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/paging/pageSize.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageSize') do not fit into the widget's height. In this mode, the [pager](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/pager '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/') performs the main navigation and scrolling is auxiliary. If [paging](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/paging '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/') is disabled, the widget loads all rows at once, which may decrease the widget's performance. In this case, we recommend choosing another scrolling mode.

- **Virtual**       
This mode is an alternative to paging where pages are loaded when they get into the viewport and removed once they leave it. Use this mode if a user should be able to scroll data by pages.

- **Infinite**      
This mode is an alternative to paging where each next page is loaded once the scrollbar reaches the end of its scale. Use this mode if a user should scroll data gradually, from the first to the last page.

    [note]Set the **grouping**.[allowCollapsing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/allowCollapsing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#allowCollapsing') option to **false** when using infinite scrolling in conjunction with grouping.

#include common-ref-enum with {
    enum: "`GridScrollingMode`",
    values: "`Standard`, `Virtual`, and `Infinite`"
}

<a href="/Demos/WidgetsGallery/Demo/Data_Grid/InfiniteScrolling/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">Infinite Scrolling Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Data_Grid/VirtualScrolling/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">Virtual Scrolling Demo</a>

#####See Also#####
- [Scrolling](/concepts/05%20Widgets/DataGrid/40%20Scrolling '/Documentation/Guide/Widgets/DataGrid/Scrolling/')