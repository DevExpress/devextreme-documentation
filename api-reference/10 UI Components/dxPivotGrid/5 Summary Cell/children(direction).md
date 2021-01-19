---
id: dxPivotGridSummaryCell.children(direction)
---
---
##### shortDescription
Gets all child cells in a specified direction.

##### return: Array<dxPivotGridSummaryCell>
The array of child cells.

##### param(direction): String
The direction in which to search for child cells. Can be "row" or "column".

---
This method is a general case of the [child(direction, fieldValue)](/api-reference/10%20UI%20Widgets/dxPivotGrid/5%20Summary%20Cell/child(direction_fieldValue).md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Summary_Cell/#childdirection_fieldValue') method. It returns all the cells whose values were involved in a calculation of the total value. Use it for **Total** and **Grand Total** cells.