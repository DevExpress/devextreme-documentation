---
id: GridBase.Options.selection.allowSelectAll
---
---
##### shortDescription
Allows users to simultaneously select all or current page rows (depending on the [selectAllMode](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/selection/selectAllMode.md '{basewidgetpath}/Configuration/selection/#selectAllMode')).

---

To select rows, a user should press Ctrl + A or click the Select All check box in the selection column's header. This check box can also be used to deselect all rows. If a filter is applied, the Select All functionality affects all rows that meet filtering conditions.

If **false**, this property disables the Select All functionality. In this case, the check box clears selection and is hidden if no rows are selected.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MultipleRecordSelectionModes/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/MultipleRowSelection/",
    name: "TreeList"
}
