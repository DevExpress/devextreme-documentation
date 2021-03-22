---
id: GridBase.Options.selectedRowKeys
type: Array<any>
firedEvents: selectionChanged
---
---
##### shortDescription
Allows you to select rows or determine which rows are selected.

---
Keys are stored in the order the user selects rows.

To access a row using its key, specify the data field that provides key values. Assign the data field's name to the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') property of the [store](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores') that underlies the [dataSource](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource').

#####See Also#####
- [Initial and Runtime Selection](/concepts/05%20UI%20Components/DataGrid/50%20Selection/20%20API/1%20Initial%20and%20Runtime%20Selection.md '/Documentation/Guide/UI_Components/{WidgetName}/Selection/#API/Initial_and_Runtime_Selection')
- [getSelectedRowKeys()](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/getSelectedRowKeys().md '{basewidgetpath}/Methods/#getSelectedRowKeys')
- [getSelectedRowsData()](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/getSelectedRowsData().md '{basewidgetpath}/Methods/#getSelectedRowsData')