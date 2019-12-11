---
id: PivotGridDataSource.Options.fields.allowCrossGroupCalculation
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether to take neighboring groups' summary values into account when calculating a [running total](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/runningTotal.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#runningTotal') and [absolute or percent variation](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryDisplayMode.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode').

---
For example, a pivot grid row contains the following summary values split into three groups:

    [ [1, 1, 1], [2, 2, 2], [3, 3, 3] ]

This row can be displayed differently depending on the **allowCrossGroupCalculation** option's value, provided that the running total is calculated by rows:

    [ [1, 2, 3], [2, 4, 6], [3, 6, 9] ]    // allowCrossGroupCalculation: false
    [ [1, 2, 3], [5, 7, 9], [12, 15, 18] ] // allowCrossGroupCalculation: true

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/RunningTotals/"
}