---
id: GridBase.Options.rowDragging.dropFeedbackMode
acceptValues: 'push' | 'indicate'
type: String
default: 'indicate'
---
---
##### shortDescription
Specifies how to highlight the row's drop position.

---
This option accepts the following values:

- *"indicate"*    
  Rows do not animate, a blue square appears at the place where the dragged row is going to be placed.

- *"push"*    
  Rows move apart with animation, allowing room for the dragged row to be placed. To use this mode, ensure that [allowDropInsideItem](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/rowDragging/allowDropInsideItem.md '{basewidgetpath}/Configuration/rowDragging/#allowDropInsideItem') is disabled and the **scrolling**.[mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/scrolling/mode.md '{basewidgetpath}/Configuration/scrolling/#mode') differs from *"virtual"*.
