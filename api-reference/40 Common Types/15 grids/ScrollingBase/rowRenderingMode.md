---
uid: common/grids:ScrollingBase.rowRenderingMode
type: Enums.DataRenderMode
default: 'standard'
---
---
##### shortDescription
Specifies the rendering mode for loaded rows.

---
<!--
Unlike the [mode](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/scrolling/mode.md '{basewidgetpath}/Configuration/scrolling/#mode') property, which defines when to load data for rows, this property defines when to render them. The following rendering modes are available: 

- *"standard"*        
Renders all the loaded rows at once.

- *"virtual"*     
Renders only those rows that get into the viewport. Use this mode if the [pageSize](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/paging/pageSize.md '{basewidgetpath}/Configuration/paging/#pageSize') is large. Specify the component's [height](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/height.md '{basewidgetpath}/Configuration/#height') and height of its container if you use the *virtual* mode. 

[note] The **rowRenderingMode** property value is "_virtual_" and cannot be changed if you set the **scrolling**.[mode](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/scrolling/mode.md '{basewidgetpath}/Configuration/scrolling/#mode') property to "_virtual_" or "_infinite_".



#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RemoteVirtualScrolling/"
}
-->