We recommend configuring one of the following features for a user to navigate a large dataset:

- [**Pager**](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/pager '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/')        
The pager allows a user to switch between pages in the dataset. This is the default navigation method.

- **Virtual scrolling**        
Virtual scrolling allows users to scroll page by page or jump to any page in the dataset. To enable it, set **scrolling**.[mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/scrolling/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#mode') to *"virtual"*.

- **Infinite scrolling**        
In this mode, users scroll data page by page, but cannot skip pages. Use this mode if the virtual scrolling mode reduces performance, and navigation via the pager does not suit your case. To enable infinite scrolling, set **scrolling**.[mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/scrolling/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#mode') to *"infinite"*.

Use the **paging**.[pageSize](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/paging/pageSize.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageSize') to specify the number of rows that are loaded at a time. The bigger this value, the fewer requests are sent to the database but increases the data transfer rate. This option is applied regardless of the specified navigation method.
