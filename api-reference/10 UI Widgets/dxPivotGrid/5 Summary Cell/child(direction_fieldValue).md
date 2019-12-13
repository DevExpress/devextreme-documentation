---
id: dxPivotGridSummaryCell.child(direction, fieldValue)
---
---
##### shortDescription
Gets the child cell in a specified direction.

##### return: dxPivotGridSummaryCell
The child cell.

##### param(direction): String
The direction in which to search for the child cell. Can be "row" or "column".

##### param(fieldValue): Number | String
The value of the child field whose summary cell should be returned.

---
Use this method for **Total** and **Grand Total** cells to get one of the cells, whose value is involved in the calculation of the total value.
The image below demonstrates what cell will be returned by the following code.

    <!--JavaScript-->var targetCell = sourceCell.child("row", 8); //August is the 8th month

![](/Content/images/doc/19_2/DataGrid/PivotGrid_child.png)

This method is opposite to the [parent(direction)](/api-reference/10%20UI%20Widgets/dxPivotGrid/5%20Summary%20Cell/parent(direction).md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Summary_Cell/#parentdirection') method.