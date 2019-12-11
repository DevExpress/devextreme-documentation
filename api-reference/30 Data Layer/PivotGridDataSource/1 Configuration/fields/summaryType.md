---
default: 'count'
acceptValues: 'avg' | 'count' | 'custom' | 'max' | 'min' | 'sum'
type: String
---
---
##### shortDescription
Specifies how to aggregate the field's data. Cannot be used with an [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/').

---
The summary type defines how to calculate the summary values that are displayed in the pivot grid's cells. The calculation is performed on a subset of [facts](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/04%20Summary%20Values.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Summary_Values') that correspond to each field value in three areas (column, row, and filter).

The following list describes available summary types:

- *"sum"*        
Calculates the sum of all fact values.

- *"min"*        
Calculates the minimum fact value.

- *"max"*        
Calculates the maximum fact value.

- *"avg"*        
Calculates the average of all fact values.

- *"count"*        
Calculates the number of facts.

- *"custom"*    
Applies a custom aggregate function specified in the [calculateCustomSummary](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/calculateCustomSummary.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#calculateCustomSummary') option.

You can implement the capability to select the summary type at runtime using instructions from the [Runtime Summary Type Selection](/concepts/05%20Widgets/PivotGrid/040%20Summaries/35%20Runtime%20Summary%20Type%20Selection.md '/Documentation/Guide/Widgets/PivotGrid/Summaries/#Runtime_Summary_Type_Selection') article.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `SummaryType` enum. This enum accepts the following values: `Sum`, `Min`, `Max`, `Avg`, `Count`, and `Custom`.