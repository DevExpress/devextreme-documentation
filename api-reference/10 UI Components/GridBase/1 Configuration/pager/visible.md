---
id: GridBase.Options.pager.visible
acceptValues: 'auto'
type: Boolean | String
default: 'auto'
---
---
##### shortDescription
Specifies whether the pager is visible.

---
The pager is only visible if paging is [enabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/paging/enabled.md '{basewidgetpath}/Configuration/paging/#enabled') and the total row count is greater than the [pageSize](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/paging/pageSize.md '{basewidgetpath}/Configuration/paging/#pageSize') property. If you choose a large page size (for example "All" supported in [allowedPageSizes](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/pager/#allowedPageSizes)) and the data does not increase (for example, with state storing enabled), the pager is hidden permanently.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RecordPaging/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Paging/",
    name: "TreeList"
}
