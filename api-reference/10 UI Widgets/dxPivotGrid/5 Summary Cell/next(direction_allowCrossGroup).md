---
##### shortDescription
Gets the cell next to current in a specified direction.

##### param(direction): string
The direction in which to search for the next cell. Can be 'row' or 'column'.

##### param(allowCrossGroup): bool
Specifies whether to allow this method to return cells from groups other than the current one.

##### return: SummaryCell
The cell next to the current one.

---
This method is opposite of the [prev(direction, allowCrossGroup)](/api-reference/10%20UI%20Widgets/dxPivotGrid/5%20Summary%20Cell/prev(direction_allowCrossGroup).md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Summary_Cell/#prevdirection_allowCrossGroup') method.