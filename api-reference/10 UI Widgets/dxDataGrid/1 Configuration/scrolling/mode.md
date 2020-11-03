---
id: dxDataGridScrolling.mode
acceptValues: 'infinite' | 'standard' | 'virtual'
type: String
default: 'standard'
---
---
##### shortDescription
Specifies the scrolling mode.

---
The following scrolling modes are available:

- **Standard**      
A user scrolls a single page only. Scrolling is available only if [all the page's rows](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/paging/pageSize.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageSize') do not fit into the widget's height. In this mode, the [pager](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/pager '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/') performs the main navigation and scrolling is auxiliary. If [paging](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/paging '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/') is disabled, the widget loads all rows simultaneously which can reduce the widget's performance. In this case, we recommend that you use another scrolling mode.

- **Infinite**      
Each next page is loaded once the scrollbar reaches the end of its scale. In this mode, users scroll data gradually from the first to the last page.

    [note]Set the **grouping**.[allowCollapsing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/allowCollapsing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#allowCollapsing') option to **false** when using infinite scrolling in conjunction with grouping.
    
- **Virtual**       
Rows are loaded when they get into the viewport and removed once they leave it. If the rows take time to be loaded and rendered, they display gray boxes. [Rendering optimization](/concepts/05%20Widgets/DataGrid/10%20Enhance%20Performance%20on%20Large%20Datasets/030%20Rendering%20Optimization.md '/Documentation/Guide/Widgets/DataGrid/Enhance_Performance_on_Large_Datasets/#Rendering_Optimization') can reduce rendering time and remove gray boxes. In this mode, users can move to any page instantly.

Regardless of the scrolling mode, you can use the **paging**.[pageSize](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/paging/pageSize.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageSize') option to specify the number of rows on a page.

#include common-ref-enum with {
    enum: "`GridScrollingMode`",
    values: "`Standard`, `Virtual`, and `Infinite`"
}

<a href="/Demos/WidgetsGallery/Demo/Data_Grid/InfiniteScrolling/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">Infinite Scrolling Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Data_Grid/VirtualScrolling/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">Virtual Scrolling Demo</a>

#####See Also#####
- [Scrolling](/concepts/05%20Widgets/DataGrid/40%20Scrolling '/Documentation/Guide/Widgets/DataGrid/Scrolling/')
