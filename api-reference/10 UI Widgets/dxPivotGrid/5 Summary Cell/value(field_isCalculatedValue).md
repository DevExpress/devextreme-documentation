---
##### shortDescription
Gets the value of any field linked with the current cell.

##### param(field): PivotGridDataSource_Options_fields
The field whose value to return.

##### param(isCalculatedValue): Boolean
Specifies whether or not to return a [post-processed](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/calculateSummaryValue.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#calculateSummaryValue') value. Pass **false** here to get the initial summary value.

##### return: any
The field value.

---
Use this method when you need extra information about the current cell. You can use the value of any field to which the cell belongs.