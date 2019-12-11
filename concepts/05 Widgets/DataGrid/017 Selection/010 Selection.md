Selection is a **DataGrid** feature that allows an end-user to mark certain rows in a grid as selected. Selected rows have a differing appearance from regular rows. After a row is selected, its data may be processed the way you require.

[note] Only [data rows](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/020%20Grid%20Rows.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows') can be selected.

In the following subtopics, you will learn how to configure selection in the UI and in code, select rows initially and use the keyboard to perform selection.

[note]We strongly recommend specifying the **key** option of the underlying [Store](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') of the [dataSource](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource') to uniquely identify records within a table.