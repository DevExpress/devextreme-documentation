---
default: undefined
acceptValues: 'row' | 'column'
type: string
---
---
##### shortDescription
Specifies whether to summarize each next summary value with the previous one by rows or columns.

---
After [aggregating](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryType.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryType') and [post-processing](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryDisplayMode.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode') stages, you can perform the last calculation on the resulting summary values &#8212; adding of each summary value to the previous one (starting from the second) by rows or columns. For example, if you have the following row values

	[2, 6, -3, 0, 8]

and the **runningTotal** option is set to 'row', the pivot grid will display the row as follows.

	[2, 8, 5, 5, 13]