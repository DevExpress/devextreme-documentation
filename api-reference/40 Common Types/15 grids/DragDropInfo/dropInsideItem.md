---
id: DragDropInfo.dropInsideItem
type: Boolean
---
---
##### shortDescription
Indicates whether the dragged row is dropped inside another row.

---
Use this field in TreeList row-dragging handlers to determine whether to update the row's parent. A value of **true** indicates a drop inside the target row; **false** indicates a drop between rows. To allow drops inside rows, enable [allowDropInsideItem](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#allowDropInsideItem). This field applies only to TreeList.