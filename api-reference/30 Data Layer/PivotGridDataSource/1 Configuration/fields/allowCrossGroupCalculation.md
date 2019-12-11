---
default: false
type: boolean
---
---
##### shortDescription
Specifies whether to allow the [predefined summary post-processing functions](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryDisplayMode.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode') ('absoluteVariation' and 'percentVariation') and [runningTotal](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/runningTotal.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#runningTotal') to take values of different groups into account.

---
For example, consider you have a [runningTotal](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/runningTotal.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#runningTotal') option set to 'row' and your pivot grid contains the following row split into three groups.

	[[8, 3, -6], [5, 3, 0], [1, -4, 2]]

If the **allowCrossGroupCalculation** option is set to *false*, each group will be independent of the previous and the row will be displayed as follows.

	[[8, 11, 5], [5, 8, 8], [1, -3, -1]]

With the **allowCrossGroupCalculation** option set to *true*, the running total will act regardless of group bounds and same row will be displayed as follows.

	[[8, 11, 5], [10, 13, 13], [14, 10, 12]]