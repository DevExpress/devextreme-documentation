---
id: GridBaseColumn.showEditorAlways
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the column displays its values in editors.

---

Set the **showEditorAlways** property to **true** to display a column cell value in an editor when a user does not edit data. For example, you can use this functionality to display Boolean data as check boxes instead of the "true/false" strings.

Behavior of the editor in a cell depends on the component's edit mode:

- The **editing**.[mode]({basewidgetpath}/Configuration/editing/#mode) property is set to *"cell"* or *"batch"*. Users can edit values directly in their cells without switching the component to edit mode.

- The **editing**.[mode]({basewidgetpath}/Configuration/editing/#mode) property is set to *"row"*, *"form"* or *"popup"*. Relevant only for Boolean values. The component displays Boolean values in read-only check boxes. Users should click the Edit button to change cell values.

[note]

This property has the following specifics:

- The default value of this property depends on the column's [dataType](/api-reference/_hidden/GridBaseColumn/dataType.md '{basewidgetpath}/Configuration/columns/#dataType'). For Boolean columns, the default value is **true**; for columns of other types - **false**.

- The [editCellTemplate](/api-reference/_hidden/dxTreeListColumn/editCellTemplate.md '{basewidgetpath}/Configuration/columns/#editCellTemplate') has higher priority over the [cellTemplate](/api-reference/_hidden/dxTreeListColumn/cellTemplate.md '{basewidgetpath}/Configuration/columns/#cellTemplate') if the **showEditorAlways** property value is **true**. Relevant for all data types except Boolean.

[/note]

#####See Also#####
- **columns[]**.[editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '{basewidgetpath}/Configuration/columns/#editorOptions')