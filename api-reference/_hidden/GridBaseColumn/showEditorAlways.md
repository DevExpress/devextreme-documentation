---
id: GridBaseColumn.showEditorAlways
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the column displays its values in editors in browse mode.

---

A column cell can be in browse and edit modes. In browse state, the cell value is text. In edit mode, the cell contains an editor that indicates the cell value and allows a user to edit it. To display cell values in editors in edit and browse modes, set the **showEditorAlways** property to **true**.

In "cell" or "batch" edit mode, users can edit cells directly. For "row", "form", or "popup" edit modes, the component shows editors but discards the changes. In these modes, users need to click the "edit" button to edit values. 

[note]

This property has the following specifics:

- The default value of this property depends on the column's [dataType](/api-reference/_hidden/GridBaseColumn/dataType.md '{basewidgetpath}/Configuration/columns/#dataType'). For boolean columns, it is **true**; for columns of other types - **false**. 
 - If you use templates, column always uses [editCellTemplate](/api-reference/_hidden/dxTreeListColumn/editCellTemplate.md '{basewidgetpath}/Configuration/columns/#editCellTemplate') instead of [cellTemplate](/api-reference/_hidden/dxTreeListColumn/cellTemplate.md '{basewidgetpath}/Configuration/columns/#cellTemplate') if the **showEditorAlways** property to **true**.

[/note]

#####See Also#####
- **columns[]**.[editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '{basewidgetpath}/Configuration/columns/#editorOptions')