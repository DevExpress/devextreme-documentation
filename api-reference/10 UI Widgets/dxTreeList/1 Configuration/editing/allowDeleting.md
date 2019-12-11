---
id: dxTreeList.Options.editing.allowDeleting
type: Boolean | function(options)
default: false
---
---
##### shortDescription
Specifies whether a user can delete rows. It is called for each data row when defined as a function.

##### param(options): Object
Information about the current row.

##### field(options.component): dxTreeList
The widget's instance.

##### field(options.row): dxTreeListRowObject
The row's properties.

##### return: Boolean
**true** if the row can be deleted; otherwise **false**.

---
See an example in the [allowAdding](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/editing/allowAdding.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#allowAdding') option.

#####See Also#####
- [onRowRemoved](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowRemoved.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowRemoved')
- [onRowRemoving](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowRemoving.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowRemoving')
- [deleteRow(rowIndex)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/deleteRow(rowIndex).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#deleteRowrowIndex')
- [undeleteRow(rowIndex)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/undeleteRow(rowIndex).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#undeleteRowrowIndex')