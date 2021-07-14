---
id: PivotGridDataSource.Options.fields.summaryType
acceptValues: 'avg' | 'count' | 'custom' | 'max' | 'min' | 'sum'
type: String
default: 'count'
---
---
##### shortDescription
Specifies how to aggregate the field's data. Cannot be used with an [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/').

---
The summary type defines how to calculate the summary values that are displayed in the pivot grid's cells. The calculation is performed on a subset of [facts](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/04%20Summary%20Values.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Summary_Values') that correspond to each field value in three areas (column, row, and filter).

The following summary types are supported:

- *"sum"*        

- *"min"*        

- *"max"*        

- *"avg"*        

- *"count"*        

- *"custom"*        
Applies a custom client-side aggregate function ([calculateCustomSummary](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/calculateCustomSummary.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#calculateCustomSummary')). Refer to [Client-Side Data Aggregation](/concepts/05%20UI%20Components/PivotGrid/040%20Summaries/07%20Custom%20Aggregate%20Function/10%20Client-Side%20Data%20Aggregation.md '/Documentation/Guide/UI_Components/PivotGrid/Summaries/#Custom_Aggregate_Function/Client-Side_Data_Aggregation') for more information.

- *Any other type*      
Applies a custom server-side aggregate function. Refer to [Server-Side Data Aggregation](/concepts/05%20UI%20Components/PivotGrid/040%20Summaries/07%20Custom%20Aggregate%20Function/20%20Server-Side%20Data%20Aggregation.md '/Documentation/Guide/UI_Components/PivotGrid/Summaries/#Custom_Aggregate_Function/Server-Side_Data_Aggregation') for more information.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/ChartIntegration/"
}

You can implement the capability to select the summary type at runtime using instructions from the [Runtime Summary Type Selection](/concepts/05%20UI%20Components/PivotGrid/040%20Summaries/35%20Runtime%20Summary%20Type%20Selection.md '/Documentation/Guide/UI_Components/PivotGrid/Summaries/#Runtime_Summary_Type_Selection') article.