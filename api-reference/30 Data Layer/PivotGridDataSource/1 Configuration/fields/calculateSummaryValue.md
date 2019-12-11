---
default: undefined
type: function(e)
---
---
##### shortDescription
Specifies a callback function that allows you to modify summary values after they are calculated.

##### param(e): SummaryCell
The object for accessing the data of the current cell and the neighboring cells.

##### return: number
The new cell value.

---
With this function, you can perform additional calculations on each summary value and take into account the values of the neighboring cells. The function takes the [Summary Cell](/api-reference/10%20UI%20Widgets/dxPivotGrid/5%20Summary%20Cell '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Summary_Cell/') object as an argument and returns the new summary value. The summary value calculated by aggregation of facts (according to the [summaryType](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryType.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryType')) is replaced with the value returned by this function.

There are several predefined post-processing functions. You can enable one of them by using the [summaryDisplayMode](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryDisplayMode.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode') option.