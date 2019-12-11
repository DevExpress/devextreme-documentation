---
default: true
type: Boolean
---
---
##### shortDescription
Specifies whether the values in a column can be edited at runtime. Setting this option makes sense only when editing is [enabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/allowUpdating.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#allowUpdating') for a grid.

---
If the **allowEditing** option is set to *true* for a column, values in this column can be edited by an end-user. If you set this option to *false*, these values cannot be edited.

[note] If values in a column are calculated customarily using the [calculateCellValue](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue') option, they cannot be edited at runtime.

#####See Also#####
- [DataGrid - Editing in UI](/concepts/05%20Widgets/DataGrid/070%20Data%20Editing/20%20Editing%20in%20UI/10%20Editing%20in%20UI.md '/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI')