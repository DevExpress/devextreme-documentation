---
default: undefined
acceptValues: 'column' | 'row'
type: String
---
---
##### shortDescription
Specifies whether to summarize each next summary value with the previous one by rows or columns.

---
After [aggregating](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryType.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryType') and [post-processing](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryDisplayMode.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode') stages, you can perform the last calculation on the resulting summary values &#8212; adding of each summary value to the previous one (starting from the second) by rows or columns. For example, if you have the following row values

    [2, 6, -3, 0, 8]

and the **runningTotal** option is set to 'row', the pivot grid will display the row as follows.

    [2, 8, 5, 5, 13]

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `PivotGridRunningTotalMode` enum. This enum accepts the following values: `Row` and `Column`.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pivot_Grid/RunningTotals/jQuery/Light/"
}