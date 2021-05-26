---
id: GridBase.Options.editing.changes
type: Array<DataChange>
default: []
firedEvents: optionChanged
inheritsType: DataChange
---
---
##### shortDescription
An array of pending row changes.

---
This array can be changed from the UI, with native JavaScript methods, or with UI component methods ([addRow](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/addRow().md '{basewidgetpath}/Methods/#addRow'), [editRow](/api-reference/10%20UI%20Components/GridBase/3%20Methods/editRow(rowIndex).md '{basewidgetpath}/Methods/#editRowrowIndex'), [editCell](/api-reference/10%20UI%20Components/GridBase/3%20Methods/editCell(rowIndex_dataField).md '{basewidgetpath}/Methods/#editCellrowIndex_dataField'), [deleteRow](/api-reference/10%20UI%20Components/GridBase/3%20Methods/deleteRow(rowIndex).md '{basewidgetpath}/Methods/#deleteRowrowIndex')).

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/EditStateManagement/"
}