---
id: GridBaseColumn.showEditorAlways
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the column displays its values in editors in display state.

---

Column cells can be in display and edit states. In display state, a cell value is text. In edit state, the cell contains an editor that allows users to edit the cell value. To use editors in both states, set the **showEditorAlways** property to **true**.

If [edit mode]() is *"cell"* or *"batch"*, users can change cell values in display state. In *"row"*, *"form"*, or *"popup"* edit modes, the component shows editors but discards the changes. In these edit modes, users need to click the Edit button to change cell values. 

[note]

This property has the following specifics:

- The default value of this property depends on the column's [dataType](/api-reference/_hidden/GridBaseColumn/dataType.md '{basewidgetpath}/Configuration/columns/#dataType'). For boolean columns, it is **true**; for columns of other types - **false**. 
 - If you use templates, a column always uses [editCellTemplate](/api-reference/_hidden/dxTreeListColumn/editCellTemplate.md '{basewidgetpath}/Configuration/columns/#editCellTemplate') instead of [cellTemplate](/api-reference/_hidden/dxTreeListColumn/cellTemplate.md '{basewidgetpath}/Configuration/columns/#cellTemplate') if the **showEditorAlways** property value is **true**.

[/note]

#####See Also#####
- **columns[]**.[editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '{basewidgetpath}/Configuration/columns/#editorOptions')