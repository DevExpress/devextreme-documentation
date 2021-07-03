---
id: GridBase.deleteRow(rowIndex)
---
---
##### shortDescription
Removes a row with a specific index.

##### param(rowIndex): Number
The row's index. Refer to [Column and Row Indexes](/concepts/05%20UI%20Components/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/UI_Components/{WidgetName}/Columns/Column_and_Row_Indexes/') for more information.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FloatingActionButton/Overview/"
}

[note] You cannot call this method to delete a row if this row is being edited in row or form editing mode. In these modes, you can modify only one row at a time and you should finish the row edit to call this method.

#####See Also#####
#include common-link-callmethods
- [addRow()](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/addRow().md '{basewidgetpath}/Methods/#addRow')
- [deleteColumn(id)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/deleteColumn(id).md '{basewidgetpath}/Methods/#deleteColumnid')