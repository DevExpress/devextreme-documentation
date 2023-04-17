---
id: GridBaseColumn.allowEditing
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether a user can edit values in the column at runtime. By default, inherits the value of the **editing**.[allowUpdating](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/editing/allowUpdating.md '{basewidgetpath}/Configuration/editing/#allowUpdating') property.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/BatchUpdateRequest/"
}

[note] If values in the column are calculated customarily using the [calculateCellValue](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '{basewidgetpath}/Configuration/columns/#calculateCellValue') property, they cannot be edited at runtime.

#####See Also#####
- [editing](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/editing '{basewidgetpath}/Configuration/editing/')