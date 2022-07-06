---
id: dxDataGrid.Options.scrolling.mode
acceptValues: 'infinite' | 'standard' | 'virtual'
type: String
default: 'standard'
firedEvents: contentReady
---
---
##### shortDescription
Specifies the scrolling mode.

---
If you change this option, the DataGrid reloads.

The following scrolling modes are available:

- **Standard**      
A user scrolls a single page only. Scrolling is available only if [all rows of a page](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/paging/pageSize.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/paging/#pageSize') do not fit within the UI component's height. In this mode, the [pager](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/pager '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/pager/') performs the main navigation and scrolling is auxiliary. If you disable the [paging](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/paging '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/paging/') feature, the UI component loads all rows simultaneously. This action can reduce the UI component's performance. In this case, use another scrolling mode.

- **Virtual**       
The component loads pages while they are visible within the viewport and removes them once they leave it. In this mode, users can move to any page instantly. If the component takes time to load and render rows, they display gray boxes. [Rendering optimization](/concepts/05%20UI%20Components/DataGrid/10%20Enhance%20Performance%20on%20Large%20Datasets/030%20Rendering%20Optimization.md '/Documentation/Guide/UI_Components/DataGrid/Enhance_Performance_on_Large_Datasets/#Rendering_Optimization') can reduce render time and remove the gray boxes. Alternatively, you can disable the **scrolling**.[renderAsync](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/scrolling/renderAsync.md '{basewidgetpath}/Configuration/scrolling/#renderAsync') property, but this can impact performance.

- **Infinite**      
The component loads the next page once the scrollbar reaches the end of its scale. In this mode, users scroll data gradually from the first to the last page. Row selection in **infinite** and **virtual** scroll mode with Shift+Click does not work in the following cases:
    - Deferred selection is enabled.
    - Row grouping is enabled.
    - The [allowSelectAll](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/selection/allowSelectAll.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/#allowSelectAll') property is set to **false**.

[note]

- Set the **grouping**.[allowCollapsing](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/grouping/allowCollapsing.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/grouping/#allowCollapsing') property to **false** when you use infinite scrolling in conjunction with grouping.

- Specify the component's [height](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#height) if you use virtual or infinite scrolling.

- Set **editing**.[refreshMode](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#refreshMode) to `repaint` to support editing if you use infinite scrolling.

[/note]

Note that the [rowRenderingMode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/scrolling/rowRenderingMode.md '{basewidgetpath}/Configuration/scrolling/#rowRenderingMode') property value is "_virtual_" and cannot be changed if you set the **mode** property to "_virtual_" or "_infinite_".

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
