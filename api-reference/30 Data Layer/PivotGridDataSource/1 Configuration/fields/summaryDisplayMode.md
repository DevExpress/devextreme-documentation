---
default: undefined
acceptValues: 'absoluteVariation' | 'percentOfColumnGrandTotal' | 'percentOfColumnTotal' | 'percentOfGrandTotal' | 'percentOfRowGrandTotal' | 'percentOfRowTotal' | 'percentVariation'
type: String
---
---
##### shortDescription
Specifies the summary post-processing algorithm.

---
This option allows you to set up additional calculations on summary values (calculated by aggregation of facts according to the [summaryType](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryType.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryType')). This allows you to take into account the neighboring summary values or total values. You can use one of the predefined post-processing functions (display modes) or implement your own one using the [calculateSummaryValue](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/calculateSummaryValue.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#calculateSummaryValue') option. The default summary display modes are listed below. 

[note] All post-processing functions are designed to iterate through pivot grid summary values. The **current value** concept refers to a summary value at any iteration. In other words, the **current value** is any summary value for which the post-processing function can be applied.

- *"absoluteVariation"*            
    Calculates the absolute difference between the current and the previous row value. The processing starts from the second column because the first value does not have the previous one.

- *"percentVariation"*            
    Calculates the relative difference between the current and the previous row value assuming the previous value is 100%. If the current value is lower than the previous one, the percent variation will be negative. The processing starts from the second column because the first value does not have the previous one.

- *"percentOfColumnTotal"*            
    Calculates the relative difference between the current value and the parental total assuming the latter is 100%. Note that the 100% value is displayed only for Grand Totals because they have no parental total row and the percentage cannot be calculated. All intermediate total rows will display the percentage values calculated with respect to their parental total rows, whereas for each inner summary row parental total values will be assumed to be 100% internally.

- *"percentOfRowTotal"*        
    Calculates the relative difference between the current value and the parental total assuming the latter is 100%. Note that the 100% value is displayed only for Grand Totals because they have no parental total column and the percentage cannot be calculated. All intermediate total columns will display the percentage values calculated with respect to their parental total columns, whereas for each inner summary column parental total values will be assumed to be 100% internally.    

- *"percentOfColumnGrandTotal"*        
    Calculates the relative difference between the current value and the corresponding grand total row value assuming the latter is 100%.

- *"percentOfRowGrandTotal"*        
    Calculates the relative difference between the current value and the corresponding grand total column value assuming the latter is 100%.

- *"percentOfGrandTotal"*        
    Calculates the relative difference between the current value and the grand total value of the entire pivot grid assuming the latter is 100%.

You can allow the user to change the summary display mode at runtime. Learn how to implement this capability from the [Runtime Summary Type Selection](/concepts/05%20Widgets/PivotGrid/040%20Summaries/35%20Runtime%20Summary%20Type%20Selection.md '/Documentation/Guide/Widgets/PivotGrid/Summaries/#Runtime_Summary_Type_Selection') topic.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `PivotGridSummaryDisplayMode` enum. This enum accepts the following values: `AbsoluteVariation`, `PercentVariation`, `PercentOfColumnTotal`, `PercentOfRowTotal`, `PercentOfColumnGrandTotal`, `PercentOfRowGrandTotal` and `PercentOfGrandTotal`.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pivot_Grid/SummaryDisplayModes/jQuery/Light/"
}