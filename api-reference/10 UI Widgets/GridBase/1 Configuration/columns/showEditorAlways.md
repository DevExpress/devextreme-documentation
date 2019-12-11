---
default: false
type: Boolean
---
---
##### shortDescription
Specifies whether the column displays its values using editors.

---
A column cell has normal and editing states. In a normal state, the cell value is text. In the editing state, the cell contains an editor that indicates the cell value and allows a user to edit it. In certain cases, a viewer reads the cell value easier if it is indicated by an editor even in the normal state. For example, boolean values are more comprehensible when they are indicated by check boxes. To display editors in cells permanently, set the **showEditorAlways** option to **true**.

[note]

This option has the following peculiarities.

- The default value of this option depends on the column's [dataType](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/dataType.md '{basewidgetpath}/Configuration/columns/#dataType'). For boolean columns, it is **true**; for columns of other types - **false**.
- If you use templates, setting this option to **true** means that the column will always use [editCellTemplate](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/editCellTemplate.md '{basewidgetpath}/Configuration/columns/#editCellTemplate') instead of [cellTemplate](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/cellTemplate.md '{basewidgetpath}/Configuration/columns/#cellTemplate').

[/note]

#####See Also#####
- **columns[]**.[editorOptions](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/editorOptions.md '{basewidgetpath}/Configuration/columns/#editorOptions')