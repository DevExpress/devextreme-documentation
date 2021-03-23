---
id: GridBase.Options.searchPanel.searchVisibleColumnsOnly
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the UI component should search against all columns or only visible ones.

---
By default, the UI component searches against all columns configured in the [columns](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/') array. Some of them may be [invisible](/api-reference/_hidden/GridBaseColumn/visible.md '{basewidgetpath}/Configuration/columns/#visible'), and finding a result in them may confuse a user. To avoid this, set the **searchVisibleColumnsOnly** property to **true**.