The following predefined [aggregate functions](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#summaryType') are supported:

- *"sum"*        
- *"min"*        
- *"max"*        
- *"avg"*        
- *"count"*        

These functions aggregate values from the whole grid or a single column (calculates a [total summary](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/10%20Total%20Summary '/Documentation/Guide/UI_Components/DataGrid/Summaries/Total_Summary/')) or from a group ([group summary](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/20%20Group%20Summary '/Documentation/Guide/UI_Components/DataGrid/Summaries/Group_Summary/')).

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GroupSummaries/"
}

Predefined aggregate functions are performed on the client, but they can be delegated to the server (if the server supports them) by setting the [remoteOperations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/'), **remoteOperations**.[groupPaging](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations/groupPaging.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/#groupPaging'), or **remoteOperations**.[summary](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations/summary.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/#summary') property to **true**.

#####See Also#####
- [Custom Aggregate Function](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/07%20Custom%20Aggregate%20Function '/Documentation/Guide/UI_Components/DataGrid/Summaries/Custom_Aggregate_Function/')
