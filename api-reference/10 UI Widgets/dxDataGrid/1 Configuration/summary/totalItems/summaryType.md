---
id: dxDataGrid.Options.summary.totalItems.summaryType
acceptValues: 'avg' | 'count' | 'custom' | 'max' | 'min' | 'sum'
type: String
default: undefined
---
---
##### shortDescription
Specifies how to aggregate data for the total summary item.

---
The following summary types are supported:

- *"sum"*        

- *"min"*        

- *"max"*        

- *"avg"*        

- *"count"*        

- *"custom"*        
Applies a custom client-side aggregate function ([calculateCustomSummary](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/calculateCustomSummary.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/#calculateCustomSummary')). Refer to [Client-Side Data Aggregation](/concepts/05%20Widgets/DataGrid/65%20Summaries/07%20Custom%20Aggregate%20Function/10%20Client-Side%20Data%20Aggregation.md '/Documentation/Guide/Widgets/DataGrid/Summaries/Custom_Aggregate_Function/#Client-Side_Data_Aggregation') for more information.

- *Any other type*      
Applies a custom server-side aggregate function. Refer to [Server-Side Data Aggregation](/concepts/05%20Widgets/DataGrid/65%20Summaries/07%20Custom%20Aggregate%20Function/20%20Server-Side%20Data%20Aggregation.md '/Documentation/Guide/Widgets/DataGrid/Summaries/Custom_Aggregate_Function/#Server-Side_Data_Aggregation') for more information.

#include common-ref-enum with {
    enum: "`SummaryType`",
    values: "`Sum`, `Min`, `Max`, `Avg`, `Count`, and `Custom`"
} To apply a custom server-side aggregate function, use a string overload instead. 

#####See Also#####
- [Total Summary](/concepts/05%20Widgets/DataGrid/65%20Summaries/10%20Total%20Summary '/Documentation/Guide/Widgets/DataGrid/Summaries/Total_Summary/')