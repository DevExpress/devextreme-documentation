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
The following scrolling modes are available:

- **Standard**      
A user scrolls a single page only. Scrolling is available only if [all the page's rows](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/paging/pageSize.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/paging/#pageSize') do not fit into the UI component's height. In this mode, the [pager](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/pager '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/pager/') performs the main navigation and scrolling is auxiliary. If [paging](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/paging '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/paging/') is disabled, the UI component loads all rows simultaneously which can reduce the UI component's performance. In this case, we recommend that you use another scrolling mode.

- **Virtual**       
Rows are loaded when they get into the viewport and removed once they leave it. In this mode, users can move to any page instantly.

    If the rows take time to be loaded and rendered, they display gray boxes. [Rendering optimization](/concepts/05%20UI%20Components/DataGrid/10%20Enhance%20Performance%20on%20Large%20Datasets/030%20Rendering%20Optimization.md '/Documentation/Guide/UI_Components/DataGrid/Enhance_Performance_on_Large_Datasets/#Rendering_Optimization') can reduce rendering time and remove the gray boxes. Alternatively, you can disable the **scrolling**.[renderAsync]({basewidgetpath}/Configuration/scrolling/#renderAsync) property, but this can impact performance.

- **Infinite**      
Each next page is loaded once the scrollbar reaches the end of its scale. In this mode, users scroll data gradually from the first to the last page.

    [note]Set the **grouping**.[allowCollapsing](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/grouping/allowCollapsing.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/grouping/#allowCollapsing') property to **false** when using infinite scrolling in conjunction with grouping.

Regardless of the scrolling mode, you can use the **paging**.[pageSize](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/paging/pageSize.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/paging/#pageSize') property to specify the number of rows on a page.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/VirtualScrolling/",
    name: "Virtual Scrolling"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/InfiniteScrolling/",
    name: "Infinite Scrolling"
}

#####See Also#####
- [Scrolling](/concepts/05%20UI%20Components/DataGrid/40%20Scrolling '/Documentation/Guide/UI_Components/DataGrid/Scrolling/')
