---
id: GridBase.Options.pager.allowedPageSizes
acceptValues: 'all' | 'auto'
type: Array<Number, String> | String
default: 'auto'
---
---
##### shortDescription
Specifies the available page sizes in the page size selector.

---
Set this property to an array of numbers that specify available page sizes. If you want to allow users to display all records on a single page, add the *"all"* value to this array. When you set the property to *"auto"* (the default value), the component automatically calculates the available page sizes based on the current [page size]({basewidgetpath}/Configuration/paging/#pageSize). 

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RecordPaging/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Paging/",
    name: "TreeList"
}
