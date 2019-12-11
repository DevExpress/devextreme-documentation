---
default: true
type: Boolean
---
---
##### shortDescription
Specifies whether or not to display [Total](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/05%20Totals '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Totals') values for the field.

---
[note] Setting this option to **false** for a [data field](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') keeps only [Grand Total](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/05%20Totals/03%20Grand%20Total%20Row%20and%20Column.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Totals/Grand_Total_Row_and_Column') values in the **PivotGrid**. To keep summary values as well, set [showValues](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/showValues.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#showValues') to **true**.