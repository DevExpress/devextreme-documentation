---
default: undefined
type: array
---
---
##### shortDescription
The array of field names that specify a path to column/row whose [summary field](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/sortBySummaryField.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortBySummaryField') is used for sorting of this field's header items.

---
[note]The **sortBySummaryPath** option applies together with the [sortBySummaryField](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/sortBySummaryField.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortBySummaryField') option. When the value of the **sortBySummaryPath** option is an empty array or undefined, the header items are sorted by [grand total](/concepts/10%20UI%20Widgets/71%20Pivot%20Grid/010%20Visual%20Elements/05%20Totals '/Documentation/Guide/UI_Widgets/Pivot_Grid/Visual_Elements/#Totals') values. The data field providing facts for these values is specified by the **sortBySummaryField** option.