---
id: dxPivotGridSummaryCell.value(field, postProcessed)
---
---
##### shortDescription
Gets the value of any [field](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/') associated with the summary cell.

##### return: any
The field value.

##### param(field): PivotGridDataSource_Options_fields | String
The index in the **fields** array, [dataField](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/dataField.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField'), or [caption](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/caption.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption') of the field.

##### param(postProcessed): Boolean
Pass **true** to get a value post-processed by [summaryDisplayMode](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryDisplayMode.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode') or [calculateSummaryValue](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/calculateSummaryValue.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#calculateSummaryValue'); pass **false** to get the original summary value.

---
