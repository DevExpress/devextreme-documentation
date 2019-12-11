---
default: undefined
type: string
---
---
##### shortDescription
Sorts the header items of this field by the summary values of another field.

---
[note]Oftentimes, the **sortBySummaryField** and [sortBySummaryPath](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/sortBySummaryPath.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortBySummaryPath') options are used together to sort header items. If the value of the **sortBySummaryPath** option is an empty array or undefined, the header items are sorted by the [grand total](/concepts/10%20UI%20Widgets/71%20Pivot%20Grid/010%20Visual%20Elements/05%20Totals '/Documentation/Guide/UI_Widgets/Pivot_Grid/Visual_Elements/#Totals') values of the data field specified here.