---
default: false
type: Boolean
---
---
##### shortDescription
Specifies whether to search all columns or only visible ones.

---
By default, the widget searches the string entered into the search panel among all columns configured in the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') array. Some of them may be [invisible](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visible'), and finding a result in such columns may confuse the end-user. To avoid this situation, set the **searchVisibleColumnsOnly** option to *true*.