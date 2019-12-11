---
##### shortDescription
Gets the row or column field to which the current cell belongs.

##### param(area): String
The area from which to get a field. Can be *'row'* or *'column'*.

##### return: PivotGridDataSourceOptions_fields
The row or column field.

---
If the [header items](/concepts/05%20Widgets/PivotGrid/050%20Grouping/020%20Data%20Grouping '/Documentation/Guide/Widgets/PivotGrid/Grouping/#Data_Grouping') are expanded and the cell belongs to multiple fields, the field of the deepest expanded header item is returned. The image below demonstrates what field will be returned by the following code.

    <!--JavaScript-->var columnField = sourceCell.field('column');

![](/Content/images/doc/17_1/DataGrid/PivotGrid_field.png)