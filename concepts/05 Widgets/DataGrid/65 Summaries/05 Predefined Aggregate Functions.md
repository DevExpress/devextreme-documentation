The following predefined aggregate functions are supported:

- *"sum"*        
- *"min"*        
- *"max"*        
- *"avg"*        
- *"count"*        

These functions aggregate values from the whole grid or a single column (calculates a [total summary](/concepts/05%20Widgets/DataGrid/65%20Summaries/10%20Total%20Summary '/Documentation/Guide/Widgets/DataGrid/Summaries/Total_Summary/')) or from a group ([group summary](/concepts/05%20Widgets/DataGrid/65%20Summaries/20%20Group%20Summary '/Documentation/Guide/Widgets/DataGrid/Summaries/Group_Summary/')).

Predefined aggregate functions are performed on the client, but they can be delegated to the server (if the server supports them) by setting the [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/'), **remoteOperations**.[groupPaging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations/groupPaging.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#groupPaging'), or **remoteOperations**.[summary](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations/summary.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#summary') option to **true**.

#####See Also#####
- [Custom Aggregate Function](/concepts/05%20Widgets/DataGrid/65%20Summaries/07%20Custom%20Aggregate%20Function '/Documentation/Guide/Widgets/DataGrid/Summaries/Custom_Aggregate_Function/')
