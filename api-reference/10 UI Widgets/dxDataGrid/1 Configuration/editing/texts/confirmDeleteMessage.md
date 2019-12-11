---
default: 'Are you sure you want to delete this record?'
type: String
---
---
##### shortDescription
Specifies a message to be displayed by a confirmation window. Setting this option makes sense only when the [edit mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode') is *"row"*.

---
A confirmation window appears when a user clicks a delete button, which accompanies each grid record if a user is [enabled to remove](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/allowDeleting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#allowDeleting') records. This window also appears when the [deleteRow(rowIndex)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/deleteRow(rowIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#deleteRowrowIndex') method is called. The confirmation window is entitled with text specified by the [confirmDeleteTitle](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/texts/confirmDeleteTitle.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/texts/#confirmDeleteTitle') option and contains a message specified by the **confirmDeleteMessage** option. To prevent the confirmation window from appearing, assign an empty string to the latter option.