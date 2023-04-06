---
id: GridBase.Options.pager.allowedPageSizes
---
---
##### shortDescription
Specifies the available page sizes in the page size selector.

---
Set this property to an array of numbers that specify available page sizes. If you want to allow users to display all records on a single page, add the *"all"* value to this array. When the property is set to *"auto"* (the default value), the component automatically calculates the available page sizes based on the current [page size](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/paging/pageSize.md '{basewidgetpath}/Configuration/paging/#pageSize'). 

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RecordPaging/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Paging/",
    name: "TreeList"
}
