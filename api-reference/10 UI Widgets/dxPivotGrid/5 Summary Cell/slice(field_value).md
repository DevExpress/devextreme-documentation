---
##### shortDescription
Gets the cell located by the path of the source cell with one field value changed.

##### param(field): PivotGridField
The index in the <a href="/Documentation/16_1/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/">fields</a> array, <a href="/Documentation/16_1/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField">dataField</a> or <a href="/Documentation/16_1/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption">caption</a> of the field.

##### param(value): number|string
The <b>field</b>'s value.

##### return: SummaryCell
The target cell.

---
Use this method when you need to get a cell located by the similar path with one of its components changed. 
The image below demonstrates what cell will be returned by the following code.

	<!--JavaScript-->var targetCell = sourceCell.slice('year', 1998);

![](/Content/images/doc/16_1/DataGrid/PivotGrid_slice.png)