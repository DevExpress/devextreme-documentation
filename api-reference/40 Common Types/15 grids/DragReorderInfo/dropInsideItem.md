---
id: DragReorderInfo.dropInsideItem
type: Boolean
---
---
##### shortDescription
Indicates whether the dragged row is dropped inside another row.

---
Use this field in TreeList row-dragging handlers to determine whether to update the row's parent. A value of **true** indicates a drop inside the target row. A value of **false** indicates a drop between rows. To allow drops inside rows, enable [allowDropInsideItem](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/rowDragging/allowDropInsideItem.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#allowDropInsideItem'). This field applies only to TreeList.