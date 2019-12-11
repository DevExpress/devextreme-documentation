---
default: undefined
type: Array
---
---
##### shortDescription
The array of field names that specify a path to column/row whose [summary field](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/sortBySummaryField.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortBySummaryField') is used for sorting of this field's header items.

---
[note]The **sortBySummaryPath** option applies together with the [sortBySummaryField](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/sortBySummaryField.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortBySummaryField') option. When the value of the **sortBySummaryPath** option is an empty array or undefined, the header items are sorted by [grand total](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/05%20Totals '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Totals') values. The data field providing facts for these values is specified by the **sortBySummaryField** option.