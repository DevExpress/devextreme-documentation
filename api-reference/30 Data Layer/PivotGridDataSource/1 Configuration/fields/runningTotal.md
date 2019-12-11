---
default: undefined
acceptValues: 'column' | 'row'
type: String
---
---
##### shortDescription
Specifies whether to calculate the running total by rows or by columns.

---
For example, a pivot grid row contains the following summary values:

    [ 3, 3, 3, 3, 3 ]

If the **runningTotal** option is set to *"row"*, each value in this row is added to the previous value:

    [ 3, 6, 9, 12, 15 ]

This also applies to columns if the **runningTotal** option is set to *"column"*.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `PivotGridRunningTotalMode` enum. This enum accepts the following values: `Row` and `Column`.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pivot_Grid/RunningTotals/jQuery/Light/"
}

#####See Also#####
- **fields[]**.[allowCrossGroupCalculation](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/allowCrossGroupCalculation.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowCrossGroupCalculation')