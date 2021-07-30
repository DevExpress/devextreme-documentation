---
id: dxPivotGridSummaryCell.grandTotal(direction)
---
---
##### shortDescription
Gets a partial Grand Total cell of a row or column.

##### return: dxPivotGridSummaryCell
The partial Grand Total cell.

##### param(direction): String
The direction in which to search for the grand total cell. Can be "row" or "column".

---
The image below demonstrates what cell will be returned by the following code.

    <!--JavaScript-->var targetCell = sourceCell.grandTotal("row");

![DevExtreme PivotGrid: Access a Grand Total cell](/images/DataGrid/PivotGrid_GT.png)