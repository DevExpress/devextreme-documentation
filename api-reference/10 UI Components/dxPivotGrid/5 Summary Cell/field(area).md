---
id: dxPivotGridSummaryCell.field(area)
---
---
##### shortDescription
Gets a pivot grid field that corresponds to the summary cell.

##### return: PivotGridDataSource_Options_fields
The pivot grid field.

##### param(area): String
The area from which to get the field: *"row"*, *"column"*, or *"data"*.

---
If the [header items](/concepts/05%20UI%20Components/PivotGrid/050%20Grouping/020%20Data%20Grouping '/Documentation/Guide/UI_Components/PivotGrid/Grouping/#Data_Grouping') are expanded and the cell belongs to multiple fields, the field of the deepest expanded header item is returned. The image below demonstrates what field will be returned by the following code.

    <!--JavaScript-->var columnField = sourceCell.field("column");

![DevExtreme PivotGrid: Access a field](/images/DataGrid/PivotGrid_field.png)