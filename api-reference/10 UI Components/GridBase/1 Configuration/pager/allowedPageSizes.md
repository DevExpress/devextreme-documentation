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
Set this property to an array of numbers that specify available page sizes. If you want to allow users to display all records on a single page, add the *"all"* value to this array. When the property is set to *"auto"* (the default value), the available page sizes are automatically calculated based on the total number of records.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RecordPaging/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Paging/",
    name: "TreeList"
}
