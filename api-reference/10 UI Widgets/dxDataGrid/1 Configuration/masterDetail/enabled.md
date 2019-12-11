---
default: false
type: boolean
---
---
##### shortDescription
Enables an end-user to expand/collapse detail sections.

---
If you set this option to *true*, each grid row will be supplied with an arrow that allows an end-user to expand/collapse the detail section of this row.

If the **masterDetail** | **enabled** option is *false*, the expanding arrows are missing. It makes detail sections unreachable for an end-user.

Setting this option to *false* is recommended if you need a custom logic of expanding/collapsing the detail sections. When implementing this logic, you can use specific API methods. To check whether the detail section is expanded or collapsed, use the [isRowExpanded(key)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/isRowExpanded(key).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#isRowExpandedkey') method. To expand or collapse a specific detail section, call the [expandRow(key)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/expandRow(key).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandRowkey') or [collapseRow(key)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/collapseRow(key).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseRowkey') method respectively.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/MasterDetailAPI/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>