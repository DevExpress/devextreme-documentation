---
##### shortDescription
Gets the row or column field to which the current cell belongs.

##### param(area): string
The area from which to get a field. Can be <i>'row'</i> or <i>'column'</i>.

##### return: PivotGridField
The row or column field.

---
If the [header items](/concepts/10%20UI%20Widgets/71%20Pivot%20Grid/050%20Grouping/020%20Data%20Grouping '/Documentation/Guide/UI_Widgets/Pivot_Grid/Grouping/#Data_Grouping') are expanded and the cell belongs to multiple fields, the field of the deepest expanded header item is returned. The image below demonstrates what field will be returned by the following code.

	<!--JavaScript-->var columnField = sourceCell.field('column');

![](/Content/images/doc/16_1/DataGrid/PivotGrid_field.png)