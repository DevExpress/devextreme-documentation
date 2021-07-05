---
id: dxDataGrid.Options.summary.groupItems.summaryType
acceptValues: 'avg' | 'count' | 'custom' | 'max' | 'min' | 'sum'
type: String
default: undefined
---
---
##### shortDescription
Specifies how to aggregate data for the group summary item.

---
The following summary types are supported:

- *"sum"*        

- *"min"*        

- *"max"*        

- *"avg"*        

- *"count"*        

- *"custom"*        
Applies a custom client-side aggregate function ([calculateCustomSummary](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/calculateCustomSummary.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/#calculateCustomSummary')). Refer to [Client-Side Data Aggregation](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/07%20Custom%20Aggregate%20Function/10%20Client-Side%20Data%20Aggregation.md '/Documentation/Guide/UI_Components/DataGrid/Summaries/Custom_Aggregate_Function/#Client-Side_Data_Aggregation') for more information.

- *Any other type*      
Applies a custom server-side aggregate function. Refer to [Server-Side Data Aggregation](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/07%20Custom%20Aggregate%20Function/20%20Server-Side%20Data%20Aggregation.md '/Documentation/Guide/UI_Components/DataGrid/Summaries/Custom_Aggregate_Function/#Server-Side_Data_Aggregation') for more information.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GroupSummaries/"
}

#####See Also#####
- [Group Summary](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/20%20Group%20Summary '/Documentation/Guide/UI_Components/DataGrid/Summaries/Group_Summary/')