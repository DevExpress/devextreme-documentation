---
id: GridBase.Options.pager.showPageSizeSelector
---
---
##### shortDescription
Specifies page size selector visibility.

---

When this property is set to *"auto"*, the pager is hidden if [pageSize](/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#pageSize) is greater than [itemCount](/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#itemCount). To avoid this behavior, set **showPageSizeSelector** to `true`.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RecordPaging/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Paging/",
    name: "TreeList"
}

#####See Also#####
- [allowedPageSizes](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/pager/allowedPageSizes.md '{basewidgetpath}/Configuration/pager/#allowedPageSizes')