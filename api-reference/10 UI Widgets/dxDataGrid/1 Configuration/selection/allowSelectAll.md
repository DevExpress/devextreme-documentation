---
default: true
type: boolean
---
---
##### shortDescription
Specifies whether the user can select all grid records at once.

---
In a multiple selection mode, several records can be selected in a grid at runtime. Additionally, **DataGrid** provides a capability for the user to select all grid records at once. For this purpose, he or she can use the CTRL + A shortcut or a check box located in the header of the [selection column](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/110%20Selection%20Column.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Selection_Column'). To disable this capability, set the **allowSelectAll** option to *false*. In this case, a click on the check box does not select all records, but still allows clearing the selection.