---
id: dxDataGrid.Options.editing.allowUpdating
type: Boolean | function(options)
default: false
---
---
##### shortDescription
Specifies whether a user can update rows. It is called for each data row when defined as a function.

##### param(options): Object
Information about the current row.

##### field(options.component): dxDataGrid
The widget's instance.

##### field(options.row): dxDataGridRowObject
The row's properties.

##### return: Boolean
**true** if the row can be updated; otherwise **false**.

---
See an example in the [allowDeleting](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/allowDeleting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#allowDeleting') option.

#####See Also#####
- [onRowUpdating](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowUpdating.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowUpdating')
- [onRowUpdated](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowUpdated.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowUpdated')
- [cellValue(rowIndex, visibleColumnIndex, value)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/cellValue(rowIndex_visibleColumnIndex_value).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cellValuerowIndex_visibleColumnIndex_value')