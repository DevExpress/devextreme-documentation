---
id: GridBase.Options.scrolling.rowRenderingMode
acceptValues: 'standard' | 'virtual'
type: String
default: 'standard'
---
---
##### shortDescription
Specifies the rendering mode for loaded rows.

---
Unlike the [mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/scrolling/mode.md '{basewidgetpath}/Configuration/scrolling/#mode') option, which defines when to load data for rows, this option defines when to render them. The following rendering modes are available: 

- *"standard"*        
Renders all the loaded rows at once.

- *"virtual"*     
Renders only those rows that get into the viewport. Use this mode if the [pageSize](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/paging/pageSize.md '{basewidgetpath}/Configuration/paging/#pageSize') is large. Rows that are being currently rendered can be shown as grey boxes.

#include common-ref-enum with {
    enum: "`GridRowRenderingMode`",
    values: "`Standard` and `Virtual`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RemoteVirtualScrolling/"
}