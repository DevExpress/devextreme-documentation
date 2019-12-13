---
id: dxPivotGridSummaryCell.slice(field, value)
---
---
##### shortDescription
Gets the cell located by the path of the source cell with one field value changed.

##### return: dxPivotGridSummaryCell
The target cell.

##### param(field): PivotGridDataSource_Options_fields
The index in the [fields](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/') array, [dataField](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/dataField.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField') or [caption](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/caption.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption') of the field.

##### param(value): Number | String
The **field**'s value.

---
Use this method when you need to get a cell located by the similar path with one of its components changed. 
The image below demonstrates what cell will be returned by the following code.

    <!--JavaScript-->var targetCell = sourceCell.slice("year", 1998);

![](/Content/images/doc/19_2/DataGrid/PivotGrid_slice.png)