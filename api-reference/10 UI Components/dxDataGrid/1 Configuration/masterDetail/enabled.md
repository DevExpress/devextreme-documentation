---
id: dxDataGrid.Options.masterDetail.enabled
type: Boolean
default: false
---
---
##### shortDescription
Enables an end-user to expand/collapse detail sections.

---
If you set this property to **true**, each grid row will be supplied with an arrow that allows an end-user to expand/collapse the detail section of this row.

If the **masterDetail**.**enabled** property is **false**, the expanding arrows are missing. It makes detail sections unreachable for an end-user.

Setting this property to **false** is recommended if you need a custom logic of expanding/collapsing the detail sections. When implementing this logic, you can use specific API methods. To check whether the detail section is expanded or collapsed, use the [isRowExpanded(key)](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/isRowExpanded(key).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#isRowExpandedkey') method. To expand or collapse a specific detail section, call the [expandRow(key)](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/expandRow(key).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#expandRowkey') or [collapseRow(key)](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/collapseRow(key).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#collapseRowkey') method respectively.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MasterDetailView/",
    name: "Master-Detail View"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/AdvancedMasterDetailView/",
    name: "Advanced Master-Detail View"
}

#####See Also#####
- [Master-Detail Interface](/concepts/05%20UI%20Components/DataGrid/60%20Master-Detail%20Interface '/Documentation/Guide/UI_Components/DataGrid/Master-Detail_Interface/')