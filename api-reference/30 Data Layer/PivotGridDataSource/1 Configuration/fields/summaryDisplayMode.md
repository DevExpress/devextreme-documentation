---
id: PivotGridDataSourceField.summaryDisplayMode
acceptValues: 'absoluteVariation' | 'percentOfColumnGrandTotal' | 'percentOfColumnTotal' | 'percentOfGrandTotal' | 'percentOfRowGrandTotal' | 'percentOfRowTotal' | 'percentVariation'
type: String
default: undefined
---
---
##### shortDescription
Specifies a predefined post-processing function. Does not apply when the [calculateSummaryValue](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/calculateSummaryValue.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#calculateSummaryValue') option is set.

---
Post-processing functions allow you to perform additional calculations on each summary value and take into account neighboring cells' summary values.

The following list describes the available post-processing functions. These functions apply to one summary value at a time. This value is referred to as the "current value" in the descriptions.

- *"absoluteVariation"*            
    Calculates the absolute difference between the current and previous value in a row. Starts from the second value in the row because the first does not have a previous value.

- *"percentVariation"*            
    Same as the absolute variation, but the difference is calculated as a percentage.

- *"percentOfColumnTotal"*            
    Calculates the current value as a percentage in one of the column's intermediate totals or the column's grand total when there are no expanded rows.

- *"percentOfRowTotal"*        
    Calculates the current value as a percentage in one of the row's intermediate totals or the row's grand total when there are no expanded columns.

- *"percentOfColumnGrandTotal"*        
    Calculates the current value as a percentage in the column's grand total.

- *"percentOfRowGrandTotal"*        
    Calculates the current value as a percentage in the row's grand total.

- *"percentOfGrandTotal"*        
    Calculates the current value as a percentage in the grand total of the entire pivot grid.

You can implement the capability to select the post-processing function at runtime using instructions from the [Runtime Summary Type Selection](/concepts/05%20Widgets/PivotGrid/040%20Summaries/35%20Runtime%20Summary%20Type%20Selection.md '/Documentation/Guide/Widgets/PivotGrid/Summaries/#Runtime_Summary_Type_Selection') article.

To specify a custom post-processing function, use the [calculateSummaryValue](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/calculateSummaryValue.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#calculateSummaryValue') option.

#include common-ref-enum with {
    enum: "`PivotGridSummaryDisplayMode`",
    values: "`AbsoluteVariation`, `PercentVariation`, `PercentOfColumnTotal`, `PercentOfRowTotal`, `PercentOfColumnGrandTotal`, `PercentOfRowGrandTotal`, and `PercentOfGrandTotal`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pivot_Grid/SummaryDisplayModes/"
}